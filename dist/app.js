"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BotModel_1 = require("./models/BotModel");
const BotView_1 = require("./views/BotView");
const BotController_1 = require("./controllers/BotController");
const BrowserConfig_1 = require("./puppeteer-config/BrowserConfig");
const DataLoader_1 = require("./services/DataLoader");
// Инициализация MVC компонентов
const model = new BotModel_1.BotModel();
const view = BotView_1.BotView;
const dataLoader = new DataLoader_1.DataLoader();
const browserConfig = new BrowserConfig_1.BrowserConfig(dataLoader);
const controller = new BotController_1.BotController(model, view, browserConfig);
console.log("Запуск");
//controller.run();
controller.runDetectTest();
