"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotController = void 0;
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
const puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
const BotControllerError_1 = require("../exceptions/BotControllerError");
puppeteer_extra_1.default.use((0, puppeteer_extra_plugin_stealth_1.default)());
class BotController {
    constructor(model, view, browserConfig) {
        this.browser = null;
        this.page = null;
        this.model = model;
        this.view = view;
        this.browserConfig = browserConfig;
    }
    // Запуск браузера
    async launchBrowser() {
        try {
            const config = this.browserConfig.generateBrowserConfig();
            if (!config) {
                throw new BotControllerError_1.BotControllerError("Не удалось сгенерировать конфигурацию браузера");
            }
            this.browser = await puppeteer_extra_1.default.launch({
                headless: false,
                args: config.args,
                defaultViewport: config.defaultViewport,
            });
            this.page = await this.browser.newPage();
            await this.page.setUserAgent(config.userAgent);
            console.log(`User-Agent: ${config.userAgent}`);
            await this.page.setExtraHTTPHeaders({
                "Accept-Language": config.lang,
            });
            await this.page.evaluateOnNewDocument((lang) => {
                Object.defineProperty(navigator, "language", { value: "ru-RU" });
                lang = lang.replace(/^"(.*)"$/, "$1");
                Object.defineProperty(navigator, "languages", {
                    get: () => [lang],
                });
            }, config.lang);
            await this.page.emulateTimezone("Europe/Moscow");
        }
        catch (error) {
            throw new BotControllerError_1.BotControllerError("Ошибка при запуске браузера", error.message);
        }
    }
    // Навигация на страницу
    async navigateToUrl(url) {
        try {
            if (!this.page)
                throw new BotControllerError_1.BotControllerError("Page не инициализирована для навигации");
            this.view.log(`Навигация на: ${url}`);
            await this.page.goto(url, { waitUntil: "networkidle2" });
            this.view.success(`Успешно перешли на страницу.`);
        }
        catch (error) {
            throw new BotControllerError_1.BotControllerError("Не удалось перейти по URL", error.message);
        }
    }
    // Клик по кнопке
    async clickCreateAccountButton(selector) {
        try {
            if (!this.page)
                throw new BotControllerError_1.BotControllerError("Page не инициализирована для клика");
            await this.page.waitForSelector(selector, { timeout: 5000 });
            await this.page.click(selector);
            await this.delay(50 + Math.random() * 100);
            const newUrl = this.page.url();
            this.view.log(`Перешли на: ${newUrl}`);
        }
        catch (error) {
            throw new BotControllerError_1.BotControllerError("Не удалось кликнуть по кнопке создания аккаунта", error.message);
        }
    }
    // Ввод текста
    async typeText(selector, text) {
        try {
            if (!this.page)
                throw new BotControllerError_1.BotControllerError("Page не инициализирована для ввода текста");
            await this.page.waitForSelector(selector);
            for (const char of text) {
                await this.page.type(selector, char);
                await this.delay(50 + Math.random() * 100);
            }
        }
        catch (error) {
            throw new BotControllerError_1.BotControllerError(`Не удалось ввести текст в селектор: ${selector}`, error.message);
        }
    }
    // Закрытие браузера
    async closeBrowser() {
        if (this.browser) {
            await this.browser.close();
        }
    }
    // Основной запуск
    async run() {
        const url = this.model.getRegistrationUrl();
        const buttonSelector = this.model.getCreateAccountButtonSelector();
        try {
            await this.launchBrowser();
            await this.navigateToUrl(url);
            await this.clickCreateAccountButton(buttonSelector);
        }
        catch (error) {
            this.view.error(`Произошла ошибка: ${error.message}`);
        }
        finally {
            await this.closeBrowser();
        }
    }
    // Тестирование с бот-сайтом
    async runDetectTest() {
        const url = "https://bot.sannysoft.com/";
        try {
            await this.launchBrowser();
            await this.navigateToUrl(url);
        }
        catch (error) {
            this.view.error(`Произошла ошибка: ${error.message}`);
        }
    }
    // Задержка (в миллисекундах)
    delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
exports.default = BotController;
exports.BotController = BotController;
