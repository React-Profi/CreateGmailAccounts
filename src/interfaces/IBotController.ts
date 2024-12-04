export interface IBotController {
  run(): Promise<void>;
  runDetectTest(): Promise<void>;
  launchBrowser(): Promise<void>;
  navigateToUrl(url: string): Promise<void>;
  clickCreateAccountButton(selector: string): Promise<void>;
  typeText(selector: string, text: string): Promise<void>;
  closeBrowser(): Promise<void>;
}
