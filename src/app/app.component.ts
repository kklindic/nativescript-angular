import { Component, ElementRef } from "@angular/core";
import * as app from 'application';
import * as color from 'color';
import { isAndroid } from "tns-core-modules/ui/page/page";

declare var android;
@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent {
    constructor(
        public elementRef: ElementRef
    ) {
        if (isAndroid) {
            const window = app.android.startActivity.getWindow();
            window.setStatusBarColor(new color.Color('#064e46').android);
        }
    }
}
