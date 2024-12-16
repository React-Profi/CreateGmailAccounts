"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataLoader = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const DataLoaderError_1 = require("../exceptions/DataLoaderError");
const configPath = path_1.default.resolve("config/config.json");
const config = JSON.parse(fs_1.default.readFileSync(configPath, "utf-8"));
class DataLoader {
    constructor() {
        this.userAgentsPath = path_1.default.resolve(config.userAgentsPath);
        this.languagesPath = path_1.default.resolve(config.languagesPath);
    }
    loadUserAgents() {
        try {
            const data = fs_1.default.readFileSync(this.userAgentsPath, "utf-8");
            return data
                .split("@")
                .map((line) => line.trim())
                .filter((line) => line !== "");
        }
        catch (error) {
            throw new DataLoaderError_1.DataLoaderError(`Ошибка загрузки файла User-Agent: ${this.userAgentsPath}`, error.message);
        }
    }
    loadLanguages() {
        try {
            const data = fs_1.default.readFileSync(this.languagesPath, "utf-8");
            return data
                .split("@")
                .map((line) => line.trim())
                .filter((line) => line !== "");
        }
        catch (error) {
            throw new DataLoaderError_1.DataLoaderError(`Ошибка загрузки файла языков: ${this.languagesPath}`, error.message);
        }
    }
}
exports.default = DataLoader;
exports.DataLoader = DataLoader;
