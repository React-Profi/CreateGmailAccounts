"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailRegistrationControllerError = void 0;
const BaseCustomError_1 = require("./BaseCustomError");
class GmailRegistrationControllerError extends BaseCustomError_1.BaseCustomError {
    constructor(message, throwSystemMessage = '') {
        super(BaseCustomError_1.BaseCustomError.formatMessage('GmailRegistrationController', message, throwSystemMessage));
    }
}
exports.GmailRegistrationControllerError = GmailRegistrationControllerError;
