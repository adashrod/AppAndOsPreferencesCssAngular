import { Component } from "@angular/core";

import { HighlightAuto } from "ngx-highlightjs";

import { AnimationContainerComponent } from "app/components/animation-container/animation-container.component";
import { ColorLegendComponent } from "app/components/color-legend/color-legend.component";
import { ProsAndConsComponent } from "app/components/pros-and-cons/pros-and-cons.component";
import { CSS_USAGE } from "app/util/copy";

@Component({
    selector: "app-strategy1-css-vars-and-classes",
    standalone: true,
    imports: [
        AnimationContainerComponent,
        ColorLegendComponent,
        ProsAndConsComponent,
        HighlightAuto,
    ],
    templateUrl: "./strategy1-css-vars-and-classes.component.html",
    styleUrl: "./strategy1-css-vars-and-classes.component.css"
})
export class Strategy1CssVarsAndClassesComponent {
    public jsWiring = `
let uiPrefReducedMotion;

// fired when user selects preference in application UI
// reducedMotionPreference: "animate" | "reduce" | "system"
function setReducedMotionPreference(reducedMotionPreference: string): void {
    uiPrefReducedMotion = reducedMotionPreference;
    const mediaQueryMatches = isMotionReducedByOs();
    updateClassName(mediaQueryMatches);
}

const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

// media query listener updates the CSS class whenever the system preference changes
mediaQuery.addEventListener("change", (event: MediaQueryListEvent) => {
    updateClassName(event.matches);
});

function updateClassName(mediaQueryMatches: boolean | null): void {
    document.body.classList.remove("animate", "reduce");
    const className = calculateClassName(mediaQueryMatches);
    document.body.classList.add(className);
}

function calculateClassName(mediaQueryMatches: boolean | null): string[] {
    // Application preference implemented in the app UI takes precedence
    if (uiPrefReducedMotion === "animate") {
        return "animate";
    } else if (uiPrefReducedMotion === "reduce") {
        return "reduce";
    } else { // system

        // if user chooses "system" in the app UI, defer to the media query, here in code
        if (mediaQueryMatches !== null) {
            return mediaQueryMatches ? "reduce" : "animate";
        }
    }

    return "animate";
}

function isMotionReducedByOs(): boolean | null {
    if (typeof window !== "undefined") {
        return mediaQuery.matches;
    }

    return null;
}`;

    public cssWiring = `
/* "animate" and "reduce" classes are added to <body> by JS.
 * There is no "system" class because that setting is only used in code to determine whether to use "animate" or "reduce".
 */

body.animate {
    /* Define token values to be used in components */
    --anim-duration-long: 5s;
    --anim-iteration-count-infinite: infinite;
}

body.reduce {
    /* Define token values */
    --anim-duration-long: 1ms;
    --anim-iteration-count-infinite: 1;
}`;

    public cssUsage = CSS_USAGE;

    public pros: string[] = [
        "Simple to implement",
        "No media queries needed in CSS",
        "Works in all browsers that support CSS variables",
        "No code duplication"
    ];
    public cons: string[] = [
        "Calculation of effective value is in JS, not CSS"
    ];
}
