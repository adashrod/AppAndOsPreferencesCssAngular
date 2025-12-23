import { Component } from "@angular/core";

import { AnimationContainerComponent } from "app/components/animation-container/animation-container.component";
import { ColorLegendComponent } from "app/components/color-legend/color-legend.component";

@Component({
    selector: "app-strategy3-css-vars-and-classes",
    standalone: true,
    imports: [
        AnimationContainerComponent,
        ColorLegendComponent,
    ],
    templateUrl: "./strategy3-css-vars-and-classes.component.html",
    styleUrl: "./strategy3-css-vars-and-classes.component.css"
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Strategy3CssVarsAndClassesComponent {}
