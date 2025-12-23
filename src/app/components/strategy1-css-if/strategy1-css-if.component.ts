import { Component } from "@angular/core";

import { AnimationContainerComponent } from "app/components/animation-container/animation-container.component";
import { BrowserSupportNoticeComponent, Feature } from "app/components/browser-support-notice/browser-support-notice.component";
import { ColorLegendComponent } from "app/components/color-legend/color-legend.component";

@Component({
    selector: "app-strategy1-css-if",
    standalone: true,
    imports: [
        AnimationContainerComponent,
        BrowserSupportNoticeComponent,
        ColorLegendComponent
    ],    
    templateUrl: "./strategy1-css-if.component.html",
    styleUrl: "./strategy1-css-if.component.css"
})
export class Strategy1CssIfComponent {
    public readonly Feature = Feature;
}
