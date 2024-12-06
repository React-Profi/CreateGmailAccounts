"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BotModel_1 = require("./models/BotModel");
const BotView_1 = require("./views/BotView");
const BotController_1 = require("./controllers/BotController");
const BrowserConfig_1 = require("./puppeteer-config/BrowserConfig");
const DataLoader_1 = require("./services/DataLoader");
const BotControllerError_1 = require("./exceptions/BotControllerError");
// Инициализация MVC компонентов
const model = new BotModel_1.BotModel();
const view = new BotView_1.BotView();
const dataLoader = new DataLoader_1.DataLoader();
const browserConfig = new BrowserConfig_1.BrowserConfig(dataLoader);
const controller = new BotController_1.BotController(model, view, browserConfig);
console.log("Запуск");
//throw new BaseCustomError("+");
try {
    throw SyntaxError("11");
}
catch (e) {
    throw new BotControllerError_1.BotControllerError("Не удалось кликнуть по кнопке создания аккаунта");
}
//controller.run();
//controller.runDetectTest();
