import { Component, OnDestroy, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  wiofLogo: string = "../../assets/logo.jpg";
  sub:Subscription;
  constructor(public platform: Platform, private route:ActivatedRoute) {}

  ngOnInit() {
    this.getColor();
  }
  getColor(){
    console.log(this.route.params);
  }
}
