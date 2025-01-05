"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailRegistrationModelError = void 0;
const BaseCustomError_1 = require("./BaseCustomError");
class GmailRegistrationModelError extends BaseCustomError_1.BaseCustomError {
    constructor(message, throwSystemMessage = '') {
        super(BaseCustomError_1.BaseCustomError.formatMessage('GmailRegistrationModel', message, throwSystemMessage));
    }
}
exports.GmailRegistrationModelError = GmailRegistrationModelError;
