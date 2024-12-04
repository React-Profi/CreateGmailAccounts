"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const configPath = path_1.default.resolve("config/config.json");
const config = JSON.parse(fs_1.default.readFileSync(configPath, "utf-8"));
/*
interface Config {
  userAgentsPath: string;
  languagesPath: string;
}*/
class DataLoader {
    constructor() {
        this.userAgentsPath = path_1.default.resolve(config.userAgentsPath);
        this.languagesPath = path_1.default.resolve(config.languagesPath);
    }
    loadUserAgents() {
        try {
            const data = fs_1.default.readFileSync(this.userAgentsPath, "utf-8");
            const userAgents = data
                .split("@")
                .map((line) => line.trim())
                .filter((line) => line !== "");
            return userAgents;
        }
        catch (error) {
            console.error(`Ошибка загрузки User-Agent: ${error.message}`);
            return [];
        }
    }
    loadLanguages() {
        try {
            const data = fs_1.default.readFileSync(this.languagesPath, "utf-8");
            const languages = data
                .split("@")
                .map((line) => line.trim())
                .filter((line) => line !== "");
            return languages;
        }
        catch (error) {
            console.error(`Ошибка загрузки языков: ${error.message}`);
            return [];
        }
    }
}
exports.default = DataLoader;
