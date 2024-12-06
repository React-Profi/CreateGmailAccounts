import { BaseCustomError } from "./BaseCustomError";

export class BotModelError extends BaseCustomError {
  constructor(message: string, throwSystemMessage: string = "") {
    super(`\n
  !----------------------------------------------------------------------------------!
  !\t\tИсключение упало в классе BotModel.                                  !
  !${message}
  !${throwSystemMessage ? `Системное сообщение: ${throwSystemMessage}` : ""}
  !----------------------------------------------------------------------------------!
      `);
  }
}
