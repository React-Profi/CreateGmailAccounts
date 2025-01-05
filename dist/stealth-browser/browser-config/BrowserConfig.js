"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserConfig = void 0;
const BrowserConfigError_1 = require("../exceptions/BrowserConfigError");
class BrowserConfig {
    constructor(dataLoader) {
        if (!dataLoader) {
            throw new BrowserConfigError_1.BrowserConfigError('Отсутствует объект загрузчика данных (IDataLoader).');
        }
        this.dataLoader = dataLoader;
    }
    generateBrowserConfig() {
        try {
            const userAgents = this.dataLoader.loadUserAgents();
            const languages = this.dataLoader.loadLanguages();
            if (!userAgents || userAgents.length === 0) {
                throw new BrowserConfigError_1.BrowserConfigError('Список User-Agent не загружен или пуст.');
            }
            if (!languages || languages.length === 0) {
                throw new BrowserConfigError_1.BrowserConfigError('Список языков не загружен или пуст.');
            }
            const userAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
            const language = languages[Math.floor(Math.random() * languages.length)];
            const width = Math.floor(Math.random() * (1920 - 1366)) + 1366;
            const height = Math.floor(Math.random() * (1080 - 768)) + 768;
            return {
                args: [`--window-size=${width},${height}`, `--lang=${language}`],
                defaultViewport: { width, height },
                userAgent,
                lang: language
            };
        }
        catch (error) {
            throw new BrowserConfigError_1.BrowserConfigError('Ошибка генерации конфигурации браузера.', error.message);
        }
    }
}
exports.BrowserConfig = BrowserConfig;
