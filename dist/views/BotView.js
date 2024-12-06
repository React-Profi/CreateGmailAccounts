"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotView = void 0;
class BotView {
    log(message) {
        console.log(`[LOG]: ${message}`);
    }
    error(message) {
        console.error(`[ERROR]: ${message}`);
    }
    success(message) {
        console.log(`[SUCCESS]: ${message}`);
    }
}
exports.default = BotView;
exports.BotView = BotView;
