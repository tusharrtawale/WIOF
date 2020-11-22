import { Component } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Meta, MetaDefinition } from '@angular/platform-browser';
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private metaService:Meta
  ) {
    this.initializeApp();
    this.metaService.addTag( { name:'og:title',content:"World Is One Family"});
    this.metaService.addTag( { name:'og:description',content:"An ancient Indian idea of Vasudhaiva Kutumbakam (The entire world is one family) is the need of the hour for this planet. We are here with one and only one purpose, to awaken, inform and encourage people to come together to make a difference to their lives and the lives of many others less fortunate so as to add meaning to their lives."});
    this.metaService.addTag( { name:'og:image',content:"https://worldisonefamily.com/wiof_message.jpg"});
    this.metaService.addTag( { name:'og:url',content:"https://worldisonefamily.com/home"});
    this.metaService.addTag( { name:'twitter:card',content:"summary_large_image"});
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


// <!--  Non-Essential, But Recommended -->
// // 
// <meta property="og:site_name" content="European Travel, Inc.">
// <meta name="twitter:image:alt" content="Alt text for image">


// <!--  Non-Essential, But Required for Analytics -->

// <meta property="fb:app_id" content="your_app_id" />
// <meta name="twitter:site" content="@website-username">
}
