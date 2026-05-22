import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  retries: 1,
  reporter: [["html"], ["allure-playwright"]],

  use: {
    browserName: "chromium",
    channel: "chrome",
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",
    baseURL: "https://www.easemytrip.com",
  },
});
