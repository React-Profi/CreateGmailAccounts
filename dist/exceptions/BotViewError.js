"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotViewError = void 0;
const BaseCustomError_1 = require("./BaseCustomError");
class BotViewError extends BaseCustomError_1.BaseCustomError {
    constructor(message, throwSystemMessage = "") {
        super(`\n
  !----------------------------------------------------------------------------------!
  !\t\tИсключение упало в классе BotView.                                   !
  !${message}
  !${throwSystemMessage ? `Системное сообщение: ${throwSystemMessage}` : ""}
  !----------------------------------------------------------------------------------!
      `);
    }
}
exports.BotViewError = BotViewError;
