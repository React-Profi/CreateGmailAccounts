import puppeteer from "puppeteer-extra";
import type { Browser, Page } from "puppeteer";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { IBotModel } from "../interfaces/IBotModel";
import { IBotView } from "../interfaces/IBotView";
import { IBrowserConfig } from "../interfaces/IBrowserConfig";

import { BotControllerError } from "../exceptions/BotControllerError";

puppeteer.use(StealthPlugin());

export default class BotController {
  private model: IBotModel;
  private view: IBotView;
  private browserConfig: IBrowserConfig;
  private browser: Browser | null = null;
  private page: Page | null = null;

  constructor(model: IBotModel, view: IBotView, browserConfig: IBrowserConfig) {
    this.model = model;
    this.view = view;
    this.browserConfig = browserConfig;
  }

  // Запуск браузера
  async launchBrowser(): Promise<void> {
    try {
      const config = this.browserConfig.generateBrowserConfig();
      if (!config) {
        throw new BotControllerError(
          "Не удалось сгенерировать конфигурацию браузера"
        );
      }

      this.browser = await puppeteer.launch({
        headless: false,
        args: config.args,
        defaultViewport: config.defaultViewport,
      });

      this.page = await this.browser.newPage();
      await this.page.setUserAgent(config.userAgent);
      console.log(`User-Agent: ${config.userAgent}`);

      await this.page.setExtraHTTPHeaders({
        "Accept-Language": config.lang,
      });

      await this.page.evaluateOnNewDocument((lang) => {
        Object.defineProperty(navigator, "language", { value: "ru-RU" });
        lang = lang.replace(/^"(.*)"$/, "$1");
        Object.defineProperty(navigator, "languages", {
          get: () => [lang],
        });
      }, config.lang);

      await this.page.emulateTimezone("Europe/Moscow");
    } catch (error) {
      throw new BotControllerError(
        "Ошибка при запуске браузера",
        (error as Error).message
      );
    }
  }

  // Навигация на страницу
  async navigateToUrl(url: string): Promise<void> {
    try {
      if (!this.page)
        throw new BotControllerError("Page не инициализирована для навигации");
      this.view.log(`Навигация на: ${url}`);
      await this.page.goto(url, { waitUntil: "networkidle2" });
      this.view.success(`Успешно перешли на страницу.`);
    } catch (error) {
      throw new BotControllerError(
        "Не удалось перейти по URL",
        (error as Error).message
      );
    }
  }

  // Клик по кнопке
  async clickCreateAccountButton(selector: string): Promise<void> {
    try {
      if (!this.page)
        throw new BotControllerError("Page не инициализирована для клика");
      await this.page.waitForSelector(selector, { timeout: 5000 });
      await this.page.click(selector);
      await this.delay(50 + Math.random() * 100);
      const newUrl = this.page.url();
      this.view.log(`Перешли на: ${newUrl}`);
    } catch (error) {
      throw new BotControllerError(
        "Не удалось кликнуть по кнопке создания аккаунта",
        (error as Error).message
      );
    }
  }

  // Ввод текста
  async typeText(selector: string, text: string): Promise<void> {
    try {
      if (!this.page)
        throw new BotControllerError(
          "Page не инициализирована для ввода текста"
        );
      await this.page.waitForSelector(selector);
      for (const char of text) {
        await this.page.type(selector, char);
        await this.delay(50 + Math.random() * 100);
      }
    } catch (error) {
      throw new BotControllerError(
        `Не удалось ввести текст в селектор: ${selector}`,
        (error as Error).message
      );
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
      this.view.error(`Произошла ошибка: ${(error as Error).message}`);
      throw new BotControllerError(
        `Произошла ошибка`,
        (error as Error).message
      );
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
      this.view.error(`Произошла ошибка: ${(error as Error).message}`);
      throw new BotControllerError(
        `Произошла ошибка`,
        (error as Error).message
      );
    }
  }

  // Задержка (в миллисекундах)
  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export { BotController };
