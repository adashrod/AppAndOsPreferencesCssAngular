import { Component } from "@angular/core";

import { HighlightAuto } from "ngx-highlightjs";

import { AnimationContainerComponent } from "app/components/animation-container/animation-container.component";
import { BrowserSupportNoticeComponent, Feature } from "app/components/browser-support-notice/browser-support-notice.component";
import { ColorLegendComponent } from "app/components/color-legend/color-legend.component";
import { ProsAndConsComponent } from "app/components/pros-and-cons/pros-and-cons.component";
import { CSS_USAGE, TS_ADD_PREFERENCE_CLASS_TO_BODY } from "app/util/copy";
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

    public jsWiring = TS_ADD_PREFERENCE_CLASS_TO_BODY;

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

    public cssUsage = CSS_USAGE;

    public pros: string[] = [
        "Calculation of effective value is in CSS, close to the implementation"
    ];
    public cons: string[] = [
        "Might not be supported in all browsers yet",
        "Rules are duplicated because of media query nested in a container style query",
    ];
}
