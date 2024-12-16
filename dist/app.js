"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BotController_1 = require("./controllers/BotController");
const BotModel_1 = require("./models/BotModel");
const BrowserConfig_1 = require("./stealth-browser/puppeteer-config/BrowserConfig");
const DataLoader_1 = require("./stealth-browser/services/DataLoader");
const StealthBrowserManager_1 = require("./stealth-browser/StealthBrowserManager");
const BotView_1 = require("./views/BotView");
// Инициализация MVC компонентов
const model = new BotModel_1.BotModel();
const view = new BotView_1.BotView();
const dataLoader = new DataLoader_1.DataLoader();
const browserConfig = new BrowserConfig_1.BrowserConfig(dataLoader);
const browserManager = new StealthBrowserManager_1.StealthBrowserManager(browserConfig);
const controller = new BotController_1.BotController(model, view, browserManager);
console.log('Запуск');
//controller.run();
controller.runDetectTest();
