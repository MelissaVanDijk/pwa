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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vcHdhL2xpYi9wd2Euc2VydmljZS50cyIsIm5nOi8vcHdhL2xpYi9wd2EuY29tcG9uZW50LnRzIiwibmc6Ly9wd2EvbGliL2NvbXBvbmVudHMvd2lkZ2V0YmFzZS5jb21wb25lbnQudHMiLCJuZzovL3B3YS9saWIvcHdhLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFB3YVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwd2EtcHdhJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHB3YSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgUHdhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ29udGFjdCB9IGZyb20gJy4uL21vZGVscy9jb250YWN0JztcclxuaW1wb3J0IHsgSVZvaWNlQ2FsbCB9IGZyb20gJy4uL21vZGVscy9jYWxsJztcclxuXHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwd2Etd2lkZ2V0YmFzZScsXHJcbiAgICB0ZW1wbGF0ZTogJzxkaXY+V0lER0VUQkFTRTwvZGl2PidcclxuICB9KVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0QmFzZUNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIG5hbWUgPSAnQmFzZVdpZGdldCc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsICgpID0+IHRoaXMuaGFuZGxlTWVzc2FnZShldmVudCksIGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0V2ZW50IExpc3RlbmVyIGF0dGFjaGVkJyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGZvciBJRTYgLSBJRTEwXHJcbiAgICAgICAgICAgIC8vIHRoZSBjYXN0IGlzIHdvcmthcm91bmQgZm9yIHR5cGVzY3JpcHQgbm90IHN1cHBvcnRpbmcgdGhlIGF0dGFjaEV2ZW50LW1ldGhvZFxyXG4gICAgICAgICAgICAoPGFueT53aW5kb3cpLmF0dGFjaEV2ZW50KCdtZXNzYWdlJywgKCkgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKGV2ZW50KSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZhbHNlLCAnSUUgRXZlbnQgTGlzdGVuZXIgYXR0YWNoZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTWVzc2FnZSggZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luICE9PSAnaHR0cDovL2xvY2FsaG9zdDo0MjAwJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyggJ0V2ZW50LmRhdGEnLCBldmVudC5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggJ0V2ZW50Lm9yaWdpbicsIGV2ZW50Lm9yaWdpbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coICdFdmVudC5zb3VyY2UnLCBldmVudC5zb3VyY2UpO1xyXG5cclxuICAgICAgICBjb25zdCBtZXRob2QgPSBldmVudC5kYXRhLm1ldGhvZCA/IGV2ZW50LmRhdGEubWV0aG9kIDogJyc7XHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGV2ZW50LmRhdGEucGF5bG9hZCA/IGV2ZW50LmRhdGEucGF5bG9hZCA6ICcnO1xyXG5cclxuICAgICAgICBpZiAobWV0aG9kID09PSAnJyB8fCBwYXlsb2FkID09PSAnJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ0ludmFsaWQgbWVzc2FnZSByZWNlaXZlZCcgLCBtZXRob2QsIHBheWxvYWQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjZWl2ZWQtZGF0YScpLmlubmVySFRNTCA9ICdNZXNzYWdlIHJlY2VpdmVkOiAnICsgbWV0aG9kO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXlsb2FkJykuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkocGF5bG9hZCwgbnVsbCwgNCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnTWVzc2FnZSByZWNlaXZlZCcgLCBtZXRob2QsIHBheWxvYWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnSlNPTicsIHBheWxvYWQpO1xyXG5cclxuXHJcbiAgICAgICAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgICAgICAgICAgY2FzZSAnb25TZWxlY3RDb250YWN0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMub25TZWxlY3RDb250YWN0KHBheWxvYWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ29uU2VsZWN0Vm9pY2VDYWxsJzpcclxuICAgICAgICAgICAgICAgIHRoaXMub25TZWxlY3RWb2ljZUNhbGwocGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnSW52YWxpZCBtZXRob2QgaW4gcmVjZWl2ZWQgbWVzc2FnZScsIG1ldGhvZCwgcGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3RDb250YWN0KGNvbnRhY3Q6IElDb250YWN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coICdvblNlbGVjdGVkQ29udGFjdCcsIGNvbnRhY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0Vm9pY2VDYWxsKGNvbnRhY3Q6IElWb2ljZUNhbGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyggJ29uU2VsZWN0Vm9pY2VDYWxsJywgY29udGFjdCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFB3YUNvbXBvbmVudCB9IGZyb20gJy4vcHdhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXaWRnZXRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3dpZGdldGJhc2UuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFB3YUNvbXBvbmVudCxcbiAgICBXaWRnZXRCYXNlQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBQd2FDb21wb25lbnQsXG4gICAgV2lkZ2V0QmFzZUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFB3YU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O3lCQUpEOzs7Ozs7O0FDQUE7UUFh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