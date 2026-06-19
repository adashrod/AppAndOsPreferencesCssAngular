/* global window, sessionStorage */
import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { Router, RouterLink, RouterOutlet } from "@angular/router";

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

    public constructor(
        @Inject(DOCUMENT) private document: Document,
        private router: Router
    ) {}

    public ngOnInit(): void {
        // Handle redirect from 404.html on GitHub Pages
        const redirect = sessionStorage.getItem("redirect");
        if (redirect !== null) {
            sessionStorage.removeItem("redirect");
            void this.router.navigateByUrl(redirect);
        }

        this.setReducedMotionPreference("system");
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        mediaQuery.addEventListener("change", (event: MediaQueryListEvent) => {
            this.updateStrategy1ClassNames(event.matches);
            // no need to update anything for strategies 2 and 3 here because they check the media query in CSS
        });
    }

    public setReducedMotionPreference(reducedMotionPreference: string): void {
        this.uiPrefReducedMotion = reducedMotionPreference;
        const mediaQueryMatches = this.getOsReducedMotion();
        this.updateStrategy1ClassNames(mediaQueryMatches);
        // Strategies 2 and 3 check the media query in CSS
        this.updateStrategy2ClassNames();
        this.updateStrategy3ClassNames();
    }

    private updateStrategy1ClassNames(mediaQueryMatches: boolean | null): void {
        this.document.body.classList.remove(
            "strategy1-animate",
            "strategy1-reduce",
            "strategy1-debug-os-reduce",
            "strategy1-debug-os-animate",
            "strategy1-debug-ui-animate",
            "strategy1-debug-ui-reduce"
        );
        const strategy1ClassNames = this.calculateStrategy1ClassNames(mediaQueryMatches);
        this.document.body.classList.add(...strategy1ClassNames);
    }

    private calculateStrategy1ClassNames(mediaQueryMatches: boolean | null): string[] {
        const result = this.calculateStrategy1DebugClassNames();
        if (this.uiPrefReducedMotion === "animate") {
            result.push("strategy1-animate");
        } else if (this.uiPrefReducedMotion === "reduce") {
            result.push("strategy1-reduce");
        } else { // system
            if (mediaQueryMatches !== null) {
                result.push(mediaQueryMatches ? "strategy1-reduce" : "strategy1-animate");
            }
        }
        return result;
    }

    /**
     * @returns a CSS class used only for debugging (the box color), based on both the OS and UI settings
     */
    private calculateStrategy1DebugClassNames(): string[] {
        const result: string[] = [];
        switch (this.uiPrefReducedMotion) {
            case "animate":
                result.push("strategy1-debug-ui-animate");
                break;
            case "reduce":
                result.push("strategy1-debug-ui-reduce");
                break;
            case "system": {
                const prefersReducedMotion = this.getOsReducedMotion();
                if (prefersReducedMotion !== null) {
                    result.push(prefersReducedMotion ? "strategy1-debug-os-reduce" : "strategy1-debug-os-animate");
                }
                break;
            }
            default:
                throw new Error(`Invalid UI reduced motion value: ${this.uiPrefReducedMotion}`);
        }
        return result;
    }

    private updateStrategy2ClassNames(): void {
        this.document.body.classList.remove(
            "strategy2-ui-animate",
            "strategy2-ui-reduce",
            "strategy2-ui-system",
        );
        this.document.body.classList.add(`strategy2-ui-${this.uiPrefReducedMotion}`);
    }

    private updateStrategy3ClassNames(): void {
        this.document.body.classList.remove(
            "strategy3-ui-animate",
            "strategy3-ui-reduce",
            "strategy3-ui-system",
        );
        this.document.body.classList.add(`strategy3-ui-${this.uiPrefReducedMotion}`);
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
