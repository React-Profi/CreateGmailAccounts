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
            const locator = this.page.locator(selector);
            locator.setTimeout(5000);
            await locator.click();
        }
        catch (error) {
            throw new PageActionHandlerError_1.PageActionHandlerError('Не удалось кликнуть на элемент с селектором', error.message);
        }
    }
    //TODO: риски и улучшения для обхода анти детект
    async fillInput(selector, text) {
        try {
            const locator = this.page.locator(selector);
            await locator.click(); // Убедимся, что поле в фокусе
            for (const char of text) {
                if (Math.random() < 0.05) {
                    await this.page.keyboard.press('Backspace');
                    await this.page.keyboard.type(char);
                }
                else {
                    await this.page.keyboard.type(char, {
                        delay: 50 + Math.random() * 50
                    });
                }
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
