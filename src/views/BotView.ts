export default class BotView {
  static log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }

  static error(message: string): void {
    console.error(`[ERROR]: ${message}`);
  }

  static success(message: string): void {
    console.log(`[SUCCESS]: ${message}`);
  }
}
export { BotView };
