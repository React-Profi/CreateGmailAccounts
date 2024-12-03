export default class BotView {
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
