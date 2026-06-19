import { Component, Input } from "@angular/core";

export type LabelType = "box" | "text";

@Component({
    selector: "app-animation-container",
    standalone: true,
    imports: [],
    template: `
        <div class='animation-container'>
            <div>
                @switch (label) {
                    @case ("box") {
                        <span>An animated box</span> {{suffixText}}
                    }
                    @case ("text") {
                        <span>Some animated text</span> {{suffixText}}
                    }
                }
            </div>
            <ng-content />
        </div>`,
    styles: `
        .animation-container {
            min-height: 100px;
            border: 1px solid #ccc;
            border-radius: 10px;
            padding: 10px;
            margin-bottom: 10px;
        }
    `
})
export class AnimationContainerComponent {
    @Input({ required: false }) public label: LabelType | null = null;
    public readonly suffixText = "or blank if the browser doesn't support the feature(s):";
}
