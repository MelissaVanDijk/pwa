/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function IContact() { }
/** @type {?} */
IContact.prototype.key;
/** @type {?} */
IContact.prototype.idCombined;
/** @type {?} */
IContact.prototype.initials;
/** @type {?} */
IContact.prototype.completeName;
/** @type {?} */
IContact.prototype.firstName;
/** @type {?} */
IContact.prototype.middleName;
/** @type {?} */
IContact.prototype.lastName;
/** @type {?} */
IContact.prototype.id;
/** @type {?} */
IContact.prototype.companyEmail;
/** @type {?} */
IContact.prototype.compPrimaryPhone;
/** @type {?} */
IContact.prototype.compAltPhone;
/** @type {?} */
IContact.prototype.mobilePhone;
/** @type {?} */
IContact.prototype.privatePhone;
/** @type {?} */
IContact.prototype.sipAddress;
/** @type {?} */
IContact.prototype.telUri;
/** @type {?} */
IContact.prototype.function;
/** @type {?} */
IContact.prototype.photo;
/** @type {?} */
IContact.prototype.contactScope;
/** @type {?} */
IContact.prototype.organization;
/** @type {?} */
IContact.prototype.department;
/** @type {?} */
IContact.prototype.building;
/** @type {?} */
IContact.prototype.data;
/** @enum {number} */
var ContactScope = {
    Personal: 0,
    Company: 1,
};
export { ContactScope };
ContactScope[ContactScope.Personal] = 'Personal';
ContactScope[ContactScope.Company] = 'Company';
/**
 * @record
 */
export function ICoordinates() { }
/** @type {?} */
ICoordinates.prototype.lat;
/** @type {?} */
ICoordinates.prototype.lng;
/**
 * @record
 */
export function IContactData() { }
/** @type {?} */
IContactData.prototype.key;
/** @type {?} */
IContactData.prototype.coordinates;
/**
 * @record
 */
export function IOmnidirOrg() { }
/** @type {?} */
IOmnidirOrg.prototype.id;
/** @type {?} */
IOmnidirOrg.prototype.name;
/**
 * @record
 */
export function IOmnidirDept() { }
/** @type {?} */
IOmnidirDept.prototype.id;
/** @type {?} */
IOmnidirDept.prototype.name;
/** @type {?} */
IOmnidirDept.prototype.organizationId;
/**
 * @record
 */
export function IOmnidirBuilding() { }
/** @type {?} */
IOmnidirBuilding.prototype.id;
/** @type {?} */
IOmnidirBuilding.prototype.name;
/** @type {?} */
IOmnidirBuilding.prototype.organizationId;
/**
 * @record
 */
export function IOmnidirColumn() { }
/** @type {?} */
IOmnidirColumn.prototype.id;
/** @type {?} */
IOmnidirColumn.prototype.name;
/** @type {?} */
IOmnidirColumn.prototype.translation;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3B3YS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvY29udGFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE2QkksV0FBUTtJQUNSLFVBQU87OzswQkFEUCxRQUFROzBCQUNSLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElDb250YWN0IHtcclxuICAgIGtleTogc3RyaW5nO1xyXG5cclxuICAgIGlkQ29tYmluZWQ6IHN0cmluZztcclxuICAgIGluaXRpYWxzOiBzdHJpbmc7XHJcbiAgICBjb21wbGV0ZU5hbWU6IHN0cmluZztcclxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gICAgbWlkZGxlTmFtZTogc3RyaW5nO1xyXG4gICAgbGFzdE5hbWU6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBjb21wYW55RW1haWw6IHN0cmluZztcclxuICAgIGNvbXBQcmltYXJ5UGhvbmU6IHN0cmluZztcclxuICAgIGNvbXBBbHRQaG9uZTogc3RyaW5nO1xyXG4gICAgbW9iaWxlUGhvbmU6IHN0cmluZztcclxuICAgIHByaXZhdGVQaG9uZTogc3RyaW5nO1xyXG4gICAgc2lwQWRkcmVzczogc3RyaW5nO1xyXG4gICAgdGVsVXJpOiBzdHJpbmc7XHJcbiAgICBmdW5jdGlvbjogc3RyaW5nO1xyXG4gICAgcGhvdG86IHN0cmluZztcclxuICAgIGNvbnRhY3RTY29wZTogQ29udGFjdFNjb3BlO1xyXG5cclxuICAgIG9yZ2FuaXphdGlvbjogSU9tbmlkaXJPcmc7XHJcbiAgICBkZXBhcnRtZW50OiBJT21uaWRpckRlcHQ7XHJcbiAgICBidWlsZGluZzogSU9tbmlkaXJCdWlsZGluZztcclxuXHJcbiAgICBkYXRhOiBJQ29udGFjdERhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENvbnRhY3RTY29wZSB7XHJcbiAgICBQZXJzb25hbCAsXHJcbiAgICBDb21wYW55XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvb3JkaW5hdGVzIHtcclxuICAgIGxhdDogbnVtYmVyO1xyXG4gICAgbG5nOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3REYXRhIHtcclxuICAgIGtleTogc3RyaW5nO1xyXG4gICAgY29vcmRpbmF0ZXM6IElDb29yZGluYXRlcztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT21uaWRpck9yZyB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElPbW5pZGlyRGVwdCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgb3JnYW5pemF0aW9uSWQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT21uaWRpckJ1aWxkaW5nIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBvcmdhbml6YXRpb25JZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElPbW5pZGlyQ29sdW1uIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB0cmFuc2xhdGlvbjogc3RyaW5nO1xyXG59Il19