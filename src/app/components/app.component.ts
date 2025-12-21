import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [
        RouterLink,
        RouterOutlet
    ],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css"
})
 
export class AppComponent implements OnInit {
    public uiPrefReducedMotion!: string;
    
    public constructor(@Inject(DOCUMENT) private document: Document) {}
    
    public ngOnInit(): void {
        this.setRm("system");
    }

    public setRm(rmValue: string): void {
        this.document.body.classList.remove("s1-animate", "s1-reduce", "s1-system", "s2-animate", "s2-reduce", "s2-system");
        this.document.body.classList.add(`s1-${rmValue}`, `s2-${rmValue}`);
        this.uiPrefReducedMotion = rmValue;
    }
}
