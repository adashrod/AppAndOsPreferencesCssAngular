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
    template: `
        @if (show) {
            <div class="notice">
                Your browser does not support <a [href]="featureConfig.featureDocUrl" target="_blank">{{ featureConfig.featureName }}</a>.
            </div>
        }
    `,
    styles: `
        .notice {
            background-color: #ffe0e0;
            color: red;
            border: 2px solid red;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 10px;
        }
    `
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
        }
    }

    public get show(): boolean {
        return !this.featureConfig.test();
    }
}
