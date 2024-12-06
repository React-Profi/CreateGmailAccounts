import { IBotView } from "../interfaces/IBotView";
export default class BotView implements IBotView {
  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }

  error(message: string): void {
    console.error(`[ERROR]: ${message}`);
  }

  success(message: string): void {
    console.log(`[SUCCESS]: ${message}`);
  }
}
export { BotView };
