"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataLoaderError = void 0;
const BaseCustomError_1 = require("./BaseCustomError");
class DataLoaderError extends BaseCustomError_1.BaseCustomError {
    constructor(message) {
        super(`\n
  !----------------------------------------------------------------------------------!
  !\t\tИсключение упало в классе DataLoader.                                !
  !${message}
  !----------------------------------------------------------------------------------!
      `);
    }
}
exports.DataLoaderError = DataLoaderError;
