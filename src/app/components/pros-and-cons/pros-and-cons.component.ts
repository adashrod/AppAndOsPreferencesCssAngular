import { Component, Input } from "@angular/core";

@Component({
    selector: "app-pros-and-cons",
    standalone: true,
    imports: [],
    templateUrl: "./pros-and-cons.component.html",
    styleUrl: "./pros-and-cons.component.css"
})
export class ProsAndConsComponent {
    @Input({ required: true }) public pros!: string[];
    @Input({ required: true }) public cons!: string[];
}
