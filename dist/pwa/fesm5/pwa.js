import { Component, NgModule } from '@angular/core';

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
                        WidgetBaseComponent
                    ],
                    exports: [
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
/** @enum {number} */
var CallDirection = {
    Incoming: 0,
    Outgoing: 1,
};
CallDirection[CallDirection.Incoming] = 'Incoming';
CallDirection[CallDirection.Outgoing] = 'Outgoing';
/** @enum {number} */
var CallState = {
    Idle: 0,
    Incoming: 1,
    Connected: 2,
    Hold: 3,
    Dialing: 4,
    Disconnected: 5,
};
CallState[CallState.Idle] = 'Idle';
CallState[CallState.Incoming] = 'Incoming';
CallState[CallState.Connected] = 'Connected';
CallState[CallState.Hold] = 'Hold';
CallState[CallState.Dialing] = 'Dialing';
CallState[CallState.Disconnected] = 'Disconnected';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
var ContactScope = {
    Personal: 0,
    Company: 1,
};
ContactScope[ContactScope.Personal] = 'Personal';
ContactScope[ContactScope.Company] = 'Company';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { PwaModule, WidgetBaseComponent, CallDirection, CallState, ContactScope };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9wd2EvY29tcG9uZW50cy93aWRnZXRiYXNlLmNvbXBvbmVudC50cyIsIm5nOi8vcHdhL3B3YS5tb2R1bGUudHMiLCJuZzovL3B3YS9tb2RlbHMvY2FsbC50cyIsIm5nOi8vcHdhL21vZGVscy9jb250YWN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ29udGFjdCB9IGZyb20gJy4uL21vZGVscy9jb250YWN0JztcclxuaW1wb3J0IHsgSVZvaWNlQ2FsbCB9IGZyb20gJy4uL21vZGVscy9jYWxsJztcclxuXHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwd2Etd2lkZ2V0YmFzZScsXHJcbiAgICB0ZW1wbGF0ZTogJzxkaXY+V0lER0VUQkFTRTwvZGl2PidcclxuICB9KVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0QmFzZUNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIG5hbWUgPSAnQmFzZVdpZGdldCc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCYXNlV2lkZ2V0IGNvbnN0cnVjdGlvbicpO1xyXG4gICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsICgpID0+IHRoaXMuaGFuZGxlTWVzc2FnZShldmVudCksIGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0V2ZW50IExpc3RlbmVyIGF0dGFjaGVkJyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGZvciBJRTYgLSBJRTEwXHJcbiAgICAgICAgICAgIC8vIHRoZSBjYXN0IGlzIHdvcmthcm91bmQgZm9yIHR5cGVzY3JpcHQgbm90IHN1cHBvcnRpbmcgdGhlIGF0dGFjaEV2ZW50LW1ldGhvZFxyXG4gICAgICAgICAgICAoPGFueT53aW5kb3cpLmF0dGFjaEV2ZW50KCdtZXNzYWdlJywgKCkgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKGV2ZW50KSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZhbHNlLCAnSUUgRXZlbnQgTGlzdGVuZXIgYXR0YWNoZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTWVzc2FnZSggZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luICE9PSAnaHR0cDovL2xvY2FsaG9zdDo0MjAwJyAmJiBldmVudC5vcmlnaW4gIT09ICdodHRwOi8vbG9jYWxob3N0OjUyMDAnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPUklHSU4gSVMgTk9UIEdPT0QnLCBldmVudC5vcmlnaW4pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyggJ0V2ZW50LmRhdGEnLCBldmVudC5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggJ0V2ZW50Lm9yaWdpbicsIGV2ZW50Lm9yaWdpbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coICdFdmVudC5zb3VyY2UnLCBldmVudC5zb3VyY2UpO1xyXG5cclxuICAgICAgICBjb25zdCBtZXRob2QgPSBldmVudC5kYXRhLm1ldGhvZCA/IGV2ZW50LmRhdGEubWV0aG9kIDogJyc7XHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGV2ZW50LmRhdGEucGF5bG9hZCA/IGV2ZW50LmRhdGEucGF5bG9hZCA6ICcnO1xyXG5cclxuICAgICAgICBpZiAobWV0aG9kID09PSAnJyB8fCBwYXlsb2FkID09PSAnJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ0ludmFsaWQgbWVzc2FnZSByZWNlaXZlZCcgLCBtZXRob2QsIHBheWxvYWQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNlaXZlZC1kYXRhJykuaW5uZXJIVE1MID0gJ01lc3NhZ2UgcmVjZWl2ZWQ6ICcgKyBtZXRob2Q7XHJcbiAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5bG9hZCcpLmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KHBheWxvYWQsIG51bGwsIDQpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyggJ01lc3NhZ2UgcmVjZWl2ZWQnICwgbWV0aG9kLCBwYXlsb2FkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggJ0pTT04nLCBwYXlsb2FkKTtcclxuXHJcblxyXG4gICAgICAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ29uU2VsZWN0Q29udGFjdCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2VsZWN0Q29udGFjdChwYXlsb2FkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdvblNlbGVjdFZvaWNlQ2FsbCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2VsZWN0Vm9pY2VDYWxsKHBheWxvYWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggJ0ludmFsaWQgbWV0aG9kIGluIHJlY2VpdmVkIG1lc3NhZ2UnLCBtZXRob2QsIHBheWxvYWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0Q29udGFjdChjb250YWN0OiBJQ29udGFjdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnb25TZWxlY3RlZENvbnRhY3QnLCBjb250YWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdFZvaWNlQ2FsbChjb250YWN0OiBJVm9pY2VDYWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coICdvblNlbGVjdFZvaWNlQ2FsbCcsIGNvbnRhY3QpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdpZGdldEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvd2lkZ2V0YmFzZS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcblxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBXaWRnZXRCYXNlQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBXaWRnZXRCYXNlQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHdhTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBJQ29udGFjdCB9IGZyb20gJy4vY29udGFjdCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb252ZXJzYXRpb25CYXNlIHtcclxuICAgIHJlbW90ZUVudHJ5OiBJQ29udGFjdHwgbnVsbDtcclxuICAgIHJlbW90ZUFkZHJlc3M6IHN0cmluZztcclxuICAgIGZyb21BZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBzdGF0ZTogQ2FsbFN0YXRlO1xyXG4gICAgaWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVm9pY2VDYWxsIGV4dGVuZHMgSUNvbnZlcnNhdGlvbkJhc2Uge1xyXG4gICAgbW9kYWxpdHk6ICdWb2ljZSc7XHJcbiAgICB0aW1lU3RhdGVDaGFuZ2U6IERhdGU7XHJcbiAgICBkaXJlY3Rpb246IENhbGxEaXJlY3Rpb247XHJcbiAgICBmYWxsYmFjazogc3RyaW5nO1xyXG4gICAgY2FsbFJvdXRlOiBJQ2FsbFJvdXRlRW50cnlbXTtcclxuICAgIHRvQWRkcmVzczogc3RyaW5nO1xyXG4gICAgb3JpZ2luYWxUbzogSUNhbGxSb3V0ZUVudHJ5O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGF0Q2FsbCBleHRlbmRzIElDb252ZXJzYXRpb25CYXNlIHtcclxuICAgIG1vZGFsaXR5OiAnQ2hhdCc7XHJcbiAgICBtZXNzYWdlczogSUNoYXRNZXNzYWdlW107XHJcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xyXG4gICAgbXlBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gICAgcGljdHVyZVVybDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNYWlsTWVzc2FnZSBleHRlbmRzIElDb252ZXJzYXRpb25CYXNlIHtcclxuICAgIG1vZGFsaXR5OiAnTWFpbCc7XHJcbiAgICB0aW1lc3RhbXA6IERhdGU7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgYm9keTogc3RyaW5nO1xyXG4gICAgaW1wb3J0YW5jZTogc3RyaW5nO1xyXG4gICAgaXNEcmFmdDogYm9vbGVhbjtcclxuICAgIGRyYWZ0SWQ6IHN0cmluZztcclxuICAgIGNsYWltZWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSUNhbGwgPSBJVm9pY2VDYWxsIHwgSUNoYXRDYWxsIHwgSU1haWxNZXNzYWdlO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hhdE1lc3NhZ2Uge1xyXG4gICAgZnJvbTogc3RyaW5nO1xyXG4gICAgdGltZTogRGF0ZTtcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2FsbFJvdXRlRW50cnkge1xyXG4gICAgZnJvbUFkZHJlc3M6IHN0cmluZztcclxuICAgIHRvQWRkcmVzczogc3RyaW5nO1xyXG4gICAgb3JpZ2luYWxUbzogc3RyaW5nO1xyXG4gICAgZGlyZWN0aW9uOiBDYWxsRGlyZWN0aW9uO1xyXG4gICAgb3JpZ2luYWxDYWxsZWQ6IElDb250YWN0O1xyXG4gICAgZnJvbTogRGF0ZTtcclxuICAgIHVudGlsOiBEYXRlO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGVudW0gQ2FsbERpcmVjdGlvbiB7XHJcbiAgICBJbmNvbWluZyA9IDAsXHJcbiAgICBPdXRnb2luZyA9IDFcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ2FsbFN0YXRlIHtcclxuICAgIElkbGUgPSAwLFxyXG4gICAgSW5jb21pbmcgPSAxLFxyXG4gICAgQ29ubmVjdGVkID0gMixcclxuICAgIEhvbGQgPSAzLFxyXG4gICAgRGlhbGluZyA9IDQsXHJcbiAgICBEaXNjb25uZWN0ZWQgPSA1XHJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIElDb250YWN0IHtcclxuICAgIGtleTogc3RyaW5nO1xyXG5cclxuICAgIGlkQ29tYmluZWQ6IHN0cmluZztcclxuICAgIGluaXRpYWxzOiBzdHJpbmc7XHJcbiAgICBjb21wbGV0ZU5hbWU6IHN0cmluZztcclxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gICAgbWlkZGxlTmFtZTogc3RyaW5nO1xyXG4gICAgbGFzdE5hbWU6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBjb21wYW55RW1haWw6IHN0cmluZztcclxuICAgIGNvbXBQcmltYXJ5UGhvbmU6IHN0cmluZztcclxuICAgIGNvbXBBbHRQaG9uZTogc3RyaW5nO1xyXG4gICAgbW9iaWxlUGhvbmU6IHN0cmluZztcclxuICAgIHByaXZhdGVQaG9uZTogc3RyaW5nO1xyXG4gICAgc2lwQWRkcmVzczogc3RyaW5nO1xyXG4gICAgdGVsVXJpOiBzdHJpbmc7XHJcbiAgICBmdW5jdGlvbjogc3RyaW5nO1xyXG4gICAgcGhvdG86IHN0cmluZztcclxuICAgIGNvbnRhY3RTY29wZTogQ29udGFjdFNjb3BlO1xyXG5cclxuICAgIG9yZ2FuaXphdGlvbjogSU9tbmlkaXJPcmc7XHJcbiAgICBkZXBhcnRtZW50OiBJT21uaWRpckRlcHQ7XHJcbiAgICBidWlsZGluZzogSU9tbmlkaXJCdWlsZGluZztcclxuXHJcbiAgICBkYXRhOiBJQ29udGFjdERhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENvbnRhY3RTY29wZSB7XHJcbiAgICBQZXJzb25hbCAsXHJcbiAgICBDb21wYW55XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvb3JkaW5hdGVzIHtcclxuICAgIGxhdDogbnVtYmVyO1xyXG4gICAgbG5nOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3REYXRhIHtcclxuICAgIGtleTogc3RyaW5nO1xyXG4gICAgY29vcmRpbmF0ZXM6IElDb29yZGluYXRlcztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT21uaWRpck9yZyB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElPbW5pZGlyRGVwdCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgb3JnYW5pemF0aW9uSWQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT21uaWRpckJ1aWxkaW5nIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBvcmdhbml6YXRpb25JZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElPbW5pZGlyQ29sdW1uIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB0cmFuc2xhdGlvbjogc3RyaW5nO1xyXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0lBZUk7UUFBQSxpQkFhQztvQkFmYSxZQUFZO1FBSXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN2QyxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLGNBQU0sT0FBQSxLQUFJLENB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