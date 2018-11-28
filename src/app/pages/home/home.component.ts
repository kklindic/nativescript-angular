import { Component, OnInit } from "@angular/core";
import { Item } from "../../item/item";

@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    items: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor() { }

    ngOnInit(): void {}
}