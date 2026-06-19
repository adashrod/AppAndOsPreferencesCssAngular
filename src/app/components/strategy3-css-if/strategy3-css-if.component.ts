import { Component } from "@angular/core";

import { AnimationContainerComponent } from "app/components/animation-container/animation-container.component";
import { BrowserSupportNoticeComponent, Feature } from "app/components/browser-support-notice/browser-support-notice.component";
import { ColorLegendComponent } from "app/components/color-legend/color-legend.component";
import { ProsAndConsComponent } from "app/components/pros-and-cons/pros-and-cons.component";
import { supportsCssIf } from "app/util/css";

@Component({
    selector: "app-strategy3-css-if",
    standalone: true,
    imports: [
        AnimationContainerComponent,
        BrowserSupportNoticeComponent,
        ColorLegendComponent,
        ProsAndConsComponent,
    ],
    templateUrl: "./strategy3-css-if.component.html",
    styleUrl: "./strategy3-css-if.component.css"
})
export class Strategy3CssIfComponent {
    public readonly Feature = Feature;
    public readonly supportsCssIf = supportsCssIf;

    public pros: string[] = [
        "Declaration of rule conditions is very clear",
        `Condition duplication could be mitigated in the future by <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@custom-media" target="_blank">@custom-media</a>`
    ];
    public cons: string[] = [
        "Not supported in all browsers yet",
        "Features are still experimental and could change in the future",
        "Logic conditions are duplicated for each rule",
    ];
}
