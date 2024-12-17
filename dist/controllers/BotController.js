"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailRegistrationController = void 0;
const PageActions_1 = require("../actions/PageActions");
const GmailRegistrationControllerError_1 = require("../exceptions/GmailRegistrationControllerError");
class GmailRegistrationController {
    constructor(model, view, browserManager) {
        this.model = model;
        this.view = view;
        this.browserManager = browserManager;
    }
    // Основной процесс регистрации
    async run() {
        if (true) {
            this.runDetectTest();
            return;
        }
        try {
            const url = this.model.getRegistrationUrl();
            const buttonSelector = this.model.getCreateAccountButtonSelector();
            const page = await this.browserManager.launch();
            const actions = new PageActions_1.PageActions(page);
            await actions.navigate(url);
            await actions.click(buttonSelector);
            this.view.success(`Регистрация начата успешно.`);
        }
        catch (error) {
            throw new GmailRegistrationControllerError_1.GmailRegistrationControllerError('Ошибка во время процесса регистрации', error.message);
        }
        finally {
            await this.browserManager.close();
        }
    }
    // Тест на детектирование
    async runDetectTest() {
        const url = 'https://bot.sannysoft.com/';
        //const url = "https://amiunique.org/fingerprint";
        try {
            const page = await this.browserManager.launch();
            const actions = new PageActions_1.PageActions(page);
            await actions.navigate(url);
            this.view.success(`Успешно перешли на страницу теста: ${url}`);
        }
        catch (error) {
            throw new GmailRegistrationControllerError_1.GmailRegistrationControllerError('Ошибка во время выполнения теста на детектирование', error.message);
        }
        finally {
            //await this.browserManager.close();
        }
    }
}
exports.GmailRegistrationController = GmailRegistrationController;
