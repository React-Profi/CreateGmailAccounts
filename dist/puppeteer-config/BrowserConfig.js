"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserConfig = void 0;
class BrowserConfig {
    constructor(dataLoader) {
        this.dataLoader = dataLoader;
    }
    generateBrowserConfig() {
        try {
            const userAgent = this.dataLoader.loadUserAgents()[0]; // Пример использования
            const language = this.dataLoader.loadLanguages()[0];
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
exports.BrowserConfig = BrowserConfig;
