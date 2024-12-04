"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BotModel_1 = require("./models/BotModel");
const BotView_1 = require("./views/BotView");
const BotController_1 = require("./controllers/BotController");
// Инициализация MVC компонентов
const model = new BotModel_1.BotModel();
const view = BotView_1.BotView;
const controller = new BotController_1.BotController(model, view);
console.log("Запуск");
//controller.run();
controller.runDetectTest();
