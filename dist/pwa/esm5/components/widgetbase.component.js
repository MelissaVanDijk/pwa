/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
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
export { WidgetBaseComponent };
if (false) {
    /** @type {?} */
    WidgetBaseComponent.prototype.name;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0YmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wd2EvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3dpZGdldGJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQWV0QztRQUFBLGlCQWFDO29CQWZhLFlBQVk7UUFJdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBekIsQ0FBeUIsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMzRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FFMUM7UUFBQyxJQUFJLENBQUMsQ0FBQzs7O1lBR0osbUJBQU0sTUFBTSxFQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO1lBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLDRCQUE0QixDQUFDLENBQUM7U0FDcEQ7S0FDSjs7Ozs7SUFFRCwyQ0FBYTs7OztJQUFiLFVBQWUsS0FBSztRQUNoQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLHVCQUF1QixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1lBQ3ZGLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hELE1BQU0sQ0FBQztTQUNWO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUUsY0FBYyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7O1FBRTNDLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztRQUMxRCxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUU3RCxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssRUFBRSxJQUFJLE9BQU8sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUUsMEJBQTBCLEVBQUcsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzNELE1BQU0sQ0FBQztTQUNWOzs7UUFLRCxPQUFPLENBQUMsR0FBRyxDQUFFLGtCQUFrQixFQUFHLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUc5QixNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2IsS0FBSyxpQkFBaUI7Z0JBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzlCLEtBQUssQ0FBQztZQUNWLEtBQUssbUJBQW1CO2dCQUNwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQztZQUNWO2dCQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUUsb0NBQW9DLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNwRSxLQUFLLENBQUM7U0FDYjtLQUNKOzs7OztJQUVELDZDQUFlOzs7O0lBQWYsVUFBZ0IsT0FBaUI7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBRSxtQkFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUM5Qzs7Ozs7SUFFRCwrQ0FBaUI7Ozs7SUFBakIsVUFBa0IsT0FBbUI7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxtQkFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUM5Qzs7Z0JBbkVKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsdUJBQXVCO2lCQUNsQzs7Ozs4QkFWSDs7U0FXYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUNvbnRhY3QgfSBmcm9tICcuLi9tb2RlbHMvY29udGFjdCc7XHJcbmltcG9ydCB7IElWb2ljZUNhbGwgfSBmcm9tICcuLi9tb2RlbHMvY2FsbCc7XHJcblxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncHdhLXdpZGdldGJhc2UnLFxyXG4gICAgdGVtcGxhdGU6ICc8ZGl2PldJREdFVEJBU0U8L2Rpdj4nXHJcbiAgfSlcclxuZXhwb3J0IGNsYXNzIFdpZGdldEJhc2VDb21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBuYW1lID0gJ0Jhc2VXaWRnZXQnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnQmFzZVdpZGdldCBjb25zdHJ1Y3Rpb24nKTtcclxuICAgICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoKSA9PiB0aGlzLmhhbmRsZU1lc3NhZ2UoZXZlbnQpLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFdmVudCBMaXN0ZW5lciBhdHRhY2hlZCcpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBmb3IgSUU2IC0gSUUxMFxyXG4gICAgICAgICAgICAvLyB0aGUgY2FzdCBpcyB3b3JrYXJvdW5kIGZvciB0eXBlc2NyaXB0IG5vdCBzdXBwb3J0aW5nIHRoZSBhdHRhY2hFdmVudC1tZXRob2RcclxuICAgICAgICAgICAgKDxhbnk+d2luZG93KS5hdHRhY2hFdmVudCgnbWVzc2FnZScsICgpID0+IHRoaXMuaGFuZGxlTWVzc2FnZShldmVudCkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmYWxzZSwgJ0lFIEV2ZW50IExpc3RlbmVyIGF0dGFjaGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU1lc3NhZ2UoIGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbiAhPT0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMCcgJiYgZXZlbnQub3JpZ2luICE9PSAnaHR0cDovL2xvY2FsaG9zdDo1MjAwJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnT1JJR0lOIElTIE5PVCBHT09EJywgZXZlbnQub3JpZ2luKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coICdFdmVudC5kYXRhJywgZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coICdFdmVudC5vcmlnaW4nLCBldmVudC5vcmlnaW4pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnRXZlbnQuc291cmNlJywgZXZlbnQuc291cmNlKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWV0aG9kID0gZXZlbnQuZGF0YS5tZXRob2QgPyBldmVudC5kYXRhLm1ldGhvZCA6ICcnO1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBldmVudC5kYXRhLnBheWxvYWQgPyBldmVudC5kYXRhLnBheWxvYWQgOiAnJztcclxuXHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gJycgfHwgcGF5bG9hZCA9PT0gJycpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coICdJbnZhbGlkIG1lc3NhZ2UgcmVjZWl2ZWQnICwgbWV0aG9kLCBwYXlsb2FkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjZWl2ZWQtZGF0YScpLmlubmVySFRNTCA9ICdNZXNzYWdlIHJlY2VpdmVkOiAnICsgbWV0aG9kO1xyXG4gICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheWxvYWQnKS5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShwYXlsb2FkLCBudWxsLCA0KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coICdNZXNzYWdlIHJlY2VpdmVkJyAsIG1ldGhvZCwgcGF5bG9hZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coICdKU09OJywgcGF5bG9hZCk7XHJcblxyXG5cclxuICAgICAgICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgICAgICAgICBjYXNlICdvblNlbGVjdENvbnRhY3QnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNlbGVjdENvbnRhY3QocGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnb25TZWxlY3RWb2ljZUNhbGwnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNlbGVjdFZvaWNlQ2FsbChwYXlsb2FkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coICdJbnZhbGlkIG1ldGhvZCBpbiByZWNlaXZlZCBtZXNzYWdlJywgbWV0aG9kLCBwYXlsb2FkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdENvbnRhY3QoY29udGFjdDogSUNvbnRhY3QpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyggJ29uU2VsZWN0ZWRDb250YWN0JywgY29udGFjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3RWb2ljZUNhbGwoY29udGFjdDogSVZvaWNlQ2FsbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnb25TZWxlY3RWb2ljZUNhbGwnLCBjb250YWN0KTtcclxuICAgIH1cclxufVxyXG4iXX0=