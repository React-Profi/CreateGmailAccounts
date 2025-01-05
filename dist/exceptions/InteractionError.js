"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionError = void 0;
const BaseCustomError_1 = require("./BaseCustomError");
class InteractionError extends BaseCustomError_1.BaseCustomError {
    constructor(message, selector) {
        const detailedMessage = selector
            ? `${message} (Selector: ${selector})`
            : message;
        super(detailedMessage, "InteractionError");
    }
}
exports.InteractionError = InteractionError;
/*
Ошибка взаимодействия возникает, если бот не может корректно выполнить операцию на веб-странице, например, найти элемент или выполнить клик.

Примеры
Селектор недоступен (элемент не найден).
Ошибка при клике или вводе текста.
Слишком долгий таймаут ожидания элемента.
*/
