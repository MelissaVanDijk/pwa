(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('pwa', ['exports', '@angular/core'], factory) :
    (factory((global.pwa = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var WidgetBaseComponent = (function () {
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
                ((window)).attachEvent('message', function () { return _this.handleMessage(event); });
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
            { type: core.Component, args: [{
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
    var PwaModule = (function () {
        function PwaModule() {
        }
        PwaModule.decorators = [
            { type: core.NgModule, args: [{
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

    exports.PwaModule = PwaModule;
    exports.WidgetBaseComponent = WidgetBaseComponent;
    exports.CallDirection = CallDirection;
    exports.CallState = CallState;
    exports.ContactScope = ContactScope;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vcHdhL2NvbXBvbmVudHMvd2lkZ2V0YmFzZS5jb21wb25lbnQudHMiLCJuZzovL3B3YS9wd2EubW9kdWxlLnRzIiwibmc6Ly9wd2EvbW9kZWxzL2NhbGwudHMiLCJuZzovL3B3YS9tb2RlbHMvY29udGFjdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUNvbnRhY3QgfSBmcm9tICcuLi9tb2RlbHMvY29udGFjdCc7XHJcbmltcG9ydCB7IElWb2ljZUNhbGwgfSBmcm9tICcuLi9tb2RlbHMvY2FsbCc7XHJcblxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncHdhLXdpZGdldGJhc2UnLFxyXG4gICAgdGVtcGxhdGU6ICc8ZGl2PldJREdFVEJBU0U8L2Rpdj4nXHJcbiAgfSlcclxuZXhwb3J0IGNsYXNzIFdpZGdldEJhc2VDb21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBuYW1lID0gJ0Jhc2VXaWRnZXQnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnQmFzZVdpZGdldCBjb25zdHJ1Y3Rpb24nKTtcclxuICAgICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoKSA9PiB0aGlzLmhhbmRsZU1lc3NhZ2UoZXZlbnQpLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFdmVudCBMaXN0ZW5lciBhdHRhY2hlZCcpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBmb3IgSUU2IC0gSUUxMFxyXG4gICAgICAgICAgICAvLyB0aGUgY2FzdCBpcyB3b3JrYXJvdW5kIGZvciB0eXBlc2NyaXB0IG5vdCBzdXBwb3J0aW5nIHRoZSBhdHRhY2hFdmVudC1tZXRob2RcclxuICAgICAgICAgICAgKDxhbnk+d2luZG93KS5hdHRhY2hFdmVudCgnbWVzc2FnZScsICgpID0+IHRoaXMuaGFuZGxlTWVzc2FnZShldmVudCkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmYWxzZSwgJ0lFIEV2ZW50IExpc3RlbmVyIGF0dGFjaGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU1lc3NhZ2UoIGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbiAhPT0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMCcgJiYgZXZlbnQub3JpZ2luICE9PSAnaHR0cDovL2xvY2FsaG9zdDo1MjAwJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnT1JJR0lOIElTIE5PVCBHT09EJywgZXZlbnQub3JpZ2luKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coICdFdmVudC5kYXRhJywgZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coICdFdmVudC5vcmlnaW4nLCBldmVudC5vcmlnaW4pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnRXZlbnQuc291cmNlJywgZXZlbnQuc291cmNlKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWV0aG9kID0gZXZlbnQuZGF0YS5tZXRob2QgPyBldmVudC5kYXRhLm1ldGhvZCA6ICcnO1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBldmVudC5kYXRhLnBheWxvYWQgPyBldmVudC5kYXRhLnBheWxvYWQgOiAnJztcclxuXHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gJycgfHwgcGF5bG9hZCA9PT0gJycpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coICdJbnZhbGlkIG1lc3NhZ2UgcmVjZWl2ZWQnICwgbWV0aG9kLCBwYXlsb2FkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjZWl2ZWQtZGF0YScpLmlubmVySFRNTCA9ICdNZXNzYWdlIHJlY2VpdmVkOiAnICsgbWV0aG9kO1xyXG4gICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheWxvYWQnKS5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShwYXlsb2FkLCBudWxsLCA0KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coICdNZXNzYWdlIHJlY2VpdmVkJyAsIG1ldGhvZCwgcGF5bG9hZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coICdKU09OJywgcGF5bG9hZCk7XHJcblxyXG5cclxuICAgICAgICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgICAgICAgICBjYXNlICdvblNlbGVjdENvbnRhY3QnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNlbGVjdENvbnRhY3QocGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnb25TZWxlY3RWb2ljZUNhbGwnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNlbGVjdFZvaWNlQ2FsbChwYXlsb2FkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coICdJbnZhbGlkIG1ldGhvZCBpbiByZWNlaXZlZCBtZXNzYWdlJywgbWV0aG9kLCBwYXlsb2FkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdENvbnRhY3QoY29udGFjdDogSUNvbnRhY3QpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyggJ29uU2VsZWN0ZWRDb250YWN0JywgY29udGFjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3RWb2ljZUNhbGwoY29udGFjdDogSVZvaWNlQ2FsbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnb25TZWxlY3RWb2ljZUNhbGwnLCBjb250YWN0KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXaWRnZXRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3dpZGdldGJhc2UuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG5cclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgV2lkZ2V0QmFzZUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgV2lkZ2V0QmFzZUNvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFB3YU1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgSUNvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29udmVyc2F0aW9uQmFzZSB7XHJcbiAgICByZW1vdGVFbnRyeTogSUNvbnRhY3R8IG51bGw7XHJcbiAgICByZW1vdGVBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBmcm9tQWRkcmVzczogc3RyaW5nO1xyXG4gICAgc3RhdGU6IENhbGxTdGF0ZTtcclxuICAgIGlkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZvaWNlQ2FsbCBleHRlbmRzIElDb252ZXJzYXRpb25CYXNlIHtcclxuICAgIG1vZGFsaXR5OiAnVm9pY2UnO1xyXG4gICAgdGltZVN0YXRlQ2hhbmdlOiBEYXRlO1xyXG4gICAgZGlyZWN0aW9uOiBDYWxsRGlyZWN0aW9uO1xyXG4gICAgZmFsbGJhY2s6IHN0cmluZztcclxuICAgIGNhbGxSb3V0ZTogSUNhbGxSb3V0ZUVudHJ5W107XHJcbiAgICB0b0FkZHJlc3M6IHN0cmluZztcclxuICAgIG9yaWdpbmFsVG86IElDYWxsUm91dGVFbnRyeTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hhdENhbGwgZXh0ZW5kcyBJQ29udmVyc2F0aW9uQmFzZSB7XHJcbiAgICBtb2RhbGl0eTogJ0NoYXQnO1xyXG4gICAgbWVzc2FnZXM6IElDaGF0TWVzc2FnZVtdO1xyXG4gICAgZHVyYXRpb246IG51bWJlcjtcclxuICAgIG15QWRkcmVzczogc3RyaW5nO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgIHBpY3R1cmVVcmw6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTWFpbE1lc3NhZ2UgZXh0ZW5kcyBJQ29udmVyc2F0aW9uQmFzZSB7XHJcbiAgICBtb2RhbGl0eTogJ01haWwnO1xyXG4gICAgdGltZXN0YW1wOiBEYXRlO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGJvZHk6IHN0cmluZztcclxuICAgIGltcG9ydGFuY2U6IHN0cmluZztcclxuICAgIGlzRHJhZnQ6IGJvb2xlYW47XHJcbiAgICBkcmFmdElkOiBzdHJpbmc7XHJcbiAgICBjbGFpbWVkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIElDYWxsID0gSVZvaWNlQ2FsbCB8IElDaGF0Q2FsbCB8IElNYWlsTWVzc2FnZTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXRNZXNzYWdlIHtcclxuICAgIGZyb206IHN0cmluZztcclxuICAgIHRpbWU6IERhdGU7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNhbGxSb3V0ZUVudHJ5IHtcclxuICAgIGZyb21BZGRyZXNzOiBzdHJpbmc7XHJcbiAgICB0b0FkZHJlc3M6IHN0cmluZztcclxuICAgIG9yaWdpbmFsVG86IHN0cmluZztcclxuICAgIGRpcmVjdGlvbjogQ2FsbERpcmVjdGlvbjtcclxuICAgIG9yaWdpbmFsQ2FsbGVkOiBJQ29udGFjdDtcclxuICAgIGZyb206IERhdGU7XHJcbiAgICB1bnRpbDogRGF0ZTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBlbnVtIENhbGxEaXJlY3Rpb24ge1xyXG4gICAgSW5jb21pbmcgPSAwLFxyXG4gICAgT3V0Z29pbmcgPSAxXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENhbGxTdGF0ZSB7XHJcbiAgICBJZGxlID0gMCxcclxuICAgIEluY29taW5nID0gMSxcclxuICAgIENvbm5lY3RlZCA9IDIsXHJcbiAgICBIb2xkID0gMyxcclxuICAgIERpYWxpbmcgPSA0LFxyXG4gICAgRGlzY29ubmVjdGVkID0gNVxyXG59IiwiZXhwb3J0IGludGVyZmFjZSBJQ29udGFjdCB7XHJcbiAgICBrZXk6IHN0cmluZztcclxuXHJcbiAgICBpZENvbWJpbmVkOiBzdHJpbmc7XHJcbiAgICBpbml0aWFsczogc3RyaW5nO1xyXG4gICAgY29tcGxldGVOYW1lOiBzdHJpbmc7XHJcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcclxuICAgIG1pZGRsZU5hbWU6IHN0cmluZztcclxuICAgIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgY29tcGFueUVtYWlsOiBzdHJpbmc7XHJcbiAgICBjb21wUHJpbWFyeVBob25lOiBzdHJpbmc7XHJcbiAgICBjb21wQWx0UGhvbmU6IHN0cmluZztcclxuICAgIG1vYmlsZVBob25lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlUGhvbmU6IHN0cmluZztcclxuICAgIHNpcEFkZHJlc3M6IHN0cmluZztcclxuICAgIHRlbFVyaTogc3RyaW5nO1xyXG4gICAgZnVuY3Rpb246IHN0cmluZztcclxuICAgIHBob3RvOiBzdHJpbmc7XHJcbiAgICBjb250YWN0U2NvcGU6IENvbnRhY3RTY29wZTtcclxuXHJcbiAgICBvcmdhbml6YXRpb246IElPbW5pZGlyT3JnO1xyXG4gICAgZGVwYXJ0bWVudDogSU9tbmlkaXJEZXB0O1xyXG4gICAgYnVpbGRpbmc6IElPbW5pZGlyQnVpbGRpbmc7XHJcblxyXG4gICAgZGF0YTogSUNvbnRhY3REYXRhO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBDb250YWN0U2NvcGUge1xyXG4gICAgUGVyc29uYWwgLFxyXG4gICAgQ29tcGFueVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb29yZGluYXRlcyB7XHJcbiAgICBsYXQ6IG51bWJlcjtcclxuICAgIGxuZzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0RGF0YSB7XHJcbiAgICBrZXk6IHN0cmluZztcclxuICAgIGNvb3JkaW5hdGVzOiBJQ29vcmRpbmF0ZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9tbmlkaXJPcmcge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT21uaWRpckRlcHQge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIG9yZ2FuaXphdGlvbklkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9tbmlkaXJCdWlsZGluZyB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgb3JnYW5pemF0aW9uSWQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT21uaWRpckNvbHVtbiB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdHJhbnNsYXRpb246IHN0cmluZztcclxufSJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBZUk7WUFBQSxpQkFhQzt3QkFmYSxZQUFZO1lBSXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN2QyxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDekIsTUFBTSxDQUFDLGdCQUFnQixD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