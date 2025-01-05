"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataLoaderError = void 0;
const BaseCustomError_1 = require("./BaseCustomError");
class DataLoaderError extends BaseCustomError_1.BaseCustomError {
    constructor(message, throwSystemMessage = "") {
        super(`\n
  !----------------------------------------------------------------------------------!
  !\t\tИсключение упало в классе DataLoader.                                !
  !${message}
  !${throwSystemMessage ? `Системное сообщение: ${throwSystemMessage}` : ""}
  !----------------------------------------------------------------------------------!
      `);
    }
}
exports.DataLoaderError = DataLoaderError;
