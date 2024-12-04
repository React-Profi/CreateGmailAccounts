"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotController = void 0;
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
const puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
const BrowserConfig_1 = __importDefault(require("../puppeteer-config/BrowserConfig"));
puppeteer_extra_1.default.use((0, puppeteer_extra_plugin_stealth_1.default)());
class BotController {
    constructor(model, view) {
        this.browser = null;
        this.page = null;
        this.model = model;
        this.view = view;
        this.browserConfig = new BrowserConfig_1.default();
    }
    // Запуск браузера
    async launchBrowser() {
        try {
            const config = this.browserConfig.generateBrowserConfig();
            if (!config)
                throw new Error("Failed to generate browser config");
            this.browser = await puppeteer_extra_1.default.launch({
                headless: false,
                args: config.args,
                defaultViewport: config.defaultViewport,
            });
            this.page = await this.browser.newPage();
            // Установка User-Agent
            await this.page.setUserAgent(config.userAgent);
            console.log(`User-Agent: ${config.userAgent}`);
            await this.page.setExtraHTTPHeaders({
                "Accept-Language": config.lang,
            });
            console.log(config.lang);
            // Эмуляция языка на уровне браузера
            await this.page.evaluateOnNewDocument((lang) => {
                lang = lang.replace(/^"(.*)"$/, "$1");
                Object.defineProperty(navigator, "languages", {
                    get: () => [lang],
                });
            }, config.lang);
            // Эмуляция таймзоны
            await this.page.emulateTimezone("Europe/Moscow");
        }
        catch (error) {
            this.view.error(`Ошибка запуска браузера: ${error.message}`);
            throw error;
        }
    }
    // Навигация на страницу
    async navigateToUrl(url) {
        if (!this.page)
            throw new Error("Page is not initialized");
        this.view.log(`Navigating to: ${url}`);
        await this.page.goto(url, { waitUntil: "networkidle2" });
        this.view.success(`Successfully navigated to the page.`);
    }
    // Клик по кнопке
    async clickCreateAccountButton(selector) {
        if (!this.page)
            throw new Error("Page is not initialized");
        await this.page.waitForSelector(selector, { timeout: 5000 });
        await this.page.click(selector);
        await this.delay(50 + Math.random() * 100);
        const newUrl = this.page.url();
        this.view.log(`Navigated to: ${newUrl}`);
    }
    // Ввод текста
    async typeText(selector, text) {
        if (!this.page)
            throw new Error("Page is not initialized");
        await this.page.waitForSelector(selector);
        for (const char of text) {
            await this.page.type(selector, char);
            await this.delay(50 + Math.random() * 100);
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
            this.view.error(`An error occurred: ${error.message}`);
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
            this.view.error(`An error occurred: ${error.message}`);
        }
    }
    // Задержка (в миллисекундах)
    delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
exports.default = BotController;
exports.BotController = BotController;
