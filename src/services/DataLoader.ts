import fs from "fs";
import path from "path";
const configPath = path.resolve("config/config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
/*
interface Config {
  userAgentsPath: string;
  languagesPath: string;
}*/

export default class DataLoader {
  private userAgentsPath: string;
  private languagesPath: string;

  constructor() {
    this.userAgentsPath = path.resolve(config.userAgentsPath);
    this.languagesPath = path.resolve(config.languagesPath);
  }

  loadUserAgents(): string[] {
    try {
      const data = fs.readFileSync(this.userAgentsPath, "utf-8");
      const userAgents = data
        .split("@")
        .map((line) => line.trim())
        .filter((line) => line !== "");
      return userAgents;
    } catch (error) {
      console.error(`Ошибка загрузки User-Agent: ${(error as Error).message}`);
      return [];
    }
  }

  loadLanguages(): string[] {
    try {
      const data = fs.readFileSync(this.languagesPath, "utf-8");
      const languages = data
        .split("@")
        .map((line) => line.trim())
        .filter((line) => line !== "");
      return languages;
    } catch (error) {
      console.error(`Ошибка загрузки языков: ${(error as Error).message}`);
      return [];
    }
  }
}
