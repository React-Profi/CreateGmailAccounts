import { GmailRegistrationController } from './controllers/BotController';
import { IGmailRegistrationController } from './interfaces/IGmailRegistrationController';
import { IGmailRegistrationModel } from './interfaces/IGmailRegistrationModel';
import { IGmailRegistrationView } from './interfaces/IGmailRegistrationView';
import { GmailRegistrationModel } from './models/GmailRegistrationModel';
import { BrowserConfig } from './stealth-browser/browser-config/BrowserConfig';
import { IBrowserConfig } from './stealth-browser/interfaces/IBrowserConfig';
import { IDataLoader } from './stealth-browser/interfaces/IDataLoader';
import { IStealthBrowserManager } from './stealth-browser/interfaces/IStealthBrowserManager'
import { DataLoader } from './stealth-browser/services/DataLoader';
import { StealthBrowserManager } from './stealth-browser/StealthBrowserManager';
import { GmailRegistrationView } from './views/GmailRegistrationView';

// Инициализация MVC компонентов
const model: IGmailRegistrationModel = new GmailRegistrationModel();
const view: IGmailRegistrationView = new GmailRegistrationView();
const dataLoader: IDataLoader = new DataLoader();
const browserConfig: IBrowserConfig = new BrowserConfig(dataLoader);
const browserManager:IStealthBrowserManager = new StealthBrowserManager(
	browserConfig
);

const controller: IGmailRegistrationController =
	new GmailRegistrationController(model, view, browserManager);

console.log('Запуск');

controller.run();
