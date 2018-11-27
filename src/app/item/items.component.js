"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("tns-core-modules/ui/dialogs");
var item_service_1 = require("./item.service");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService) {
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    ItemsComponent.prototype.onLongPress = function (item) {
        var _this = this;
        dialogs.action({
            message: item.name,
            cancelButtonText: 'Cancel',
            actions: [
                'Some action',
                'Delete'
            ]
        }).then(function (result) {
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
                    }).then(function (deleted) {
                        if (deleted) {
                            _this.items.splice(_this.items.indexOf(item), 1);
                            dialogs.alert(item.name + ' was succesfully removed!');
                        }
                    });
                    break;
                default:
                    break;
            }
        });
        console.log(item);
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHFEQUF1RDtBQUd2RCwrQ0FBNkM7QUFPN0M7SUFHSSw0SUFBNEk7SUFDNUksaUhBQWlIO0lBQ2pILHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFJLENBQUM7SUFFakQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLElBQVU7UUFBdEIsaUJBZ0NDO1FBL0JHLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDWCxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDbEIsZ0JBQWdCLEVBQUUsUUFBUTtZQUMxQixPQUFPLEVBQUU7Z0JBQ0wsYUFBYTtnQkFDYixRQUFRO2FBQ1g7U0FDSixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLENBQUM7WUFDeEMsUUFBUSxNQUFNLEVBQUU7Z0JBQ1osS0FBSyxhQUFhO29CQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztvQkFDNUMsTUFBTTtnQkFDVixLQUFLLFFBQVE7b0JBQ1QsT0FBTyxDQUFDLE9BQU8sQ0FBQzt3QkFDWixLQUFLLEVBQUUsUUFBUTt3QkFDZixPQUFPLEVBQUUsa0NBQWtDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO3dCQUM5RCxZQUFZLEVBQUUsS0FBSzt3QkFDbkIsZ0JBQWdCLEVBQUUsSUFBSTtxQkFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU87d0JBQ1gsSUFBSSxPQUFPLEVBQUU7NEJBQ1QsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQy9DLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRywyQkFBMkIsQ0FBQyxDQUFDO3lCQUMxRDtvQkFDTCxDQUFDLENBQUMsQ0FBQTtvQkFDRixNQUFNO2dCQUNWO29CQUNJLE1BQU07YUFDYjtRQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBM0NRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBTW1DLDBCQUFXO09BTG5DLGNBQWMsQ0E0QzFCO0lBQUQscUJBQUM7Q0FBQSxBQTVDRCxJQTRDQztBQTVDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBJdGVtW107XG5cbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xuICAgIH1cblxuICAgIG9uTG9uZ1ByZXNzKGl0ZW06IEl0ZW0pIHtcbiAgICAgICAgZGlhbG9ncy5hY3Rpb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgJ1NvbWUgYWN0aW9uJyxcbiAgICAgICAgICAgICAgICAnRGVsZXRlJ1xuICAgICAgICAgICAgXVxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgcmVzdWx0KTtcbiAgICAgICAgICAgIHN3aXRjaCAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnU29tZSBhY3Rpb24nOlxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KCdZZWFoISBZb3UgZGlkIHNvbWUgYWN0aW9uIScpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdEZWxldGUnOlxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dzLmNvbmZpcm0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdEZWxldGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgJyArIGl0ZW0ubmFtZSArICcgPycsXG4gICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6ICdZZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vJ1xuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGRlbGV0ZWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZSh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoaXRlbS5uYW1lICsgJyB3YXMgc3VjY2VzZnVsbHkgcmVtb3ZlZCEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgIH1cbn0iXX0=