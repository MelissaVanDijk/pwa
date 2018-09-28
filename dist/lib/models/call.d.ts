import { IContact } from './contact';
export interface IConversationBase {
    remoteEntry: IContact | null;
    remoteAddress: string;
    fromAddress: string;
    state: CallState;
    id: string;
}
export interface IVoiceCall extends IConversationBase {
    modality: 'Voice';
    timeStateChange: Date;
    direction: CallDirection;
    fallback: string;
    callRoute: ICallRouteEntry[];
    toAddress: string;
    originalTo: ICallRouteEntry;
}
export interface IChatCall extends IConversationBase {
    modality: 'Chat';
    messages: IChatMessage[];
    duration: number;
    myAddress: string;
    displayName: string;
    pictureUrl: string;
}
export interface IMailMessage extends IConversationBase {
    modality: 'Mail';
    timestamp: Date;
    title: string;
    body: string;
    importance: string;
    isDraft: boolean;
    draftId: string;
    claimed: string;
}
export declare type ICall = IVoiceCall | IChatCall | IMailMessage;
export interface IChatMessage {
    from: string;
    time: Date;
    message: string;
}
export interface ICallRouteEntry {
    fromAddress: string;
    toAddress: string;
    originalTo: string;
    direction: CallDirection;
    originalCalled: IContact;
    from: Date;
    until: Date;
}
export declare enum CallDirection {
    Incoming = 0,
    Outgoing = 1,
}
export declare enum CallState {
    Idle = 0,
    Incoming = 1,
    Connected = 2,
    Hold = 3,
    Dialing = 4,
    Disconnected = 5,
}
