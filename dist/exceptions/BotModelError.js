"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotModelError = void 0;
const BaseCustomError_1 = require("./BaseCustomError");
class BotModelError extends BaseCustomError_1.BaseCustomError {
    constructor(message, throwSystemMessage = "") {
        super(`\n
  !----------------------------------------------------------------------------------!
  !\t\tИсключение упало в классе BotModel.                                  !
  !${message}
  !${throwSystemMessage ? `Системное сообщение: ${throwSystemMessage}` : ""}
  !----------------------------------------------------------------------------------!
      `);
    }
}
exports.BotModelError = BotModelError;
