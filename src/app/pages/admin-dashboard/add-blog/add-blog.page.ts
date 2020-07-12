import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AlertController, LoadingController } from "@ionic/angular";
import { ELEMENT_BLOG_CATEGORY } from "src/app/app.constants";
import { Blog } from "src/app/models/Blog";

@Component({
  selector: "app-add-blog",
  templateUrl: "./add-blog.page.html",
  styleUrls: ["./add-blog.page.scss"],
})
export class AddBlogPage implements OnInit {
  categories: String[] = Object.values(ELEMENT_BLOG_CATEGORY);
  addBlogForm: FormGroup;
  loader;
  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.addBlogForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      authorName: new FormControl("", [Validators.required]),
      category: new FormControl("", [Validators.required]),
      subCategory: new FormControl("", [Validators.required]),
      image: new FormControl("", [Validators.required]),
      shortDescription: new FormControl("", [Validators.required]),
      content: new FormControl("", [Validators.required]),
    });
  }

  onSubmit() {
    if (this.addBlogForm.valid) {
      const blog = Blog.createByForm(this.addBlogForm);
      console.log("===== blog details captured =====", blog);
      this.showLoader("We are saving your blog...");
      setTimeout(() => {
        this.presentAlert("Success", "Blog saved successfully", ["OK"]);
        this.loader.dismiss();
        this.addBlogForm.reset();
      }, 2000);
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
