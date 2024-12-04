import puppeteer from "puppeteer-extra";
import type { Browser, Page } from "puppeteer";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import BrowserConfig from "../puppeteer-config/BrowserConfig";
import { BotModel } from "../models/BotModel";
import { BotView } from "../views/BotView.js";

puppeteer.use(StealthPlugin());

export default class BotController {
  private model: BotModel;
  private view: typeof BotView;
  private browserConfig: BrowserConfig;
  private browser: Browser | null = null;
  private page: Page | null = null;

  constructor(model: BotModel, view: typeof BotView) {
    this.model = model;
    this.view = view;
    this.browserConfig = new BrowserConfig();
  }

  // Запуск браузера
  async launchBrowser(): Promise<void> {
    try {
      const config = this.browserConfig.generateBrowserConfig();

      if (!config) throw new Error("Failed to generate browser config");

      this.browser = await puppeteer.launch({
        headless: false,
        args: config.args,
        defaultViewport: config.defaultViewport,
      });
      this.page = await this.browser.newPage();

      // Установка User-Agent
      await this.page.setUserAgent(config.userAgent);
      console.log(`User-Agent: ${config.userAgent}`);

      await this.page.setExtraHTTPHeaders({
        "Accept-Language": config.lang,
      });
      console.log(config.lang);
      // Эмуляция языка на уровне браузера
      await this.page.evaluateOnNewDocument((lang) => {
        lang = lang.replace(/^"(.*)"$/, "$1");
        Object.defineProperty(navigator, "languages", {
          get: () => [lang],
        });
      }, config.lang);

      // Эмуляция таймзоны
      await this.page.emulateTimezone("Europe/Moscow");
    } catch (error) {
      this.view.error(`Ошибка запуска браузера: ${(error as Error).message}`);
      throw error;
    }
  }

  // Навигация на страницу
  async navigateToUrl(url: string): Promise<void> {
    if (!this.page) throw new Error("Page is not initialized");
    this.view.log(`Navigating to: ${url}`);
    await this.page.goto(url, { waitUntil: "networkidle2" });
    this.view.success(`Successfully navigated to the page.`);
  }

  // Клик по кнопке
  async clickCreateAccountButton(selector: string): Promise<void> {
    if (!this.page) throw new Error("Page is not initialized");
    await this.page.waitForSelector(selector, { timeout: 5000 });
    await this.page.click(selector);
    await this.delay(50 + Math.random() * 100);
    const newUrl = this.page.url();
    this.view.log(`Navigated to: ${newUrl}`);
  }

  // Ввод текста
  async typeText(selector: string, text: string): Promise<void> {
    if (!this.page) throw new Error("Page is not initialized");
    await this.page.waitForSelector(selector);
    for (const char of text) {
      await this.page.type(selector, char);
      await this.delay(50 + Math.random() * 100);
    }
  }

  // Закрытие браузера
  async closeBrowser(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
    }
  }

  // Основной запуск
  async run() {
    const url = this.model.getRegistrationUrl();
    const buttonSelector = this.model.getCreateAccountButtonSelector();

    try {
      await this.launchBrowser();
      await this.navigateToUrl(url);
      await this.clickCreateAccountButton(buttonSelector);
    } catch (error) {
      this.view.error(`An error occurred: ${(error as Error).message}`);
    } finally {
      await this.closeBrowser();
    }
  }

  // Тестирование с бот-сайтом
  async runDetectTest() {
    const url = "https://bot.sannysoft.com/";

    try {
      await this.launchBrowser();
      await this.navigateToUrl(url);
    } catch (error) {
      this.view.error(`An error occurred: ${(error as Error).message}`);
    }
  }

  // Задержка (в миллисекундах)
  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export { BotController };
