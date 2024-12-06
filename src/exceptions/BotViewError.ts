import { BaseCustomError } from "./BaseCustomError";

export class BotViewError extends BaseCustomError {
  constructor(message: string, throwSystemMessage: string = "") {
    super(`\n
  !----------------------------------------------------------------------------------!
  !\t\tИсключение упало в классе BotView.                                   !
  !${message}
  !${throwSystemMessage ? `Системное сообщение: ${throwSystemMessage}` : ""}
  !----------------------------------------------------------------------------------!
      `);
  }
}
