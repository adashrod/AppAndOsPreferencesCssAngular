import { Component } from "@angular/core";

import { AnimationContainerComponent } from "app/components/animation-container/animation-container.component";
import { BrowserSupportNoticeComponent, Feature } from "app/components/browser-support-notice/browser-support-notice.component";
import { ColorLegendComponent } from "app/components/color-legend/color-legend.component";
import { ProsAndConsComponent } from "app/components/pros-and-cons/pros-and-cons.component";
import { supportsContainerStyleQueriesWithCustomProperties } from "app/util/css";

@Component({
    selector: "app-strategy2-container-style",
    standalone: true,
    imports: [
        AnimationContainerComponent,
        BrowserSupportNoticeComponent,
        ColorLegendComponent,
        ProsAndConsComponent,
    ],
    templateUrl: "./strategy2-container-style.component.html",
    styleUrl: "./strategy2-container-style.component.css"
})
export class Strategy2ContainerStyleComponent {
    public readonly Feature = Feature;
    public readonly supportsContainerStyleQueriesWithCustomProperties = supportsContainerStyleQueriesWithCustomProperties;

    public pros: string[] = [
        "Calculation of effective value is in CSS, close to the implementation"
    ];
    public cons: string[] = [
        "Might not be supported in all browsers yet",
        "Rules are duplicated because of media query nested in a container style query",
    ];
}
