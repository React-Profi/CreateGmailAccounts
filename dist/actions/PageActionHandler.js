"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageActionHandler = void 0;
const PageActionHandlerError_1 = require("./exceptions/PageActionHandlerError");
class PageActionHandler {
    constructor(page) {
        this.page = page;
    }
    async dispatch(action) {
        try {
            if (typeof action.payload !== 'object' || action.payload === null) {
                throw new PageActionHandlerError_1.PageActionHandlerError(`Параметр payload должен быть объектом и не равен null для действия типа: ${action.type}`, '');
            }
            switch (action.type) {
                case 'navigateToPage':
                    await this.navigateToPage(action.payload.url);
                    break;
                case 'click':
                    await this.click(action.payload.selector);
                    break;
                case 'fillInput':
                    await this.fillInput(action.payload.selector, action.payload.text);
                    break;
                default:
                    throw new PageActionHandlerError_1.PageActionHandlerError(`Неизвестный тип действия: ${action.type}`, '');
            }
        }
        catch (error) {
            throw new PageActionHandlerError_1.PageActionHandlerError(`Не удалось выполнить действие для типа: ${action.type}`, error.message);
        }
    }
    async navigateToPage(url) {
        try {
            await this.page.goto(url, { waitUntil: 'networkidle2' });
        }
        catch (error) {
            throw new PageActionHandlerError_1.PageActionHandlerError('Не удалось перейти по URL', error.message);
        }
    }
    async click(selector) {
        try {
            await this.page.waitForSelector(selector, { timeout: 5000 });
            await this.page.click(selector);
        }
        catch (error) {
            throw new PageActionHandlerError_1.PageActionHandlerError('Не удалось кликнуть на элемент с селектором', error.message);
        }
    }
    async fillInput(selector, text) {
        try {
            await this.page.waitForSelector(selector);
            for (const char of text) {
                await this.page.type(selector, char);
                await this.delay(50 + Math.random() * 100);
            }
        }
        catch (error) {
            throw new PageActionHandlerError_1.PageActionHandlerError('Не удалось ввести текст в элемент', error.message);
        }
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
exports.PageActionHandler = PageActionHandler;
