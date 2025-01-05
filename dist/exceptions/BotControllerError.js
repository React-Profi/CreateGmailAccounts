"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotControllerError = void 0;
const BaseCustomError_1 = require("./BaseCustomError");
class BotControllerError extends BaseCustomError_1.BaseCustomError {
    constructor(message, throwSystemMessage = '') {
        super(BaseCustomError_1.BaseCustomError.formatMessage('BotController', message, throwSystemMessage));
    }
}
exports.BotControllerError = BotControllerError;
