import { BaseCustomError } from "./BaseCustomError";

export class BotControllerError extends BaseCustomError {
  constructor(message: string, throwSystemMessage: string = "") {
    super(`\n
  !----------------------------------------------------------------------------------!
  !\t\tИсключение упало в классе BotController.                             !
  !${message}
  !${throwSystemMessage ? `Системное сообщение: ${throwSystemMessage}` : ""}
  !----------------------------------------------------------------------------------!
      `);
  }
}
