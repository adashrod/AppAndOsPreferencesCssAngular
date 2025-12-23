import { Component } from "@angular/core";

@Component({
    selector: "app-animation-container",
    standalone: true,
    imports: [],
    template: `
        <div class='animation-container'>
            <div>An animated box or blank if the browser doesn't support the feature(s):</div>
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
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AnimationContainerComponent {}
