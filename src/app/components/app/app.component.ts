/* global window */
import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

import { WelcomeComponent } from "app/components/welcome/welcome.component";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [
        RouterLink,
        RouterOutlet,
        WelcomeComponent,
    ],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css"
})
export class AppComponent implements OnInit {
    public uiPrefReducedMotion!: string;

    public constructor(@Inject(DOCUMENT) private document: Document) {}

    public ngOnInit(): void {
        this.setReducedMotionPreference("system");
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        mediaQuery.addEventListener("change", (event: MediaQueryListEvent) => {
            this.updateStrategy3ClassNames(event.matches);
        });
    }

    public setReducedMotionPreference(reducedMotionPreference: string): void {
        this.uiPrefReducedMotion = reducedMotionPreference;
        this.document.body.classList.remove("strategy1-ui-animate", "strategy1-ui-reduce", "strategy1-ui-system", "strategy2-ui-animate", "strategy2-ui-reduce", "strategy2-ui-system");
        this.document.body.classList.add(`strategy1-ui-${reducedMotionPreference}`, `strategy2-ui-${reducedMotionPreference}`);
        const mediaQueryMatches = this.getOsReducedMotion();
        this.updateStrategy3ClassNames(mediaQueryMatches);
    }

    private updateStrategy3ClassNames(mediaQueryMatches: boolean | null): void {
        const strategy3ClassNames = this.calculateStrategy3ClassNames(mediaQueryMatches);
        this.document.body.classList.remove("strategy3-animate", "strategy3-reduce", "strategy3-debug-os-reduce", "strategy3-debug-os-animate", "strategy3-debug-ui-animate", "strategy3-debug-ui-reduce");
        this.document.body.classList.add(...strategy3ClassNames);
    }

    private calculateStrategy3ClassNames(mediaQueryMatches: boolean | null): string[] {
        const result = this.calculateStrategy3DebugClassNames();
        if (this.uiPrefReducedMotion === "animate") {
            result.push("strategy3-animate");
        } else if (this.uiPrefReducedMotion === "reduce") {
            result.push("strategy3-reduce");
        } else { // system
            if (mediaQueryMatches !== null) {
                result.push(mediaQueryMatches ? "strategy3-reduce" : "strategy3-animate");
            }
        }
        return result;
    }

    /**
     * @returns a CSS class used only for debugging (the box color), based on both the OS and UI settings
     */
    private calculateStrategy3DebugClassNames(): string[] {
        const result: string[] = [];
        switch (this.uiPrefReducedMotion) {
            case "animate":
                result.push("strategy3-debug-ui-animate");
                break;
            case "reduce":
                result.push("strategy3-debug-ui-reduce");
                break;
            case "system": {
                const prefersReducedMotion = this.getOsReducedMotion();
                if (prefersReducedMotion !== null) {
                    result.push(prefersReducedMotion ? "strategy3-debug-os-reduce" : "strategy3-debug-os-animate");
                }
                break;
            }
            default:
                throw new Error(`Invalid UI reduced motion value: ${this.uiPrefReducedMotion}`);
        }
        return result;
    }

    /**
     * @returns true if the user has set their preferred reduced motion to reduce,
     * false if they have set it to no preference, or null if doing SSR
     */
    private getOsReducedMotion(): boolean | null {
        if (typeof window !== "undefined") {
            return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        }
        return null;
    }
}
