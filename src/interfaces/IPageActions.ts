export interface IPageActions {
  /**
   * Переход на указанный URL.
   * @param url URL-адрес для перехода.
   * @returns {Promise<void>}
   * @throws Ошибка при переходе на страницу.
   */
  navigate(url: string): Promise<void>;

  /**
   * Выполняет клик по указанному селектору.
   * @param selector CSS-селектор элемента.
   * @returns {Promise<void>}
   * @throws Ошибка при клике по элементу.
   */
  click(selector: string): Promise<void>;

  /**
   * Вводит текст в элемент, найденный по селектору.
   * @param selector CSS-селектор текстового поля.
   * @param text Текст для ввода.
   * @returns {Promise<void>}
   * @throws Ошибка при вводе текста.
   */
  type(selector: string, text: string): Promise<void>;
}
