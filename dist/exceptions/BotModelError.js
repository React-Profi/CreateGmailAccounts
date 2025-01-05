"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotModelError = void 0;
const BaseCustomError_1 = require("./BaseCustomError");
class BotModelError extends BaseCustomError_1.BaseCustomError {
    constructor(message, throwSystemMessage = '') {
        super(BaseCustomError_1.BaseCustomError.formatMessage('BotModel', message, throwSystemMessage));
    }
}
exports.BotModelError = BotModelError;
