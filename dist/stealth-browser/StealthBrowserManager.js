"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StealthBrowserManager = void 0;
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
const puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
const StealthBrowserManagerError_1 = require("./exceptions/StealthBrowserManagerError");
puppeteer_extra_1.default.use((0, puppeteer_extra_plugin_stealth_1.default)());
class StealthBrowserManager {
    constructor(config) {
        this.browser = null;
        this.page = null;
        this.config = config;
    }
    async launch() {
        try {
            const config = this.config.generateBrowserConfig();
            if (!config)
                throw new StealthBrowserManagerError_1.StealthBrowserManagerError('Invalid browser configuration.');
            this.browser = await puppeteer_extra_1.default.launch({
                headless: false,
                args: config.args,
                defaultViewport: config.defaultViewport
            });
            this.page = await this.browser.newPage();
            await this.page.setUserAgent(config.userAgent);
            await this.page.setExtraHTTPHeaders({ 'Accept-Language': config.lang });
            await this.page.emulateTimezone('Europe/Moscow');
            return this.page;
        }
        catch (error) {
            throw new StealthBrowserManagerError_1.StealthBrowserManagerError('Failed to launch browser', error.message);
        }
    }
    async close() {
        if (this.browser)
            await this.browser.close();
    }
    getPage() {
        if (!this.page)
            throw new StealthBrowserManagerError_1.StealthBrowserManagerError('Page not initialized.');
        return this.page;
    }
}
exports.StealthBrowserManager = StealthBrowserManager;
