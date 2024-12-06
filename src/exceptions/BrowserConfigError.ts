import { BaseCustomError } from "./BaseCustomError";

export class BrowserConfigError extends BaseCustomError {
  constructor(message: string, throwSystemMessage: string = "") {
    super(`\n
  !----------------------------------------------------------------------------------!
  !\t\tИсключение упало в классе BrowserConfig.                             !
  !${message}
  !${throwSystemMessage ? `Системное сообщение: ${throwSystemMessage}` : ""}
  !----------------------------------------------------------------------------------!
      `);
  }
}
