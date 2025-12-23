import { Component, Input } from "@angular/core";

import { supportsContainerStyleQueriesWithCustomProperties, supportsCssIf } from "app/util/css";

export enum Feature {
    CSS_IF = "CSS_IF",
    CONTAINER_STYLE_CUSTOM_PROPERTIES = "CONTAINER_STYLE_CUSTOM_PROPERTIES",
}

interface FeatureConfig {
    featureDocUrl: string;
    featureName: string;
    test: () => boolean;
}

@Component({
    selector: "app-browser-support-notice",
    standalone: true,
    imports: [],
    templateUrl: "./browser-support-notice.component.html",
    styleUrl: "./browser-support-notice.component.css"
})
export class BrowserSupportNoticeComponent {
    @Input({ required: true }) public feature!: Feature;

    public get featureConfig(): FeatureConfig {
        switch (this.feature) {
            case Feature.CSS_IF:
                return {
                    featureDocUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS/if#browser_compatibility",
                    featureName: "CSS if()",
                    test: supportsCssIf,
                };
            case Feature.CONTAINER_STYLE_CUSTOM_PROPERTIES:
                return {
                    featureDocUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS/@container#browser_compatibility",
                    featureName: "CSS @container style() queries with custom properties",
                    test: supportsContainerStyleQueriesWithCustomProperties,
                };
            default:
                throw new Error(`Unknown feature: ${this.feature}`);
        }
    }

    public get show(): boolean {
        return !this.featureConfig.test();
    }
}
