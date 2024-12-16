"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StealthBrowserManagerError = void 0;
const BaseCustomError_1 = require("./BaseCustomError");
class StealthBrowserManagerError extends BaseCustomError_1.BaseCustomError {
    constructor(message, throwSystemMessage = '') {
        super(BaseCustomError_1.BaseCustomError.formatMessage('StealthBrowserManager', message, throwSystemMessage));
    }
}
exports.StealthBrowserManagerError = StealthBrowserManagerError;
