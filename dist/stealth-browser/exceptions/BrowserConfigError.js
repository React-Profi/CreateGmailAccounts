"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserConfigError = void 0;
const BaseCustomError_1 = require("./BaseCustomError");
class BrowserConfigError extends BaseCustomError_1.BaseCustomError {
    constructor(message, throwSystemMessage = '') {
        super(BaseCustomError_1.BaseCustomError.formatMessage('BrowserConfig', message, throwSystemMessage));
    }
}
exports.BrowserConfigError = BrowserConfigError;
