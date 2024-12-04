import { BotModel } from "./models/BotModel";
import { BotView } from "./views/BotView";
import { BotController } from "./controllers/BotController";
import { BrowserConfig } from "./puppeteer-config/BrowserConfig";
import { DataLoader } from "./services/DataLoader";

// Инициализация MVC компонентов
const model = new BotModel();
const view = BotView;
const dataLoader = new DataLoader();
const browserConfig = new BrowserConfig(dataLoader);
const controller = new BotController(model, view, browserConfig);

console.log("Запуск");

//controller.run();
controller.runDetectTest();
