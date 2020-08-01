import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.page.html',
  styleUrls: ['./blogs.page.scss'],
})
export class BlogsPage implements OnInit {
  blogs: any;  
  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    this.route.params.subscribe(paramsMap => {
      if(paramsMap['element']){
        //TODO category handling pending
        this.blogs = this.blogService.getBlogs('Earth');
      }
    })
  }

}
