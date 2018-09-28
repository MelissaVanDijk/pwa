/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function IConversationBase() { }
/** @type {?} */
IConversationBase.prototype.remoteEntry;
/** @type {?} */
IConversationBase.prototype.remoteAddress;
/** @type {?} */
IConversationBase.prototype.fromAddress;
/** @type {?} */
IConversationBase.prototype.state;
/** @type {?} */
IConversationBase.prototype.id;
/**
 * @record
 */
export function IVoiceCall() { }
/** @type {?} */
IVoiceCall.prototype.modality;
/** @type {?} */
IVoiceCall.prototype.timeStateChange;
/** @type {?} */
IVoiceCall.prototype.direction;
/** @type {?} */
IVoiceCall.prototype.fallback;
/** @type {?} */
IVoiceCall.prototype.callRoute;
/** @type {?} */
IVoiceCall.prototype.toAddress;
/** @type {?} */
IVoiceCall.prototype.originalTo;
/**
 * @record
 */
export function IChatCall() { }
/** @type {?} */
IChatCall.prototype.modality;
/** @type {?} */
IChatCall.prototype.messages;
/** @type {?} */
IChatCall.prototype.duration;
/** @type {?} */
IChatCall.prototype.myAddress;
/** @type {?} */
IChatCall.prototype.displayName;
/** @type {?} */
IChatCall.prototype.pictureUrl;
/**
 * @record
 */
export function IMailMessage() { }
/** @type {?} */
IMailMessage.prototype.modality;
/** @type {?} */
IMailMessage.prototype.timestamp;
/** @type {?} */
IMailMessage.prototype.title;
/** @type {?} */
IMailMessage.prototype.body;
/** @type {?} */
IMailMessage.prototype.importance;
/** @type {?} */
IMailMessage.prototype.isDraft;
/** @type {?} */
IMailMessage.prototype.draftId;
/** @type {?} */
IMailMessage.prototype.claimed;
/** @typedef {?} */
var ICall;
export { ICall };
/**
 * @record
 */
export function IChatMessage() { }
/** @type {?} */
IChatMessage.prototype.from;
/** @type {?} */
IChatMessage.prototype.time;
/** @type {?} */
IChatMessage.prototype.message;
/**
 * @record
 */
export function ICallRouteEntry() { }
/** @type {?} */
ICallRouteEntry.prototype.fromAddress;
/** @type {?} */
ICallRouteEntry.prototype.toAddress;
/** @type {?} */
ICallRouteEntry.prototype.originalTo;
/** @type {?} */
ICallRouteEntry.prototype.direction;
/** @type {?} */
ICallRouteEntry.prototype.originalCalled;
/** @type {?} */
ICallRouteEntry.prototype.from;
/** @type {?} */
ICallRouteEntry.prototype.until;
/** @enum {number} */
var CallDirection = {
    Incoming: 0,
    Outgoing: 1,
};
export { CallDirection };
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
export { CallState };
CallState[CallState.Idle] = 'Idle';
CallState[CallState.Incoming] = 'Incoming';
CallState[CallState.Connected] = 'Connected';
CallState[CallState.Hold] = 'Hold';
CallState[CallState.Dialing] = 'Dialing';
CallState[CallState.Disconnected] = 'Disconnected';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3B3YS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvY2FsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE0REksV0FBWTtJQUNaLFdBQVk7Ozs0QkFEWixRQUFROzRCQUNSLFFBQVE7OztJQUlSLE9BQVE7SUFDUixXQUFZO0lBQ1osWUFBYTtJQUNiLE9BQVE7SUFDUixVQUFXO0lBQ1gsZUFBZ0I7OztvQkFMaEIsSUFBSTtvQkFDSixRQUFRO29CQUNSLFNBQVM7b0JBQ1QsSUFBSTtvQkFDSixPQUFPO29CQUNQLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQ29udGFjdCB9IGZyb20gJy4vY29udGFjdCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb252ZXJzYXRpb25CYXNlIHtcclxuICAgIHJlbW90ZUVudHJ5OiBJQ29udGFjdHwgbnVsbDtcclxuICAgIHJlbW90ZUFkZHJlc3M6IHN0cmluZztcclxuICAgIGZyb21BZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBzdGF0ZTogQ2FsbFN0YXRlO1xyXG4gICAgaWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVm9pY2VDYWxsIGV4dGVuZHMgSUNvbnZlcnNhdGlvbkJhc2Uge1xyXG4gICAgbW9kYWxpdHk6ICdWb2ljZSc7XHJcbiAgICB0aW1lU3RhdGVDaGFuZ2U6IERhdGU7XHJcbiAgICBkaXJlY3Rpb246IENhbGxEaXJlY3Rpb247XHJcbiAgICBmYWxsYmFjazogc3RyaW5nO1xyXG4gICAgY2FsbFJvdXRlOiBJQ2FsbFJvdXRlRW50cnlbXTtcclxuICAgIHRvQWRkcmVzczogc3RyaW5nO1xyXG4gICAgb3JpZ2luYWxUbzogSUNhbGxSb3V0ZUVudHJ5O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGF0Q2FsbCBleHRlbmRzIElDb252ZXJzYXRpb25CYXNlIHtcclxuICAgIG1vZGFsaXR5OiAnQ2hhdCc7XHJcbiAgICBtZXNzYWdlczogSUNoYXRNZXNzYWdlW107XHJcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xyXG4gICAgbXlBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gICAgcGljdHVyZVVybDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNYWlsTWVzc2FnZSBleHRlbmRzIElDb252ZXJzYXRpb25CYXNlIHtcclxuICAgIG1vZGFsaXR5OiAnTWFpbCc7XHJcbiAgICB0aW1lc3RhbXA6IERhdGU7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgYm9keTogc3RyaW5nO1xyXG4gICAgaW1wb3J0YW5jZTogc3RyaW5nO1xyXG4gICAgaXNEcmFmdDogYm9vbGVhbjtcclxuICAgIGRyYWZ0SWQ6IHN0cmluZztcclxuICAgIGNsYWltZWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSUNhbGwgPSBJVm9pY2VDYWxsIHwgSUNoYXRDYWxsIHwgSU1haWxNZXNzYWdlO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hhdE1lc3NhZ2Uge1xyXG4gICAgZnJvbTogc3RyaW5nO1xyXG4gICAgdGltZTogRGF0ZTtcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2FsbFJvdXRlRW50cnkge1xyXG4gICAgZnJvbUFkZHJlc3M6IHN0cmluZztcclxuICAgIHRvQWRkcmVzczogc3RyaW5nO1xyXG4gICAgb3JpZ2luYWxUbzogc3RyaW5nO1xyXG4gICAgZGlyZWN0aW9uOiBDYWxsRGlyZWN0aW9uO1xyXG4gICAgb3JpZ2luYWxDYWxsZWQ6IElDb250YWN0O1xyXG4gICAgZnJvbTogRGF0ZTtcclxuICAgIHVudGlsOiBEYXRlO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGVudW0gQ2FsbERpcmVjdGlvbiB7XHJcbiAgICBJbmNvbWluZyA9IDAsXHJcbiAgICBPdXRnb2luZyA9IDFcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ2FsbFN0YXRlIHtcclxuICAgIElkbGUgPSAwLFxyXG4gICAgSW5jb21pbmcgPSAxLFxyXG4gICAgQ29ubmVjdGVkID0gMixcclxuICAgIEhvbGQgPSAzLFxyXG4gICAgRGlhbGluZyA9IDQsXHJcbiAgICBEaXNjb25uZWN0ZWQgPSA1XHJcbn0iXX0=