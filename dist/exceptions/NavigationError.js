"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationError = void 0;
const BaseCustomError_1 = require("./BaseCustomError");
//Ошибка навигации
class NavigationError extends BaseCustomError_1.BaseCustomError {
    constructor(message, url) {
        const detailedMessage = url ? `${message} (URL: ${url})` : message;
        super(detailedMessage, "NavigationError");
    }
}
exports.NavigationError = NavigationError;
/*
Ошибка навигации возникает, если бот не может корректно перейти на заданный URL или загрузка страницы завершилась с ошибкой.
Например, если сервер вернул статус 404 или бот застрял на стадии загрузки.

Пример:
Ошибка при вызове page.goto(url).
Некорректный URL.
Проблемы с сетью (например, отсутствие интернета или таймаут подключения).
*/
