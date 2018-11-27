import { Component, OnInit } from "@angular/core";
import * as dialogs from "tns-core-modules/ui/dialogs";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    onLongPress(item: Item) {
        dialogs.action({
            message: item.name,
            cancelButtonText: 'Cancel',
            actions: [
                'Some action',
                'Delete'
            ]
        }).then(result => {
            console.log("Dialog result: " + result);
            switch (result) {
                case 'Some action':
                    dialogs.alert('Yeah! You did some action!');
                    break;
                case 'Delete':
                    dialogs.confirm({
                        title: 'Delete',
                        message: 'Are you sure you want to remove ' + item.name + ' ?',
                        okButtonText: 'Yes',
                        cancelButtonText: 'No'
                    }).then(deleted => {
                        if (deleted) {
                            this.items.splice(this.items.indexOf(item), 1);
                            dialogs.alert(item.name + ' was succesfully removed!');
                        }
                    })
                    break;
                default:
                    break;
            }
        })
        console.log(item);
    }
}