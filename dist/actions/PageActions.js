"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageActions = void 0;
const PageActionsError_1 = require("../exceptions/PageActionsError");
class PageActions {
    constructor(page) {
        this.page = page;
    }
    async navigate(url) {
        try {
            await this.page.goto(url, { waitUntil: 'networkidle2' });
        }
        catch (error) {
            throw new PageActionsError_1.PageActionsError('Failed to navigate to URL', error.message);
        }
    }
    async click(selector) {
        try {
            await this.page.waitForSelector(selector, { timeout: 5000 });
            await this.page.click(selector);
        }
        catch (error) {
            throw new PageActionsError_1.PageActionsError('Failed to click the selector', error.message);
        }
    }
    async type(selector, text) {
        try {
            await this.page.waitForSelector(selector);
            for (const char of text) {
                await this.page.type(selector, char);
                await this.delay(50 + Math.random() * 100);
            }
        }
        catch (error) {
            throw new PageActionsError_1.PageActionsError('Failed to type text', error.message);
        }
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
exports.PageActions = PageActions;
