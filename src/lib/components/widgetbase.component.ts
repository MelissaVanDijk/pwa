import { Component } from '@angular/core';
import { IContact } from '../models/contact';
import { IVoiceCall } from '../models/call';




@Component({
    selector: 'pwa-widgetbase',
    template: '<div>WIDGETBASE</div>'
  })
export class WidgetBaseComponent {

    public name = 'BaseWidget';

    constructor() {

        console.log('BaseWidget construction');
        if (window.addEventListener) {
            window.addEventListener('message', () => this.handleMessage(event), false);
            console.log('Event Listener attached');

        } else {
            // for IE6 - IE10
            // the cast is workaround for typescript not supporting the attachEvent-method
            (<any>window).attachEvent('message', () => this.handleMessage(event));
            console.log(false, 'IE Event Listener attached');
        }
    }

    handleMessage( event) {
        if (event.origin !== 'http://localhost:4200' && event.origin !== 'http://localhost:5200') {
            console.log('ORIGIN IS NOT GOOD', event.origin);
            return;
        }

        console.log( 'Event.data', event.data);
        console.log( 'Event.origin', event.origin);
        console.log( 'Event.source', event.source);

        const method = event.data.method ? event.data.method : '';
        const payload = event.data.payload ? event.data.payload : '';

        if (method === '' || payload === '') {
            console.log( 'Invalid message received' , method, payload);
            return;
        }

        //document.getElementById('received-data').innerHTML = 'Message received: ' + method;
        //document.getElementById('payload').innerHTML = JSON.stringify(payload, null, 4);

        console.log( 'Message received' , method, payload);
        console.log( 'JSON', payload);


        switch (method) {
            case 'onSelectContact':
                this.onSelectContact(payload);
                break;
            case 'onSelectVoiceCall':
                this.onSelectVoiceCall(payload);
                break;
            default:
                console.log( 'Invalid method in received message', method, payload);
                break;
        }
    }

    onSelectContact(contact: IContact) {
        console.log( 'onSelectedContact', contact);
    }

    onSelectVoiceCall(contact: IVoiceCall) {
        console.log( 'onSelectVoiceCall', contact);
    }
}
