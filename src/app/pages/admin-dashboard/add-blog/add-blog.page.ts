import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AlertController, LoadingController } from "@ionic/angular";
import { combineLatest, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ELEMENT_BLOG_CATEGORY } from "src/app/app.constants";
import { Blog } from "src/app/models/Blog";
import { BlogService } from "src/app/services/blog.service";

@Component({
  selector: "app-add-blog",
  templateUrl: "./add-blog.page.html",
  styleUrls: ["./add-blog.page.scss"],
})
export class AddBlogPage implements OnInit {
  categories: String[] = Object.values(ELEMENT_BLOG_CATEGORY);
  addBlogForm: FormGroup;
  blogImage: string;
  blogImageToSave: any;
  loader;
  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    this.addBlogForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      authorName: new FormControl("", [Validators.required]),
      aboutAuthor: new FormControl("", [Validators.required]),
      category: new FormControl("", [Validators.required]),
      subCategory: new FormControl("", [Validators.required]),
      image: new FormControl("", [Validators.required]),
      shortDescription: new FormControl("", [Validators.required]),
      content: new FormControl("", [Validators.required]),
    });
  }

  onFileSelected(event) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    this.blogImageToSave = event.target.files[0];
    fileReader.onload = () => {
      this.blogImage = fileReader.result as string;
      console.log(this.addBlogForm.value.image);
    };
  }

  onSubmit() {
    if (this.addBlogForm.valid) {
      const blog = Blog.createByForm(this.addBlogForm);
      console.log("===== blog details captured =====", blog);
      this.showLoader("We are saving your blog...");
      combineLatest([
        this.blogService.saveBlogImage(this.blogImageToSave, blog.imageName),
        this.blogService.saveBlog(blog),
      ])
        .pipe(
          map(([imgResp, blogResp]) => {
            console.log(imgResp);
            console.log(blogResp);
            return [imgResp, blogResp];
          }),
          catchError((err) => {
            return throwError(err);
          })
        )
        .subscribe(
          ([imgResp, blogResp]) => {
            this.loader.dismiss();
            this.addBlogForm.reset();
            this.presentAlert("Success", "We saved your blog!", ["Cool!"]);
          },
          (error) => {
            this.loader.dismiss();
            this.presentAlert(
              "Error",
              "Uh oh! We could not save it. Please try again.",
              ["OK"]
            );
          }
        );
    }
  }

  async presentAlert(header: string, message: string, buttons: string[]) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: buttons,
    });
    await alert.present();
  }

  async showLoader(message: string) {
    this.loader = await this.loadingCtrl.create({
      message: message,
    });
    this.loader.present();
  }
}
