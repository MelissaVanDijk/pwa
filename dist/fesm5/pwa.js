import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

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
        if (event.origin !== 'http://localhost:4200') {
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
        document.getElementById('received-data').innerHTML = 'Message received: ' + method;
        document.getElementById('payload').innerHTML = JSON.stringify(payload, null, 4);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9wd2EvbGliL3B3YS5zZXJ2aWNlLnRzIiwibmc6Ly9wd2EvbGliL3B3YS5jb21wb25lbnQudHMiLCJuZzovL3B3YS9saWIvY29tcG9uZW50cy93aWRnZXRiYXNlLmNvbXBvbmVudC50cyIsIm5nOi8vcHdhL2xpYi9wd2EubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUHdhU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3B3YS1wd2EnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgcHdhIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBQd2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElDb250YWN0IH0gZnJvbSAnLi4vbW9kZWxzL2NvbnRhY3QnO1xyXG5pbXBvcnQgeyBJVm9pY2VDYWxsIH0gZnJvbSAnLi4vbW9kZWxzL2NhbGwnO1xyXG5cclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3B3YS13aWRnZXRiYXNlJyxcclxuICAgIHRlbXBsYXRlOiAnPGRpdj5XSURHRVRCQVNFPC9kaXY+J1xyXG4gIH0pXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXRCYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgbmFtZSA9ICdCYXNlV2lkZ2V0JztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKCkgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKGV2ZW50KSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXZlbnQgTGlzdGVuZXIgYXR0YWNoZWQnKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZm9yIElFNiAtIElFMTBcclxuICAgICAgICAgICAgLy8gdGhlIGNhc3QgaXMgd29ya2Fyb3VuZCBmb3IgdHlwZXNjcmlwdCBub3Qgc3VwcG9ydGluZyB0aGUgYXR0YWNoRXZlbnQtbWV0aG9kXHJcbiAgICAgICAgICAgICg8YW55PndpbmRvdykuYXR0YWNoRXZlbnQoJ21lc3NhZ2UnLCAoKSA9PiB0aGlzLmhhbmRsZU1lc3NhZ2UoZXZlbnQpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZmFsc2UsICdJRSBFdmVudCBMaXN0ZW5lciBhdHRhY2hlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVNZXNzYWdlKCBldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5vcmlnaW4gIT09ICdodHRwOi8vbG9jYWxob3N0OjQyMDAnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnRXZlbnQuZGF0YScsIGV2ZW50LmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnRXZlbnQub3JpZ2luJywgZXZlbnQub3JpZ2luKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggJ0V2ZW50LnNvdXJjZScsIGV2ZW50LnNvdXJjZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IGV2ZW50LmRhdGEubWV0aG9kID8gZXZlbnQuZGF0YS5tZXRob2QgOiAnJztcclxuICAgICAgICBjb25zdCBwYXlsb2FkID0gZXZlbnQuZGF0YS5wYXlsb2FkID8gZXZlbnQuZGF0YS5wYXlsb2FkIDogJyc7XHJcblxyXG4gICAgICAgIGlmIChtZXRob2QgPT09ICcnIHx8IHBheWxvYWQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnSW52YWxpZCBtZXNzYWdlIHJlY2VpdmVkJyAsIG1ldGhvZCwgcGF5bG9hZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNlaXZlZC1kYXRhJykuaW5uZXJIVE1MID0gJ01lc3NhZ2UgcmVjZWl2ZWQ6ICcgKyBtZXRob2Q7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheWxvYWQnKS5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShwYXlsb2FkLCBudWxsLCA0KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coICdNZXNzYWdlIHJlY2VpdmVkJyAsIG1ldGhvZCwgcGF5bG9hZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coICdKU09OJywgcGF5bG9hZCk7XHJcblxyXG5cclxuICAgICAgICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgICAgICAgICBjYXNlICdvblNlbGVjdENvbnRhY3QnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNlbGVjdENvbnRhY3QocGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnb25TZWxlY3RWb2ljZUNhbGwnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNlbGVjdFZvaWNlQ2FsbChwYXlsb2FkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coICdJbnZhbGlkIG1ldGhvZCBpbiByZWNlaXZlZCBtZXNzYWdlJywgbWV0aG9kLCBwYXlsb2FkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdENvbnRhY3QoY29udGFjdDogSUNvbnRhY3QpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyggJ29uU2VsZWN0ZWRDb250YWN0JywgY29udGFjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3RWb2ljZUNhbGwoY29udGFjdDogSVZvaWNlQ2FsbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnb25TZWxlY3RWb2ljZUNhbGwnLCBjb250YWN0KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHdhQ29tcG9uZW50IH0gZnJvbSAnLi9wd2EuY29tcG9uZW50JztcbmltcG9ydCB7IFdpZGdldEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvd2lkZ2V0YmFzZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG5cbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUHdhQ29tcG9uZW50LFxuICAgIFdpZGdldEJhc2VDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFB3YUNvbXBvbmVudCxcbiAgICBXaWRnZXRCYXNlQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUHdhTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OztxQkFKRDs7Ozs7OztBQ0FBO0lBYUU7S0FBaUI7Ozs7SUFFakIsK0JBQVE7OztJQUFSO0tBQ0M7O2dCQWRGLFNB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