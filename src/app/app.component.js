"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var color = require("color");
var page_1 = require("tns-core-modules/ui/page/page");
var AppComponent = /** @class */ (function () {
    function AppComponent(elementRef) {
        this.elementRef = elementRef;
        if (page_1.isAndroid) {
            var window_1 = app.android.startActivity.getWindow();
            window_1.setStatusBarColor(new color.Color('#064e46').android);
        }
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "./app.component.html",
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0Q7QUFDdEQsaUNBQW1DO0FBQ25DLDZCQUErQjtBQUMvQixzREFBMEQ7QUFRMUQ7SUFDSSxzQkFDVyxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRTdCLElBQUksZ0JBQVMsRUFBRTtZQUNYLElBQU0sUUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JELFFBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDaEU7SUFDTCxDQUFDO0lBUlEsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7U0FDdEMsQ0FBQzt5Q0FHeUIsaUJBQVU7T0FGeEIsWUFBWSxDQVN4QjtJQUFELG1CQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSAnYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgKiBhcyBjb2xvciBmcm9tICdjb2xvcic7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xyXG5cclxuZGVjbGFyZSB2YXIgYW5kcm9pZDtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcbiAgICApIHtcclxuICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IGFwcC5hbmRyb2lkLnN0YXJ0QWN0aXZpdHkuZ2V0V2luZG93KCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zZXRTdGF0dXNCYXJDb2xvcihuZXcgY29sb3IuQ29sb3IoJyMwNjRlNDYnKS5hbmRyb2lkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19