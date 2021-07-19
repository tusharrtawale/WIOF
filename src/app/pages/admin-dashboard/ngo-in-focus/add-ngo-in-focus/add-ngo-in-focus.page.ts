import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, throwError } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';
import {
  PAGE_CATEGORY_MAP,
  UI_MESSAGES,
  ITEMS,
  ITEM_STATUS
} from 'src/app/app.constants';
import { UiUtilService } from 'src/app/util/UiUtilService';
import { NgoInFocus } from 'src/app/models/NgoInFocus';
import { NgoInFocusService } from 'src/app/services/ngo-in-focus.service';

@Component({
  selector: 'app-add-ngo-in-focus',
  templateUrl: './add-ngo-in-focus.page.html',
  styleUrls: ['./add-ngo-in-focus.page.scss']
})
export class AddNgoInFocusPage implements OnInit, OnDestroy {
  isEditMode = false;
  ngoInFocus: NgoInFocus = {} as NgoInFocus;
  addNgoInFocusForm: FormGroup;
  loader;
  destroy$: Subject<boolean> = new Subject();
  categories: string[] = Object.values(PAGE_CATEGORY_MAP);

  pageContent = {
    addNgoInFocusTitle: 'Add In Focus',
    editNgoInFocusTitle: 'Edit In Focus',
    nameLabel: 'Title',
    linkLabel: 'Sub Title',
    descriptionLabel: 'Description',
    categoryLabel: 'Category',
    submitDateLabel: 'Submit Date',
    publishDateLabel: 'Publish Date',
    unpublishDateLabel: 'Unpublish Date',
    saveLabel: 'Save',
    cancelLabel: 'Cancel'
  };

  constructor(
    private uiUtil: UiUtilService,
    private ngoInFocusService: NgoInFocusService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.ngoInFocus = {} as NgoInFocus;
    this.route.paramMap.subscribe((param) => {
      if (param.has('mode') && param.get('mode') === 'edit') {
        this.ngoInFocus = this.ngoInFocusService.getViewEditModeNgoInFocus();
        if (!this.ngoInFocus) {
          this.router.navigateByUrl('/admin-dashboard/manage-ngo-in-focus');
          return;
        }
        this.isEditMode = true;
        this.addNgoInFocusForm = this.initFormByNgoInFocus(this.ngoInFocus);
      } else {
        this.isEditMode = false;
        this.addNgoInFocusForm = this.initForm();
      }
    });
  }

  private initForm() {
    return new FormGroup({
      ngoName: new FormControl('', Validators.required),
      ngoLink: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      //ngoLink: new FormControl('', Validators.required),
      //knowMoreLink: new FormControl('', Validators.required)
    });
  }

  private initFormByNgoInFocus(ngoInFocus: NgoInFocus) {
    return new FormGroup({
      ngoName: new FormControl(ngoInFocus.ngoName, Validators.required),
      knowMoreLink: new FormControl(ngoInFocus.knowMoreLink, Validators.required),
      description: new FormControl(ngoInFocus.description, Validators.required),
      category: new FormControl(ngoInFocus.category, Validators.required),
      //ngoLink: new FormControl(ngoInFocus.ngoLink, Validators.required),
      //knowMoreLink: new FormControl(ngoInFocus.ngoImage, Validators.required)
    });
  }

  async onSubmit() {
    if (this.addNgoInFocusForm.valid) {
      console.log(this.addNgoInFocusForm.value);
      this.ngoInFocus = this.createByForm(
        this.addNgoInFocusForm,
        this.ngoInFocus,
        this.isEditMode
      );
      this.loader = await this.uiUtil.showLoader(
        UI_MESSAGES.SAVE_IN_PROGRESS.replace(
          UI_MESSAGES.PLACEHOLDER,
          ITEMS.IN_FOCUS
        )
      );
      this.ngoInFocusService
        .saveNgoInFocus(this.ngoInFocus)
        .pipe(
          takeUntil(this.destroy$),
          catchError((err) => {
            return throwError(err);
          })
        )
        .subscribe(
          (response) => {
            this.loader.dismiss();
            if (!this.isEditMode) {
              this.addNgoInFocusForm.reset();
            }
            this.uiUtil.presentAlert(
              UI_MESSAGES.SUCCESS_HEADER,
              UI_MESSAGES.SUCCESS_ADD_ITEM_DESC.replace(
                UI_MESSAGES.PLACEHOLDER,
                ITEMS.IN_FOCUS
              ),
              [UI_MESSAGES.SUCCESS_CTA_TEXT]
            );
          },
          (error) => {
            console.log(error);
            this.loader.dismiss();
            this.uiUtil.presentAlert(
              UI_MESSAGES.FAILURE_HEADER,
              UI_MESSAGES.FAILURE_ADD_ITEM_DESC.replace(
                UI_MESSAGES.PLACEHOLDER,
                ITEMS.IN_FOCUS
              ),
              [UI_MESSAGES.FAILURE_CTA_TEXT]
            );
          }
        );
    }
  }

  private createByForm(
    addNgoInFocusForm: FormGroup,
    ngoInFocus: NgoInFocus,
    isEditMode: boolean
  ) {
    return new NgoInFocus(
      isEditMode ? ngoInFocus.id : null,
      addNgoInFocusForm.value.ngoName,
      addNgoInFocusForm.value.ngoLink,
      addNgoInFocusForm.value.description,
      addNgoInFocusForm.value.category,
      isEditMode ? ngoInFocus.status : ITEM_STATUS.SUBMITTED,
      new Date().getTime()
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
