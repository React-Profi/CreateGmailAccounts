import { BotModel } from "./models/BotModel";
import { BotView } from "./views/BotView";
import { BotController } from "./controllers/BotController";

// Инициализация MVC компонентов
const model = new BotModel();
const view = BotView;
const controller = new BotController(model, view);

console.log("Запуск");

//controller.run();
controller.runDetectTest();
