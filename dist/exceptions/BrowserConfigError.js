"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserConfigError = void 0;
const BaseCustomError_1 = require("./BaseCustomError");
class BrowserConfigError extends BaseCustomError_1.BaseCustomError {
    constructor(message, throwSystemMessage = "") {
        super(`\n
  !----------------------------------------------------------------------------------!
  !\t\tИсключение упало в классе BrowserConfig.                             !
  !${message}
  !${throwSystemMessage ? `Системное сообщение: ${throwSystemMessage}` : ""}
  !----------------------------------------------------------------------------------!
      `);
    }
}
exports.BrowserConfigError = BrowserConfigError;
