"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("tns-core-modules/ui/dialogs");
var item_service_1 = require("../../item/item.service");
var HomeComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function HomeComponent(itemService) {
        this.itemService = itemService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    HomeComponent.prototype.onLongPress = function (item) {
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
    HomeComponent = __decorate([
        core_1.Component({
            selector: "ns-home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxREFBdUQ7QUFHdkQsd0RBQXNEO0FBT3REO0lBR0ksNElBQTRJO0lBQzVJLGlIQUFpSDtJQUNqSCx1QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBSSxDQUFDO0lBRWpELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxJQUFVO1FBQXRCLGlCQWdDQztRQS9CRyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ1gsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2xCLGdCQUFnQixFQUFFLFFBQVE7WUFDMUIsT0FBTyxFQUFFO2dCQUNMLGFBQWE7Z0JBQ2IsUUFBUTthQUNYO1NBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLFFBQVEsTUFBTSxFQUFFO2dCQUNaLEtBQUssYUFBYTtvQkFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7b0JBQzVDLE1BQU07Z0JBQ1YsS0FBSyxRQUFRO29CQUNULE9BQU8sQ0FBQyxPQUFPLENBQUM7d0JBQ1osS0FBSyxFQUFFLFFBQVE7d0JBQ2YsT0FBTyxFQUFFLGtDQUFrQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTt3QkFDOUQsWUFBWSxFQUFFLEtBQUs7d0JBQ25CLGdCQUFnQixFQUFFLElBQUk7cUJBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPO3dCQUNYLElBQUksT0FBTyxFQUFFOzRCQUNULEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUMvQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsMkJBQTJCLENBQUMsQ0FBQzt5QkFDMUQ7b0JBQ0wsQ0FBQyxDQUFDLENBQUE7b0JBQ0YsTUFBTTtnQkFDVjtvQkFDSSxNQUFNO2FBQ2I7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQTNDUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQU1tQywwQkFBVztPQUxuQyxhQUFhLENBNEN6QjtJQUFELG9CQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7QUE1Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLi8uLi9pdGVtL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2l0ZW0vaXRlbS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogSXRlbVtdO1xuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLlxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICB9XG5cbiAgICBvbkxvbmdQcmVzcyhpdGVtOiBJdGVtKSB7XG4gICAgICAgIGRpYWxvZ3MuYWN0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICAgICAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgICAgICAgICdTb21lIGFjdGlvbicsXG4gICAgICAgICAgICAgICAgJ0RlbGV0ZSdcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ1NvbWUgYWN0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydCgnWWVhaCEgWW91IGRpZCBzb21lIGFjdGlvbiEnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnRGVsZXRlJzpcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5jb25maXJtKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRGVsZXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlICcgKyBpdGVtLm5hbWUgKyAnID8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnWWVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdObydcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihkZWxldGVkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KGl0ZW0ubmFtZSArICcgd2FzIHN1Y2Nlc2Z1bGx5IHJlbW92ZWQhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICB9XG59Il19