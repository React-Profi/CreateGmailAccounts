import BotModel from "./models/BotModel.js";
import BotView from "./views/BotView.js";
import BotController from "./controllers/BotController.js";

// Инициализация MVC компонентов
const model = new BotModel();
const view = BotView;
const controller = new BotController(model, view);

console.log("Запуск бота");

//controller.run();
controller.runDetectTest();
