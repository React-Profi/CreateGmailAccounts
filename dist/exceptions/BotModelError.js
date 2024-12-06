"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotModelError = void 0;
const BaseCustomError_1 = require("./BaseCustomError");
class BotModelError extends BaseCustomError_1.BaseCustomError {
    constructor(message) {
        super(`\n
  !----------------------------------------------------------------------------------!
  !\t\tИсключение упало в классе BotModel.                                  !
  !${message}
  !----------------------------------------------------------------------------------!
      `);
    }
}
exports.BotModelError = BotModelError;
