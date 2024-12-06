import { BotModel } from "./models/BotModel";
import { BotView } from "./views/BotView";
import { BotController } from "./controllers/BotController";
import { BrowserConfig } from "./puppeteer-config/BrowserConfig";
import { DataLoader } from "./services/DataLoader";

import { BaseCustomError } from "./exceptions/BaseCustomError";
import { BotControllerError } from "./exceptions/BotControllerError";
// Инициализация MVC компонентов
const model = new BotModel();
const view = new BotView();
const dataLoader = new DataLoader();
const browserConfig = new BrowserConfig(dataLoader);
const controller = new BotController(model, view, browserConfig);

console.log("Запуск");
//throw new BaseCustomError("+");
/*
try {
  throw SyntaxError("11");
} catch (e) {
  throw new BotControllerError(
    "Не удалось кликнуть по кнопке создания аккаунта"
  );
}*/
//controller.run();
//controller.runDetectTest();
