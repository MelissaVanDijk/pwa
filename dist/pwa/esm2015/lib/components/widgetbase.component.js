/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class WidgetBaseComponent {
    constructor() {
        this.name = 'BaseWidget';
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
        if (event.origin !== 'http://localhost:4200') {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0YmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wd2EvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93aWRnZXRiYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVcxQyxNQUFNO0lBSUY7b0JBRmMsWUFBWTtRQUl0QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMzRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FFMUM7UUFBQyxJQUFJLENBQUMsQ0FBQzs7O1lBR0osbUJBQU0sTUFBTSxFQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztTQUNwRDtLQUNKOzs7OztJQUVELGFBQWEsQ0FBRSxLQUFLO1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sQ0FBQztTQUNWO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUUsY0FBYyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7O1FBRTNDLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztRQUMxRCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUU3RCxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssRUFBRSxJQUFJLE9BQU8sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUUsMEJBQTBCLEVBQUcsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzNELE1BQU0sQ0FBQztTQUNWO1FBRUQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLEdBQUcsTUFBTSxDQUFDO1FBQ25GLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVoRixPQUFPLENBQUMsR0FBRyxDQUFFLGtCQUFrQixFQUFHLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUc5QixNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2IsS0FBSyxpQkFBaUI7Z0JBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzlCLEtBQUssQ0FBQztZQUNWLEtBQUssbUJBQW1CO2dCQUNwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQztZQUNWO2dCQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUUsb0NBQW9DLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNwRSxLQUFLLENBQUM7U0FDYjtLQUNKOzs7OztJQUVELGVBQWUsQ0FBQyxPQUFpQjtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFFLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzlDOzs7OztJQUVELGlCQUFpQixDQUFDLE9BQW1CO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUUsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDOUM7OztZQWpFSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLHVCQUF1QjthQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ29udGFjdCB9IGZyb20gJy4uL21vZGVscy9jb250YWN0JztcclxuaW1wb3J0IHsgSVZvaWNlQ2FsbCB9IGZyb20gJy4uL21vZGVscy9jYWxsJztcclxuXHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwd2Etd2lkZ2V0YmFzZScsXHJcbiAgICB0ZW1wbGF0ZTogJzxkaXY+V0lER0VUQkFTRTwvZGl2PidcclxuICB9KVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0QmFzZUNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIG5hbWUgPSAnQmFzZVdpZGdldCc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsICgpID0+IHRoaXMuaGFuZGxlTWVzc2FnZShldmVudCksIGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0V2ZW50IExpc3RlbmVyIGF0dGFjaGVkJyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGZvciBJRTYgLSBJRTEwXHJcbiAgICAgICAgICAgIC8vIHRoZSBjYXN0IGlzIHdvcmthcm91bmQgZm9yIHR5cGVzY3JpcHQgbm90IHN1cHBvcnRpbmcgdGhlIGF0dGFjaEV2ZW50LW1ldGhvZFxyXG4gICAgICAgICAgICAoPGFueT53aW5kb3cpLmF0dGFjaEV2ZW50KCdtZXNzYWdlJywgKCkgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKGV2ZW50KSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZhbHNlLCAnSUUgRXZlbnQgTGlzdGVuZXIgYXR0YWNoZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTWVzc2FnZSggZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luICE9PSAnaHR0cDovL2xvY2FsaG9zdDo0MjAwJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyggJ0V2ZW50LmRhdGEnLCBldmVudC5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggJ0V2ZW50Lm9yaWdpbicsIGV2ZW50Lm9yaWdpbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coICdFdmVudC5zb3VyY2UnLCBldmVudC5zb3VyY2UpO1xyXG5cclxuICAgICAgICBjb25zdCBtZXRob2QgPSBldmVudC5kYXRhLm1ldGhvZCA/IGV2ZW50LmRhdGEubWV0aG9kIDogJyc7XHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGV2ZW50LmRhdGEucGF5bG9hZCA/IGV2ZW50LmRhdGEucGF5bG9hZCA6ICcnO1xyXG5cclxuICAgICAgICBpZiAobWV0aG9kID09PSAnJyB8fCBwYXlsb2FkID09PSAnJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ0ludmFsaWQgbWVzc2FnZSByZWNlaXZlZCcgLCBtZXRob2QsIHBheWxvYWQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjZWl2ZWQtZGF0YScpLmlubmVySFRNTCA9ICdNZXNzYWdlIHJlY2VpdmVkOiAnICsgbWV0aG9kO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXlsb2FkJykuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkocGF5bG9hZCwgbnVsbCwgNCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnTWVzc2FnZSByZWNlaXZlZCcgLCBtZXRob2QsIHBheWxvYWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnSlNPTicsIHBheWxvYWQpO1xyXG5cclxuXHJcbiAgICAgICAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgICAgICAgICAgY2FzZSAnb25TZWxlY3RDb250YWN0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMub25TZWxlY3RDb250YWN0KHBheWxvYWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ29uU2VsZWN0Vm9pY2VDYWxsJzpcclxuICAgICAgICAgICAgICAgIHRoaXMub25TZWxlY3RWb2ljZUNhbGwocGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnSW52YWxpZCBtZXRob2QgaW4gcmVjZWl2ZWQgbWVzc2FnZScsIG1ldGhvZCwgcGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3RDb250YWN0KGNvbnRhY3Q6IElDb250YWN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coICdvblNlbGVjdGVkQ29udGFjdCcsIGNvbnRhY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0Vm9pY2VDYWxsKGNvbnRhY3Q6IElWb2ljZUNhbGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyggJ29uU2VsZWN0Vm9pY2VDYWxsJywgY29udGFjdCk7XHJcbiAgICB9XHJcbn1cclxuIl19