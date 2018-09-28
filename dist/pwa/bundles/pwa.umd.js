(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('pwa', ['exports', '@angular/core'], factory) :
    (factory((global.pwa = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PwaService = (function () {
        function PwaService() {
        }
        PwaService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        PwaService.ctorParameters = function () { return []; };
        /** @nocollapse */ PwaService.ngInjectableDef = i0.defineInjectable({ factory: function PwaService_Factory() { return new PwaService(); }, token: PwaService, providedIn: "root" });
        return PwaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PwaComponent = (function () {
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
            { type: i0.Component, args: [{
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
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

    exports.PwaService = PwaService;
    exports.PwaComponent = PwaComponent;
    exports.PwaModule = PwaModule;
    exports.WidgetBaseComponent = WidgetBaseComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vcHdhL2xpYi9wd2Euc2VydmljZS50cyIsIm5nOi8vcHdhL2xpYi9wd2EuY29tcG9uZW50LnRzIiwibmc6Ly9wd2EvbGliL2NvbXBvbmVudHMvd2lkZ2V0YmFzZS5jb21wb25lbnQudHMiLCJuZzovL3B3YS9saWIvcHdhLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFB3YVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwd2EtcHdhJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHB3YSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgUHdhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ29udGFjdCB9IGZyb20gJy4uL21vZGVscy9jb250YWN0JztcclxuaW1wb3J0IHsgSVZvaWNlQ2FsbCB9IGZyb20gJy4uL21vZGVscy9jYWxsJztcclxuXHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwd2Etd2lkZ2V0YmFzZScsXHJcbiAgICB0ZW1wbGF0ZTogJzxkaXY+V0lER0VUQkFTRTwvZGl2PidcclxuICB9KVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0QmFzZUNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIG5hbWUgPSAnQmFzZVdpZGdldCc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCYXNlV2lkZ2V0IGNvbnN0cnVjdGlvbicpO1xyXG4gICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsICgpID0+IHRoaXMuaGFuZGxlTWVzc2FnZShldmVudCksIGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0V2ZW50IExpc3RlbmVyIGF0dGFjaGVkJyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGZvciBJRTYgLSBJRTEwXHJcbiAgICAgICAgICAgIC8vIHRoZSBjYXN0IGlzIHdvcmthcm91bmQgZm9yIHR5cGVzY3JpcHQgbm90IHN1cHBvcnRpbmcgdGhlIGF0dGFjaEV2ZW50LW1ldGhvZFxyXG4gICAgICAgICAgICAoPGFueT53aW5kb3cpLmF0dGFjaEV2ZW50KCdtZXNzYWdlJywgKCkgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKGV2ZW50KSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZhbHNlLCAnSUUgRXZlbnQgTGlzdGVuZXIgYXR0YWNoZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTWVzc2FnZSggZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luICE9PSAnaHR0cDovL2xvY2FsaG9zdDo0MjAwJyAmJiBldmVudC5vcmlnaW4gIT09ICdodHRwOi8vbG9jYWxob3N0OjUyMDAnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPUklHSU4gSVMgTk9UIEdPT0QnLCBldmVudC5vcmlnaW4pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyggJ0V2ZW50LmRhdGEnLCBldmVudC5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggJ0V2ZW50Lm9yaWdpbicsIGV2ZW50Lm9yaWdpbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coICdFdmVudC5zb3VyY2UnLCBldmVudC5zb3VyY2UpO1xyXG5cclxuICAgICAgICBjb25zdCBtZXRob2QgPSBldmVudC5kYXRhLm1ldGhvZCA/IGV2ZW50LmRhdGEubWV0aG9kIDogJyc7XHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGV2ZW50LmRhdGEucGF5bG9hZCA/IGV2ZW50LmRhdGEucGF5bG9hZCA6ICcnO1xyXG5cclxuICAgICAgICBpZiAobWV0aG9kID09PSAnJyB8fCBwYXlsb2FkID09PSAnJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ0ludmFsaWQgbWVzc2FnZSByZWNlaXZlZCcgLCBtZXRob2QsIHBheWxvYWQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNlaXZlZC1kYXRhJykuaW5uZXJIVE1MID0gJ01lc3NhZ2UgcmVjZWl2ZWQ6ICcgKyBtZXRob2Q7XHJcbiAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5bG9hZCcpLmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KHBheWxvYWQsIG51bGwsIDQpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyggJ01lc3NhZ2UgcmVjZWl2ZWQnICwgbWV0aG9kLCBwYXlsb2FkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggJ0pTT04nLCBwYXlsb2FkKTtcclxuXHJcblxyXG4gICAgICAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ29uU2VsZWN0Q29udGFjdCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2VsZWN0Q29udGFjdChwYXlsb2FkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdvblNlbGVjdFZvaWNlQ2FsbCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2VsZWN0Vm9pY2VDYWxsKHBheWxvYWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggJ0ludmFsaWQgbWV0aG9kIGluIHJlY2VpdmVkIG1lc3NhZ2UnLCBtZXRob2QsIHBheWxvYWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0Q29udGFjdChjb250YWN0OiBJQ29udGFjdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnb25TZWxlY3RlZENvbnRhY3QnLCBjb250YWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdFZvaWNlQ2FsbChjb250YWN0OiBJVm9pY2VDYWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coICdvblNlbGVjdFZvaWNlQ2FsbCcsIGNvbnRhY3QpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQd2FDb21wb25lbnQgfSBmcm9tICcuL3B3YS5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2lkZ2V0QmFzZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy93aWRnZXRiYXNlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcblxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQd2FDb21wb25lbnQsXG4gICAgV2lkZ2V0QmFzZUNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUHdhQ29tcG9uZW50LFxuICAgIFdpZGdldEJhc2VDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQd2FNb2R1bGUg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