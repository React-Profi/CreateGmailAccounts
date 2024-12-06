"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotViewError = void 0;
const BaseCustomError_1 = require("./BaseCustomError");
class BotViewError extends BaseCustomError_1.BaseCustomError {
    constructor(message) {
        super(`\n
  !----------------------------------------------------------------------------------!
  !\t\tИсключение упало в классе BotView.                                   !
  !${message}
  !----------------------------------------------------------------------------------!
      `);
    }
}
exports.BotViewError = BotViewError;
