/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class WidgetBaseComponent {
    constructor() {
        this.name = 'BaseWidget';
        console.log('BaseWidget construction');
        if (window.addEventListener) {
            window.addEventListener('message', () => this.handleMessage(event), false);
            console.log('Event Listener attached');
        }
        else {
            // for IE6 - IE10
            // the cast is workaround for typescript not supporting the attachEvent-method
            (/** @type {?} */ (window)).attachEvent('message', () => this.handleMessage(event));
            console.log(false, 'IE Event Listener attached');
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleMessage(event) {
        if (event.origin !== 'http://localhost:4200' && event.origin !== 'http://localhost:5200') {
            console.log('ORIGIN IS NOT GOOD', event.origin);
            return;
        }
        console.log('Event.data', event.data);
        console.log('Event.origin', event.origin);
        console.log('Event.source', event.source);
        /** @type {?} */
        const method = event.data.method ? event.data.method : '';
        /** @type {?} */
        const payload = event.data.payload ? event.data.payload : '';
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
    }
    /**
     * @param {?} contact
     * @return {?}
     */
    onSelectContact(contact) {
        console.log('onSelectedContact', contact);
    }
    /**
     * @param {?} contact
     * @return {?}
     */
    onSelectVoiceCall(contact) {
        console.log('onSelectVoiceCall', contact);
    }
}
WidgetBaseComponent.decorators = [
    { type: Component, args: [{
                selector: 'pwa-widgetbase',
                template: '<div>WIDGETBASE</div>'
            },] },
];
/** @nocollapse */
WidgetBaseComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    WidgetBaseComponent.prototype.name;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0YmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wd2EvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3dpZGdldGJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVzFDLE1BQU07SUFJRjtvQkFGYyxZQUFZO1FBSXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN2QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMzRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FFMUM7UUFBQyxJQUFJLENBQUMsQ0FBQzs7O1lBR0osbUJBQU0sTUFBTSxFQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztTQUNwRDtLQUNKOzs7OztJQUVELGFBQWEsQ0FBRSxLQUFLO1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssdUJBQXVCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7WUFDdkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDO1NBQ1Y7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxjQUFjLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUUsY0FBYyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzs7UUFFM0MsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7O1FBQzFELE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRTdELEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxFQUFFLElBQUksT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBRyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDM0QsTUFBTSxDQUFDO1NBQ1Y7OztRQUtELE9BQU8sQ0FBQyxHQUFHLENBQUUsa0JBQWtCLEVBQUcsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRzlCLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDYixLQUFLLGlCQUFpQjtnQkFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUIsS0FBSyxDQUFDO1lBQ1YsS0FBSyxtQkFBbUI7Z0JBQ3BCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsS0FBSyxDQUFDO1lBQ1Y7Z0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBRSxvQ0FBb0MsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3BFLEtBQUssQ0FBQztTQUNiO0tBQ0o7Ozs7O0lBRUQsZUFBZSxDQUFDLE9BQWlCO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUUsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDOUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsT0FBbUI7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxtQkFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUM5Qzs7O1lBbkVKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsdUJBQXVCO2FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElDb250YWN0IH0gZnJvbSAnLi4vbW9kZWxzL2NvbnRhY3QnO1xyXG5pbXBvcnQgeyBJVm9pY2VDYWxsIH0gZnJvbSAnLi4vbW9kZWxzL2NhbGwnO1xyXG5cclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3B3YS13aWRnZXRiYXNlJyxcclxuICAgIHRlbXBsYXRlOiAnPGRpdj5XSURHRVRCQVNFPC9kaXY+J1xyXG4gIH0pXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXRCYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgbmFtZSA9ICdCYXNlV2lkZ2V0JztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Jhc2VXaWRnZXQgY29uc3RydWN0aW9uJyk7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKCkgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKGV2ZW50KSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXZlbnQgTGlzdGVuZXIgYXR0YWNoZWQnKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZm9yIElFNiAtIElFMTBcclxuICAgICAgICAgICAgLy8gdGhlIGNhc3QgaXMgd29ya2Fyb3VuZCBmb3IgdHlwZXNjcmlwdCBub3Qgc3VwcG9ydGluZyB0aGUgYXR0YWNoRXZlbnQtbWV0aG9kXHJcbiAgICAgICAgICAgICg8YW55PndpbmRvdykuYXR0YWNoRXZlbnQoJ21lc3NhZ2UnLCAoKSA9PiB0aGlzLmhhbmRsZU1lc3NhZ2UoZXZlbnQpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZmFsc2UsICdJRSBFdmVudCBMaXN0ZW5lciBhdHRhY2hlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVNZXNzYWdlKCBldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5vcmlnaW4gIT09ICdodHRwOi8vbG9jYWxob3N0OjQyMDAnICYmIGV2ZW50Lm9yaWdpbiAhPT0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTIwMCcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ09SSUdJTiBJUyBOT1QgR09PRCcsIGV2ZW50Lm9yaWdpbik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnRXZlbnQuZGF0YScsIGV2ZW50LmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnRXZlbnQub3JpZ2luJywgZXZlbnQub3JpZ2luKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggJ0V2ZW50LnNvdXJjZScsIGV2ZW50LnNvdXJjZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IGV2ZW50LmRhdGEubWV0aG9kID8gZXZlbnQuZGF0YS5tZXRob2QgOiAnJztcclxuICAgICAgICBjb25zdCBwYXlsb2FkID0gZXZlbnQuZGF0YS5wYXlsb2FkID8gZXZlbnQuZGF0YS5wYXlsb2FkIDogJyc7XHJcblxyXG4gICAgICAgIGlmIChtZXRob2QgPT09ICcnIHx8IHBheWxvYWQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnSW52YWxpZCBtZXNzYWdlIHJlY2VpdmVkJyAsIG1ldGhvZCwgcGF5bG9hZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY2VpdmVkLWRhdGEnKS5pbm5lckhUTUwgPSAnTWVzc2FnZSByZWNlaXZlZDogJyArIG1ldGhvZDtcclxuICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXlsb2FkJykuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkocGF5bG9hZCwgbnVsbCwgNCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnTWVzc2FnZSByZWNlaXZlZCcgLCBtZXRob2QsIHBheWxvYWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnSlNPTicsIHBheWxvYWQpO1xyXG5cclxuXHJcbiAgICAgICAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgICAgICAgICAgY2FzZSAnb25TZWxlY3RDb250YWN0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMub25TZWxlY3RDb250YWN0KHBheWxvYWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ29uU2VsZWN0Vm9pY2VDYWxsJzpcclxuICAgICAgICAgICAgICAgIHRoaXMub25TZWxlY3RWb2ljZUNhbGwocGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnSW52YWxpZCBtZXRob2QgaW4gcmVjZWl2ZWQgbWVzc2FnZScsIG1ldGhvZCwgcGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3RDb250YWN0KGNvbnRhY3Q6IElDb250YWN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coICdvblNlbGVjdGVkQ29udGFjdCcsIGNvbnRhY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0Vm9pY2VDYWxsKGNvbnRhY3Q6IElWb2ljZUNhbGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyggJ29uU2VsZWN0Vm9pY2VDYWxsJywgY29udGFjdCk7XHJcbiAgICB9XHJcbn1cclxuIl19