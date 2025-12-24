import { Component } from "@angular/core";

import { AnimationContainerComponent } from "app/components/animation-container/animation-container.component";
import { ColorLegendComponent } from "app/components/color-legend/color-legend.component";
import { ProsAndConsComponent } from "app/components/pros-and-cons/pros-and-cons.component";

@Component({
    selector: "app-strategy1-css-vars-and-classes",
    standalone: true,
    imports: [
        AnimationContainerComponent,
        ColorLegendComponent,
        ProsAndConsComponent,
    ],
    templateUrl: "./strategy1-css-vars-and-classes.component.html",
    styleUrl: "./strategy1-css-vars-and-classes.component.css"
})
export class Strategy1CssVarsAndClassesComponent {
    
    public pros: string[] = [
        "Simple to implement",
        "No media queries needed in CSS",
        "Works in all browsers that support CSS variables",
    ];
    public cons: string[] = [

    ];
}
