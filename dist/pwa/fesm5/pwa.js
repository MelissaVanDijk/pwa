import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PwaService = /** @class */ (function () {
    function PwaService() {
    }
    PwaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    PwaService.ctorParameters = function () { return []; };
    /** @nocollapse */ PwaService.ngInjectableDef = defineInjectable({ factory: function PwaService_Factory() { return new PwaService(); }, token: PwaService, providedIn: "root" });
    return PwaService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PwaComponent = /** @class */ (function () {
    function PwaComponent() {
    }
    /**
     * @return {?}
     */
    PwaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PwaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pwa-pwa',
                    template: "\n    <p>\n      pwa works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    PwaComponent.ctorParameters = function () { return []; };
    return PwaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var WidgetBaseComponent = /** @class */ (function () {
    function WidgetBaseComponent() {
        var _this = this;
        this.name = 'BaseWidget';
        console.log('BaseWidget construction');
        if (window.addEventListener) {
            window.addEventListener('message', function () { return _this.handleMessage(event); }, false);
            console.log('Event Listener attached');
        }
        else {
            // for IE6 - IE10
            // the cast is workaround for typescript not supporting the attachEvent-method
            (/** @type {?} */ (window)).attachEvent('message', function () { return _this.handleMessage(event); });
            console.log(false, 'IE Event Listener attached');
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    WidgetBaseComponent.prototype.handleMessage = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.origin !== 'http://localhost:4200' && event.origin !== 'http://localhost:5200') {
            console.log('ORIGIN IS NOT GOOD', event.origin);
            return;
        }
        console.log('Event.data', event.data);
        console.log('Event.origin', event.origin);
        console.log('Event.source', event.source);
        /** @type {?} */
        var method = event.data.method ? event.data.method : '';
        /** @type {?} */
        var payload = event.data.payload ? event.data.payload : '';
        if (method === '' || payload === '') {
            console.log('Invalid message received', method, payload);
            return;
        }
        //document.getElementById('received-data').innerHTML = 'Message received: ' + method;
        //document.getElementById('payload').innerHTML = JSON.stringify(payload, null, 4);
        console.log('Message received', method, payload);
        console.log('JSON', payload);
        switch (method) {
            case 'onSelectContact':
                this.onSelectContact(payload);
                break;
            case 'onSelectVoiceCall':
                this.onSelectVoiceCall(payload);
                break;
            default:
                console.log('Invalid method in received message', method, payload);
                break;
        }
    };
    /**
     * @param {?} contact
     * @return {?}
     */
    WidgetBaseComponent.prototype.onSelectContact = /**
     * @param {?} contact
     * @return {?}
     */
    function (contact) {
        console.log('onSelectedContact', contact);
    };
    /**
     * @param {?} contact
     * @return {?}
     */
    WidgetBaseComponent.prototype.onSelectVoiceCall = /**
     * @param {?} contact
     * @return {?}
     */
    function (contact) {
        console.log('onSelectVoiceCall', contact);
    };
    WidgetBaseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pwa-widgetbase',
                    template: '<div>WIDGETBASE</div>'
                },] },
    ];
    /** @nocollapse */
    WidgetBaseComponent.ctorParameters = function () { return []; };
    return WidgetBaseComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PwaModule = /** @class */ (function () {
    function PwaModule() {
    }
    PwaModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [
                        PwaComponent,
                        WidgetBaseComponent
                    ],
                    exports: [
                        PwaComponent,
                        WidgetBaseComponent
                    ]
                },] },
    ];
    return PwaModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
