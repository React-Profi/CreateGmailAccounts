"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BotController_1 = require("./controllers/BotController");
const GmailRegistrationModel_1 = require("./models/GmailRegistrationModel");
const BrowserConfig_1 = require("./stealth-browser/browser-config/BrowserConfig");
const DataLoader_1 = require("./stealth-browser/services/DataLoader");
const StealthBrowserManager_1 = require("./stealth-browser/StealthBrowserManager");
const GmailRegistrationView_1 = require("./views/GmailRegistrationView");
// Инициализация MVC компонентов
const model = new GmailRegistrationModel_1.GmailRegistrationModel();
const view = new GmailRegistrationView_1.GmailRegistrationView();
const dataLoader = new DataLoader_1.DataLoader();
const browserConfig = new BrowserConfig_1.BrowserConfig(dataLoader);
const browserManager = new StealthBrowserManager_1.StealthBrowserManager(browserConfig);
const controller = new BotController_1.GmailRegistrationController(model, view, browserManager);
console.log('Запуск');
controller.run();
