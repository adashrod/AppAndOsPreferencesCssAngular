import { Component } from "@angular/core";

import { HighlightAuto } from "ngx-highlightjs";

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
        HighlightAuto,
    ],
    templateUrl: "./strategy2-container-style.component.html",
    styleUrl: "./strategy2-container-style.component.css"
})
export class Strategy2ContainerStyleComponent {
    public readonly Feature = Feature;
    public readonly supportsContainerStyleQueriesWithCustomProperties = supportsContainerStyleQueriesWithCustomProperties;

    public jsWiring = `// fired when user selects preference in application UI
function setReducedMotionPreference(reducedMotionPreference: string): void {
    // whether "system" effectively means "animate" or "reduce" is determined in CSS, not in code
    this.document.body.classList.remove(
        "animate",
        "reduce",
        "system",
    );
    document.body.classList.add(reducedMotionPreference);
}`;

    public cssWiring = `/* use the global class to create the custom property */
body.reduce { --app-preference: reduce; }
body.animate { --app-preference: animate; }
body.system { --app-preference: system; }

main {
    /* Define base token values */
    --anim-duration-long: 5s;
    --anim-iteration-count-infinite: infinite;
}

@container style(--app-preference: reduce) {
    main {
        /* Override token values for UI preference override */
        --anim-duration-long: 1ms;
        --anim-iteration-count-infinite: 1;
    }
}

@container style(--app-preference: system) {
    @media(prefers-reduced-motion: reduce) {
        main {
            /* Override token values when UI preference == "system" */
            /* rules are duplicated here because of the nested media query */
            --anim-duration-long: 1ms;
            --anim-iteration-count-infinite: 1;
        }
    }
}`;

    public cssUsage = `.animated-component {
    animation-name: slider;
    /* Use tokens and get whatever values they currently have; components
     * don't need to know about settings that determine behavior */
    animation-duration: --anim-duration-long;
    animation-iteration-count: --anim-iteration-count-infinite;
}`;

    public pros: string[] = [
        "Calculation of effective value is in CSS, close to the implementation"
    ];
    public cons: string[] = [
        "Might not be supported in all browsers yet",
        "Rules are duplicated because of media query nested in a container style query",
    ];
}
