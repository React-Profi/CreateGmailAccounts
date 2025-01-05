"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
const BaseCustomError_1 = require("./BaseCustomError");
class ValidationError extends BaseCustomError_1.BaseCustomError {
    constructor(message) {
        super(message, "ValidationError");
    }
}
exports.ValidationError = ValidationError;
/*
Этот класс используется для обработки ошибок валидации, например, проверки входных данных или результатов выполнения методов.

Используется для обработки ошибок, связанных с некорректными данными:

Неверный селектор элемента.
Некорректный формат входных параметров.
Ошибка проверки состояния объектов или результатов.
*/