//export * from './lib/models/call';
//export * from './lib/models/contact';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { PwaService, PwaComponent, PwaModule, WidgetBaseComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9wd2EvbGliL3B3YS5zZXJ2aWNlLnRzIiwibmc6Ly9wd2EvbGliL3B3YS5jb21wb25lbnQudHMiLCJuZzovL3B3YS9saWIvY29tcG9uZW50cy93aWRnZXRiYXNlLmNvbXBvbmVudC50cyIsIm5nOi8vcHdhL2xpYi9wd2EubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUHdhU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3B3YS1wd2EnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgcHdhIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBQd2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElDb250YWN0IH0gZnJvbSAnLi4vbW9kZWxzL2NvbnRhY3QnO1xyXG5pbXBvcnQgeyBJVm9pY2VDYWxsIH0gZnJvbSAnLi4vbW9kZWxzL2NhbGwnO1xyXG5cclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3B3YS13aWRnZXRiYXNlJyxcclxuICAgIHRlbXBsYXRlOiAnPGRpdj5XSURHRVRCQVNFPC9kaXY+J1xyXG4gIH0pXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXRCYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgbmFtZSA9ICdCYXNlV2lkZ2V0JztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Jhc2VXaWRnZXQgY29uc3RydWN0aW9uJyk7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKCkgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKGV2ZW50KSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXZlbnQgTGlzdGVuZXIgYXR0YWNoZWQnKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZm9yIElFNiAtIElFMTBcclxuICAgICAgICAgICAgLy8gdGhlIGNhc3QgaXMgd29ya2Fyb3VuZCBmb3IgdHlwZXNjcmlwdCBub3Qgc3VwcG9ydGluZyB0aGUgYXR0YWNoRXZlbnQtbWV0aG9kXHJcbiAgICAgICAgICAgICg8YW55PndpbmRvdykuYXR0YWNoRXZlbnQoJ21lc3NhZ2UnLCAoKSA9PiB0aGlzLmhhbmRsZU1lc3NhZ2UoZXZlbnQpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZmFsc2UsICdJRSBFdmVudCBMaXN0ZW5lciBhdHRhY2hlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVNZXNzYWdlKCBldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5vcmlnaW4gIT09ICdodHRwOi8vbG9jYWxob3N0OjQyMDAnICYmIGV2ZW50Lm9yaWdpbiAhPT0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTIwMCcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ09SSUdJTiBJUyBOT1QgR09PRCcsIGV2ZW50Lm9yaWdpbik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnRXZlbnQuZGF0YScsIGV2ZW50LmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnRXZlbnQub3JpZ2luJywgZXZlbnQub3JpZ2luKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggJ0V2ZW50LnNvdXJjZScsIGV2ZW50LnNvdXJjZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IGV2ZW50LmRhdGEubWV0aG9kID8gZXZlbnQuZGF0YS5tZXRob2QgOiAnJztcclxuICAgICAgICBjb25zdCBwYXlsb2FkID0gZXZlbnQuZGF0YS5wYXlsb2FkID8gZXZlbnQuZGF0YS5wYXlsb2FkIDogJyc7XHJcblxyXG4gICAgICAgIGlmIChtZXRob2QgPT09ICcnIHx8IHBheWxvYWQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnSW52YWxpZCBtZXNzYWdlIHJlY2VpdmVkJyAsIG1ldGhvZCwgcGF5bG9hZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY2VpdmVkLWRhdGEnKS5pbm5lckhUTUwgPSAnTWVzc2FnZSByZWNlaXZlZDogJyArIG1ldGhvZDtcclxuICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXlsb2FkJykuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkocGF5bG9hZCwgbnVsbCwgNCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnTWVzc2FnZSByZWNlaXZlZCcgLCBtZXRob2QsIHBheWxvYWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnSlNPTicsIHBheWxvYWQpO1xyXG5cclxuXHJcbiAgICAgICAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgICAgICAgICAgY2FzZSAnb25TZWxlY3RDb250YWN0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMub25TZWxlY3RDb250YWN0KHBheWxvYWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ29uU2VsZWN0Vm9pY2VDYWxsJzpcclxuICAgICAgICAgICAgICAgIHRoaXMub25TZWxlY3RWb2ljZUNhbGwocGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnSW52YWxpZCBtZXRob2QgaW4gcmVjZWl2ZWQgbWVzc2FnZScsIG1ldGhvZCwgcGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3RDb250YWN0KGNvbnRhY3Q6IElDb250YWN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coICdvblNlbGVjdGVkQ29udGFjdCcsIGNvbnRhY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0Vm9pY2VDYWxsKGNvbnRhY3Q6IElWb2ljZUNhbGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyggJ29uU2VsZWN0Vm9pY2VDYWxsJywgY29udGFjdCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFB3YUNvbXBvbmVudCB9IGZyb20gJy4vcHdhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXaWRnZXRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3dpZGdldGJhc2UuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFB3YUNvbXBvbmVudCxcbiAgICBXaWRnZXRCYXNlQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBQd2FDb21wb25lbnQsXG4gICAgV2lkZ2V0QmFzZUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFB3YU1vZHVsZSB7IH1c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