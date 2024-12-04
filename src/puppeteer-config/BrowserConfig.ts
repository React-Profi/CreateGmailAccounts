import DataLoader from "../services/DataLoader.js";

export default class BrowserConfig {
  private dataLoader: DataLoader;
  constructor() {
    this.dataLoader = new DataLoader();
  }

  getRandomUserAgent(): string {
    const userAgents = this.dataLoader.loadUserAgents();
    if (userAgents.length === 0) {
      throw new Error("Список User-Agent пуст.");
    }
    return userAgents[Math.floor(Math.random() * userAgents.length)];
  }

  getRandomLanguage(): string {
    const languages = this.dataLoader.loadLanguages();
    if (languages.length === 0) {
      throw new Error("Список языков пуст.");
    }
    return languages[Math.floor(Math.random() * languages.length)];
  }

  generateBrowserConfig(): {
    args: string[];
    defaultViewport: { width: number; height: number } | null;
    userAgent: string;
    lang: string;
  } | null {
    try {
      const userAgent = this.getRandomUserAgent();
      const language = this.getRandomLanguage();
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
