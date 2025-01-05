"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StealthBrowserManager = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const StealthBrowserManagerError_1 = require("./exceptions/StealthBrowserManagerError");
class StealthBrowserManager {
    constructor(config) {
        this.browser = null;
        this.page = null;
        this.config = config;
    }
    async launch() {
        try {
            // Генерация конфигурации браузера
            const config = this.config.generateBrowserConfig();
            if (!config)
                throw new StealthBrowserManagerError_1.StealthBrowserManagerError('Invalid browser configuration.');
            // Запуск браузера с настройками
            this.browser = await puppeteer_1.default.launch({
                headless: false,
                args: config.args,
                defaultViewport: config.defaultViewport
            });
            // Создание новой страницы
            this.page = await this.browser.newPage();
            // Установка пользовательских параметров страницы
            await this.page.setUserAgent(config.userAgent);
            await this.page.setExtraHTTPHeaders({ 'Accept-Language': config.lang });
            await this.page.emulateTimezone('Europe/Moscow');
            // Интеграция анти-детект
            await this.addAntiDetect(this.page);
            return this.page;
        }
        catch (error) {
            throw new StealthBrowserManagerError_1.StealthBrowserManagerError('Failed to launch browser', error.message);
        }
    }
    async addAntiDetect(page) {
        await page.evaluateOnNewDocument(() => {
            // Убираем свойство `navigator.webdriver`
            Object.defineProperty(navigator, 'webdriver', {
                get: () => false
            });
            // Эмулируем платформу устройства
            Object.defineProperty(navigator, 'platform', {
                get: () => 'Win32'
            });
            // Добавляем фиктивные языки
            Object.defineProperty(navigator, 'languages', {
                get: () => ['en-US', 'ru']
            });
            // Добавляем фиктивные плагины
            Object.defineProperty(navigator, 'plugins', {
                get: () => [1, 2, 3]
            });
            // Подменяем метод navigator.permissions.query
            const originalQuery = window.navigator.permissions.query;
            window.navigator.permissions.query = async (parameters) => {
                // Проверяем, запрашиваются ли уведомления
                if (parameters.name === 'notifications') {
                    // Возвращаем объект, совместимый с PermissionStatus
                    return {
                        state: 'granted',
                        name: 'notifications',
                        onchange: null,
                        addEventListener: () => { },
                        removeEventListener: () => { },
                        dispatchEvent: () => false
                    };
                }
                // Для остальных типов разрешений вызываем оригинальный метод
                return originalQuery(parameters);
            };
            // Удаляем флаги автоматизации
            Object.defineProperty(navigator, 'hardwareConcurrency', {
                get: () => 4 // Количество потоков процессора
            });
            Object.defineProperty(navigator, 'deviceMemory', {
                get: () => 8 // Память устройства в ГБ
            });
        });
    }
    async close() {
        // Закрытие браузера
        if (this.browser)
            await this.browser.close();
    }
    getPage() {
        // Получение текущей страницы
        if (!this.page)
            throw new StealthBrowserManagerError_1.StealthBrowserManagerError('Page not initialized.');
        return this.page;
    }
}
exports.StealthBrowserManager = StealthBrowserManager;
