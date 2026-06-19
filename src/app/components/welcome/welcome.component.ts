import { Component } from "@angular/core";

@Component({
    selector: "app-welcome",
    standalone: true,
    imports: [],
    template: `
        <h1>Handling user preferences in CSS 3 ways</h1>
        <p>This is a proof-of-concept for 3 different ways to reconcile operating system preferences with application preferences.</p>
        <p>
            There are OS preferences that can queried in CSS and JS to show different user experiences; these include
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion" target="_blank">reduced motion</a>,
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast" target="_blank">contrast</a>,
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme" target="_blank">dark mode</a>.
            and others. It's simple to use media queries to show different user experiences based on these preferences,
            or alternatively to provide a setting in your app to choose a preference, but you might want to let
            users utilize both, so that they can choose "always on", "always off", or "defer to OS". Here, we show 3
            different ways to do this.
        </p>
        <p>They vary in putting logic in CSS vs. JavaScript, and relying on newer CSS features that are not yet widely supported.</p>
        <p>This uses the reduced motion feature as an example, but other features like dark mode would work the same way.</p>
        <h2>1: Choose a strategy to get started.</h2>
    `,
    styles: ""
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class WelcomeComponent {}
