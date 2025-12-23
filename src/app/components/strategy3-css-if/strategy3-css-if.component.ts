import { Component } from "@angular/core";

import { AnimationContainerComponent } from "app/components/animation-container/animation-container.component";
import { BrowserSupportNoticeComponent, Feature } from "app/components/browser-support-notice/browser-support-notice.component";
import { ColorLegendComponent } from "app/components/color-legend/color-legend.component";

@Component({
    selector: "app-strategy3-css-if",
    standalone: true,
    imports: [
        AnimationContainerComponent,
        BrowserSupportNoticeComponent,
        ColorLegendComponent
    ],    
    templateUrl: "./strategy3-css-if.component.html",
    styleUrl: "./strategy3-css-if.component.css"
})
export class Strategy3CssIfComponent {
    public readonly Feature = Feature;
}
