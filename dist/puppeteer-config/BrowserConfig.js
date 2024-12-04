"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataLoader_js_1 = __importDefault(require("../services/DataLoader.js"));
class BrowserConfig {
    constructor() {
        this.dataLoader = new DataLoader_js_1.default();
    }
    getRandomUserAgent() {
        const userAgents = this.dataLoader.loadUserAgents();
        if (userAgents.length === 0) {
            throw new Error("Список User-Agent пуст.");
        }
        return userAgents[Math.floor(Math.random() * userAgents.length)];
    }
    getRandomLanguage() {
        const languages = this.dataLoader.loadLanguages();
        if (languages.length === 0) {
            throw new Error("Список языков пуст.");
        }
        return languages[Math.floor(Math.random() * languages.length)];
    }
    generateBrowserConfig() {
        try {
            const userAgent = this.getRandomUserAgent();
            const language = this.getRandomLanguage();
            const width = Math.floor(Math.random() * (1920 - 1366)) + 1366;
            const height = Math.floor(Math.random() * (1080 - 768)) + 768;
            return {
                args: [`--window-size=${width},${height}`, `--lang=${language}`],
                defaultViewport: { width, height },
                userAgent,
                lang: language,
            };
        }
        catch (error) {
            console.error(`Ошибка генерации конфигурации: ${error.message}`);
            return null;
        }
    }
}
exports.default = BrowserConfig;
