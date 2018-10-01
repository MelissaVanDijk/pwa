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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3B3YS8iLCJzb3VyY2VzIjpbIm1vZGVscy9jYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTRESSxXQUFZO0lBQ1osV0FBWTs7OzRCQURaLFFBQVE7NEJBQ1IsUUFBUTs7O0lBSVIsT0FBUTtJQUNSLFdBQVk7SUFDWixZQUFhO0lBQ2IsT0FBUTtJQUNSLFVBQVc7SUFDWCxlQUFnQjs7O29CQUxoQixJQUFJO29CQUNKLFFBQVE7b0JBQ1IsU0FBUztvQkFDVCxJQUFJO29CQUNKLE9BQU87b0JBQ1AsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDb250YWN0IH0gZnJvbSAnLi9jb250YWN0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnZlcnNhdGlvbkJhc2Uge1xyXG4gICAgcmVtb3RlRW50cnk6IElDb250YWN0fCBudWxsO1xyXG4gICAgcmVtb3RlQWRkcmVzczogc3RyaW5nO1xyXG4gICAgZnJvbUFkZHJlc3M6IHN0cmluZztcclxuICAgIHN0YXRlOiBDYWxsU3RhdGU7XHJcbiAgICBpZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElWb2ljZUNhbGwgZXh0ZW5kcyBJQ29udmVyc2F0aW9uQmFzZSB7XHJcbiAgICBtb2RhbGl0eTogJ1ZvaWNlJztcclxuICAgIHRpbWVTdGF0ZUNoYW5nZTogRGF0ZTtcclxuICAgIGRpcmVjdGlvbjogQ2FsbERpcmVjdGlvbjtcclxuICAgIGZhbGxiYWNrOiBzdHJpbmc7XHJcbiAgICBjYWxsUm91dGU6IElDYWxsUm91dGVFbnRyeVtdO1xyXG4gICAgdG9BZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBvcmlnaW5hbFRvOiBJQ2FsbFJvdXRlRW50cnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXRDYWxsIGV4dGVuZHMgSUNvbnZlcnNhdGlvbkJhc2Uge1xyXG4gICAgbW9kYWxpdHk6ICdDaGF0JztcclxuICAgIG1lc3NhZ2VzOiBJQ2hhdE1lc3NhZ2VbXTtcclxuICAgIGR1cmF0aW9uOiBudW1iZXI7XHJcbiAgICBteUFkZHJlc3M6IHN0cmluZztcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICBwaWN0dXJlVXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1haWxNZXNzYWdlIGV4dGVuZHMgSUNvbnZlcnNhdGlvbkJhc2Uge1xyXG4gICAgbW9kYWxpdHk6ICdNYWlsJztcclxuICAgIHRpbWVzdGFtcDogRGF0ZTtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBib2R5OiBzdHJpbmc7XHJcbiAgICBpbXBvcnRhbmNlOiBzdHJpbmc7XHJcbiAgICBpc0RyYWZ0OiBib29sZWFuO1xyXG4gICAgZHJhZnRJZDogc3RyaW5nO1xyXG4gICAgY2xhaW1lZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJQ2FsbCA9IElWb2ljZUNhbGwgfCBJQ2hhdENhbGwgfCBJTWFpbE1lc3NhZ2U7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGF0TWVzc2FnZSB7XHJcbiAgICBmcm9tOiBzdHJpbmc7XHJcbiAgICB0aW1lOiBEYXRlO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDYWxsUm91dGVFbnRyeSB7XHJcbiAgICBmcm9tQWRkcmVzczogc3RyaW5nO1xyXG4gICAgdG9BZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBvcmlnaW5hbFRvOiBzdHJpbmc7XHJcbiAgICBkaXJlY3Rpb246IENhbGxEaXJlY3Rpb247XHJcbiAgICBvcmlnaW5hbENhbGxlZDogSUNvbnRhY3Q7XHJcbiAgICBmcm9tOiBEYXRlO1xyXG4gICAgdW50aWw6IERhdGU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZW51bSBDYWxsRGlyZWN0aW9uIHtcclxuICAgIEluY29taW5nID0gMCxcclxuICAgIE91dGdvaW5nID0gMVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDYWxsU3RhdGUge1xyXG4gICAgSWRsZSA9IDAsXHJcbiAgICBJbmNvbWluZyA9IDEsXHJcbiAgICBDb25uZWN0ZWQgPSAyLFxyXG4gICAgSG9sZCA9IDMsXHJcbiAgICBEaWFsaW5nID0gNCxcclxuICAgIERpc2Nvbm5lY3RlZCA9IDVcclxufSJdfQ==