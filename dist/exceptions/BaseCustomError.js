"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCustomError = void 0;
class BaseCustomError extends Error {
    constructor(message) {
        super(`${message}`);
    }
}
exports.BaseCustomError = BaseCustomError;
