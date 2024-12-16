import { BotController } from './controllers/BotController';
import { BotModel } from './models/BotModel';
import { BrowserConfig } from './stealth-browser/puppeteer-config/BrowserConfig';
import { DataLoader } from './stealth-browser/services/DataLoader';
import { StealthBrowserManager } from './stealth-browser/StealthBrowserManager';
import { BotView } from './views/BotView';

// Инициализация MVC компонентов
const model = new BotModel();
const view = new BotView();
const dataLoader = new DataLoader();
const browserConfig = new BrowserConfig(dataLoader);
const browserManager = new StealthBrowserManager(browserConfig);
const controller = new BotController(model, view, browserManager);

console.log('Запуск');

//controller.run();

controller.runDetectTest();
