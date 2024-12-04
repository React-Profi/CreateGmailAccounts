import { IBrowserConfig } from "../interfaces/IBrowserConfig";
import { IDataLoader } from "../interfaces/IDataLoader";

export default class BrowserConfig implements IBrowserConfig {
  private dataLoader: IDataLoader;

  constructor(dataLoader: IDataLoader) {
    this.dataLoader = dataLoader;
  }

  generateBrowserConfig(): {
    args: string[];
    defaultViewport: { width: number; height: number } | null;
    userAgent: string;
    lang: string;
  } | null {
    try {
      const userAgent = this.dataLoader.loadUserAgents()[0]; // Пример использования
      const language = this.dataLoader.loadLanguages()[0];
      const width = Math.floor(Math.random() * (1920 - 1366)) + 1366;
      const height = Math.floor(Math.random() * (1080 - 768)) + 768;

      return {
        args: [`--window-size=${width},${height}`, `--lang=${language}`],
        defaultViewport: { width, height },
        userAgent,
        lang: language,
      };
    } catch (error) {
      console.error(
        `Ошибка генерации конфигурации: ${(error as Error).message}`
      );
      return null;
    }
  }
}

export { BrowserConfig };
