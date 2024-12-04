"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotView = void 0;
class BotView {
    static log(message) {
        console.log(`[LOG]: ${message}`);
    }
    static error(message) {
        console.error(`[ERROR]: ${message}`);
    }
    static success(message) {
        console.log(`[SUCCESS]: ${message}`);
    }
}
exports.default = BotView;
exports.BotView = BotView;
