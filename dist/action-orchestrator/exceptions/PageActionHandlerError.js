"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageActionHandlerError = void 0;
const BaseCustomError_1 = require("./BaseCustomError");
class PageActionHandlerError extends BaseCustomError_1.BaseCustomError {
    constructor(message, throwSystemMessage = '') {
        super(BaseCustomError_1.BaseCustomError.formatMessage('PageActionHandler', message, throwSystemMessage));
    }
}
exports.PageActionHandlerError = PageActionHandlerError;
