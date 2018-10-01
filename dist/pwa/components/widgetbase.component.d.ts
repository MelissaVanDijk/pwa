import { IContact } from '../models/contact';
import { IVoiceCall } from '../models/call';
export declare class WidgetBaseComponent {
    name: string;
    constructor();
    handleMessage(event: any): void;
    onSelectContact(contact: IContact): void;
    onSelectVoiceCall(contact: IVoiceCall): void;
}
