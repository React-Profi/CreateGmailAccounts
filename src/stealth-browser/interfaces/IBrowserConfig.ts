export interface IBrowserConfig {
  generateBrowserConfig(): {
    args: string[];
    defaultViewport: { width: number; height: number } | null;
    userAgent: string;
    lang: string;
  } | null;
}
