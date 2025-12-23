import { Component } from "@angular/core";

import { BrowserSupportNoticeComponent, Feature } from "app/components/browser-support-notice/browser-support-notice.component";

@Component({
    selector: "app-strategy1-css-if",
    standalone: true,
    imports: [BrowserSupportNoticeComponent],
    templateUrl: "./strategy1-css-if.component.html",
    styleUrl: "./strategy1-css-if.component.css"
})
export class Strategy1CssIfComponent {
    public readonly Feature = Feature;
}
