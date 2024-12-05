import { BaseCustomError } from "./BaseCustomError";

export class BrowserConfigError extends BaseCustomError {
  constructor(message: string) {
    super(message, "BrowserConfigError");
  }
}

/*
Используется для обработки ошибок, возникающих при генерации или использовании конфигурации браузера в BrowserConfig.

Связан с ошибками, возникающими из-за некорректных параметров или настроек конфигурации браузера.

Помогает изолировать ошибки на уровне конфигурации, облегчая отладку и обработку таких проблем.
*/
