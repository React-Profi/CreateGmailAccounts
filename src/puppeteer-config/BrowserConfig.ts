import { IBrowserConfig } from "../interfaces/IBrowserConfig";
import { IDataLoader } from "../interfaces/IDataLoader";
import { BrowserConfigError } from "../exceptions/BrowserConfigError";

export default class BrowserConfig implements IBrowserConfig {
  private dataLoader: IDataLoader;

  constructor(dataLoader: IDataLoader) {
    if (!dataLoader) {
      throw new BrowserConfigError(
        "Отсутствует объект загрузчика данных (IDataLoader)."
      );
    }
    this.dataLoader = dataLoader;
  }

  generateBrowserConfig(): {
    args: string[];
    defaultViewport: { width: number; height: number } | null;
    userAgent: string;
    lang: string;
  } | null {
    try {
      const userAgents = this.dataLoader.loadUserAgents();
      const languages = this.dataLoader.loadLanguages();

      if (!userAgents || userAgents.length === 0) {
        throw new BrowserConfigError("Список User-Agent не загружен или пуст.");
      }

      if (!languages || languages.length === 0) {
        throw new BrowserConfigError("Список языков не загружен или пуст.");
      }
      const userAgent =
        userAgents[Math.floor(Math.random() * userAgents.length)];
      const language = languages[Math.floor(Math.random() * languages.length)];

      const width = Math.floor(Math.random() * (1920 - 1366)) + 1366;
      const height = Math.floor(Math.random() * (1080 - 768)) + 768;

      return {
        args: [`--window-size=${width},${height}`, `--lang=${language}`],
        defaultViewport: { width, height },
        userAgent,
        lang: language,
      };
    } catch (error) {
      throw new BrowserConfigError(
        "Ошибка генерации конфигурации браузера.",
        (error as Error).message
      );
    }
  }
}

export { BrowserConfig };
