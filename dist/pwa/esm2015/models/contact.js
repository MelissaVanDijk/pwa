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
const ContactScope = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3B3YS8iLCJzb3VyY2VzIjpbIm1vZGVscy9jb250YWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTZCSSxXQUFRO0lBQ1IsVUFBTzs7OzBCQURQLFFBQVE7MEJBQ1IsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3Qge1xyXG4gICAga2V5OiBzdHJpbmc7XHJcblxyXG4gICAgaWRDb21iaW5lZDogc3RyaW5nO1xyXG4gICAgaW5pdGlhbHM6IHN0cmluZztcclxuICAgIGNvbXBsZXRlTmFtZTogc3RyaW5nO1xyXG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgICBtaWRkbGVOYW1lOiBzdHJpbmc7XHJcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGNvbXBhbnlFbWFpbDogc3RyaW5nO1xyXG4gICAgY29tcFByaW1hcnlQaG9uZTogc3RyaW5nO1xyXG4gICAgY29tcEFsdFBob25lOiBzdHJpbmc7XHJcbiAgICBtb2JpbGVQaG9uZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZVBob25lOiBzdHJpbmc7XHJcbiAgICBzaXBBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICB0ZWxVcmk6IHN0cmluZztcclxuICAgIGZ1bmN0aW9uOiBzdHJpbmc7XHJcbiAgICBwaG90bzogc3RyaW5nO1xyXG4gICAgY29udGFjdFNjb3BlOiBDb250YWN0U2NvcGU7XHJcblxyXG4gICAgb3JnYW5pemF0aW9uOiBJT21uaWRpck9yZztcclxuICAgIGRlcGFydG1lbnQ6IElPbW5pZGlyRGVwdDtcclxuICAgIGJ1aWxkaW5nOiBJT21uaWRpckJ1aWxkaW5nO1xyXG5cclxuICAgIGRhdGE6IElDb250YWN0RGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29udGFjdFNjb3BlIHtcclxuICAgIFBlcnNvbmFsICxcclxuICAgIENvbXBhbnlcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29vcmRpbmF0ZXMge1xyXG4gICAgbGF0OiBudW1iZXI7XHJcbiAgICBsbmc6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29udGFjdERhdGEge1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICBjb29yZGluYXRlczogSUNvb3JkaW5hdGVzO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElPbW5pZGlyT3JnIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9tbmlkaXJEZXB0IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBvcmdhbml6YXRpb25JZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElPbW5pZGlyQnVpbGRpbmcge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIG9yZ2FuaXphdGlvbklkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9tbmlkaXJDb2x1bW4ge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHRyYW5zbGF0aW9uOiBzdHJpbmc7XHJcbn0iXX0=