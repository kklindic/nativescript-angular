import { Component, ElementRef } from "@angular/core";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent {
    constructor(
        public elementRef: ElementRef
    ) {}
}
