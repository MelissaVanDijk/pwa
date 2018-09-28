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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0YmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wd2EvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93aWRnZXRiYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVcxQyxNQUFNO0lBSUY7b0JBRmMsWUFBWTtRQUl0QixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1NBRTFDO1FBQUMsSUFBSSxDQUFDLENBQUM7OztZQUdKLG1CQUFNLE1BQU0sRUFBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLDRCQUE0QixDQUFDLENBQUM7U0FDcEQ7S0FDSjs7Ozs7SUFFRCxhQUFhLENBQUUsS0FBSztRQUNoQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLHVCQUF1QixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1lBQ3ZGLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hELE1BQU0sQ0FBQztTQUNWO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUUsY0FBYyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7O1FBRTNDLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztRQUMxRCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUU3RCxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssRUFBRSxJQUFJLE9BQU8sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUUsMEJBQTBCLEVBQUcsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzNELE1BQU0sQ0FBQztTQUNWOzs7UUFLRCxPQUFPLENBQUMsR0FBRyxDQUFFLGtCQUFrQixFQUFHLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUc5QixNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2IsS0FBSyxpQkFBaUI7Z0JBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzlCLEtBQUssQ0FBQztZQUNWLEtBQUssbUJBQW1CO2dCQUNwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQztZQUNWO2dCQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUUsb0NBQW9DLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNwRSxLQUFLLENBQUM7U0FDYjtLQUNKOzs7OztJQUVELGVBQWUsQ0FBQyxPQUFpQjtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFFLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzlDOzs7OztJQUVELGlCQUFpQixDQUFDLE9BQW1CO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUUsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDOUM7OztZQW5FSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLHVCQUF1QjthQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ29udGFjdCB9IGZyb20gJy4uL21vZGVscy9jb250YWN0JztcclxuaW1wb3J0IHsgSVZvaWNlQ2FsbCB9IGZyb20gJy4uL21vZGVscy9jYWxsJztcclxuXHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwd2Etd2lkZ2V0YmFzZScsXHJcbiAgICB0ZW1wbGF0ZTogJzxkaXY+V0lER0VUQkFTRTwvZGl2PidcclxuICB9KVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0QmFzZUNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIG5hbWUgPSAnQmFzZVdpZGdldCc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCYXNlV2lkZ2V0IGNvbnN0cnVjdGlvbicpO1xyXG4gICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsICgpID0+IHRoaXMuaGFuZGxlTWVzc2FnZShldmVudCksIGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0V2ZW50IExpc3RlbmVyIGF0dGFjaGVkJyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGZvciBJRTYgLSBJRTEwXHJcbiAgICAgICAgICAgIC8vIHRoZSBjYXN0IGlzIHdvcmthcm91bmQgZm9yIHR5cGVzY3JpcHQgbm90IHN1cHBvcnRpbmcgdGhlIGF0dGFjaEV2ZW50LW1ldGhvZFxyXG4gICAgICAgICAgICAoPGFueT53aW5kb3cpLmF0dGFjaEV2ZW50KCdtZXNzYWdlJywgKCkgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKGV2ZW50KSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZhbHNlLCAnSUUgRXZlbnQgTGlzdGVuZXIgYXR0YWNoZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTWVzc2FnZSggZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luICE9PSAnaHR0cDovL2xvY2FsaG9zdDo0MjAwJyAmJiBldmVudC5vcmlnaW4gIT09ICdodHRwOi8vbG9jYWxob3N0OjUyMDAnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPUklHSU4gSVMgTk9UIEdPT0QnLCBldmVudC5vcmlnaW4pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyggJ0V2ZW50LmRhdGEnLCBldmVudC5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggJ0V2ZW50Lm9yaWdpbicsIGV2ZW50Lm9yaWdpbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coICdFdmVudC5zb3VyY2UnLCBldmVudC5zb3VyY2UpO1xyXG5cclxuICAgICAgICBjb25zdCBtZXRob2QgPSBldmVudC5kYXRhLm1ldGhvZCA/IGV2ZW50LmRhdGEubWV0aG9kIDogJyc7XHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGV2ZW50LmRhdGEucGF5bG9hZCA/IGV2ZW50LmRhdGEucGF5bG9hZCA6ICcnO1xyXG5cclxuICAgICAgICBpZiAobWV0aG9kID09PSAnJyB8fCBwYXlsb2FkID09PSAnJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ0ludmFsaWQgbWVzc2FnZSByZWNlaXZlZCcgLCBtZXRob2QsIHBheWxvYWQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNlaXZlZC1kYXRhJykuaW5uZXJIVE1MID0gJ01lc3NhZ2UgcmVjZWl2ZWQ6ICcgKyBtZXRob2Q7XHJcbiAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5bG9hZCcpLmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KHBheWxvYWQsIG51bGwsIDQpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyggJ01lc3NhZ2UgcmVjZWl2ZWQnICwgbWV0aG9kLCBwYXlsb2FkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggJ0pTT04nLCBwYXlsb2FkKTtcclxuXHJcblxyXG4gICAgICAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ29uU2VsZWN0Q29udGFjdCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2VsZWN0Q29udGFjdChwYXlsb2FkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdvblNlbGVjdFZvaWNlQ2FsbCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2VsZWN0Vm9pY2VDYWxsKHBheWxvYWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggJ0ludmFsaWQgbWV0aG9kIGluIHJlY2VpdmVkIG1lc3NhZ2UnLCBtZXRob2QsIHBheWxvYWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0Q29udGFjdChjb250YWN0OiBJQ29udGFjdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnb25TZWxlY3RlZENvbnRhY3QnLCBjb250YWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdFZvaWNlQ2FsbChjb250YWN0OiBJVm9pY2VDYWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coICdvblNlbGVjdFZvaWNlQ2FsbCcsIGNvbnRhY3QpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==