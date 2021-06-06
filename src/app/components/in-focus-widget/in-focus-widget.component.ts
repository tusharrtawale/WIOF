import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { InFocus } from "src/app/models/InFocus";

@Component({
  selector: "app-in-focus-widget",
  templateUrl: "./in-focus-widget.component.html",
  styleUrls: ["./in-focus-widget.component.scss"]
})
export class InFocusWidgetComponent implements OnInit, OnDestroy {
  @Input() element: string;
  @Input() inFocus: InFocus;
  urlSafe: SafeResourceUrl;
  inFocusClass: string;
  iframe_player = document.getElementsByTagName("iframe");

  constructor() {}

  ngOnInit() {
    this.inFocusClass = `wiof-${this.element}`;
  }

  ngOnDestroy() {
    this.stopVideo();
  }

  stopVideo() {
    this.iframe_player[0].contentWindow.postMessage(
      '{"event":"command","func":"' + "stopVideo" + '","args":""}',
      window.location.origin
    );
  }
}
