import { Component } from "@angular/core";

@Component({
    selector: "app-color-legend",
    standalone: true,
    imports: [],
    template: `
        <p>The color of the animated box indicates the current setting:</p>
        <ul>
            <li><span style="color: red;">Red:</span> Animation (UI override)</li>
            <li><span style="color: yellow; background-color: gray;">Yellow:</span> Reduced Motion (UI override)</li>
            <li><span style="color: blue;">Blue:</span> Animation (System)</li>
            <li><span style="color: green;">Green:</span> Reduced Motion (System)</li>
            <li>Invisible: browser doesn't support tools used to determine the setting</li>
        </ul>
    `,
    styles: ""
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ColorLegendComponent {}
