"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageActionsError = void 0;
const BaseCustomError_1 = require("./BaseCustomError");
class PageActionsError extends BaseCustomError_1.BaseCustomError {
    constructor(message, throwSystemMessage = '') {
        super(BaseCustomError_1.BaseCustomError.formatMessage('PageActions', message, throwSystemMessage));
    }
}
exports.PageActionsError = PageActionsError;
