"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailRegistrationError = void 0;
const BaseCustomError_1 = require("./BaseCustomError");
class GmailRegistrationError extends BaseCustomError_1.BaseCustomError {
    constructor(message, throwSystemMessage = '') {
        super(BaseCustomError_1.BaseCustomError.formatMessage('GmailRegistration', message, throwSystemMessage));
    }
}
exports.GmailRegistrationError = GmailRegistrationError;
