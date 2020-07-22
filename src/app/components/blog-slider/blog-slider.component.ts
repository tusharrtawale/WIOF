import { Component, Input, OnInit } from "@angular/core";
import { BLOG_SLIDER_OPTIONS } from "src/app/app.constants";
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: "app-blog-slider",
  templateUrl: "./blog-slider.component.html",
  styleUrls: ["./blog-slider.component.scss"],
})
export class BlogSliderComponent implements OnInit {
  @Input() blogList: Array<Blog>;
  @Input() element:String;

  slideOpts = BLOG_SLIDER_OPTIONS;

  constructor() {}

  ngOnInit() { }
}
