import { Component } from "@angular/core";

import { Highlight } from "ngx-highlightjs";

import { AnimationContainerComponent } from "app/components/animation-container/animation-container.component";
import { BrowserSupportNoticeComponent, Feature } from "app/components/browser-support-notice/browser-support-notice.component";
import { ColorLegendComponent } from "app/components/color-legend/color-legend.component";
import { ProsAndConsComponent } from "app/components/pros-and-cons/pros-and-cons.component";
import { CSS_USAGE, TS_ADD_PREFERENCE_CLASS_TO_BODY } from "app/util/copy";

@Component({
    selector: "app-strategy3-css-if",
    standalone: true,
    imports: [
        AnimationContainerComponent,
        BrowserSupportNoticeComponent,
        ColorLegendComponent,
        Highlight,
        ProsAndConsComponent,
    ],
    templateUrl: "./strategy3-css-if.component.html",
    styleUrl: "./strategy3-css-if.component.css"
})
export class Strategy3CssIfComponent {
    public readonly Feature = Feature;

    public jsWiring = TS_ADD_PREFERENCE_CLASS_TO_BODY;

    public cssWiring = `/* use the global class to create the custom property */
body.reduce { --app-preference: reduce; }
body.animate { --app-preference: animate; }
body.system { --app-preference: system; }

body {
    /* Define token values using conditional logic */
    --anim-duration-long: if(
        style(--app-preference: reduce) or
            (style(--app-preference: system) and media(prefers-reduced-motion: reduce)): 1ms;
        else: 5s;
    );
    /* Define token values using conditional logic */
    --anim-iteration-count-infinite: if(
        style(--app-preference: reduce) or
            (style(--app-preference: system) and media(prefers-reduced-motion: reduce)): 1;
        else: infinite;
    );
}`;

    public cssFuture = `/* THE FOLLOWING IS NOT POSSIBLE, but could be once @custom-media is widely supported, if custom media supports style queries.
 * If supported, this would make strategy 3 using CSS if() very concise. Fingers crossed 🤞 that this will be possible someday.
 */
@custom-media --custom-reduced style(--app-preference: reduce) or
    (style(--app-preference: system) and (prefers-reduced-motion: reduce));

body {
    --anim-duration-long: if(--custom-reduced): 5s; else: 1s;);
    --anim-iteration-count: if(--custom-reduced): 2; else: infinite;);
}`;

    public cssUsage = CSS_USAGE;

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
