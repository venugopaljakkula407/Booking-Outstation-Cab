import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CabsPage extends BasePage {
  readonly outstationTab: Locator;
  readonly fromContainer: Locator;
  readonly fromInput: Locator;
  readonly toContainer: Locator;
  readonly toInput: Locator;
  readonly pickupCalendar: Locator;
  readonly datepickerDiv: Locator;
  readonly hoursList: Locator;
  readonly minutesList: Locator;
  readonly doneButton: Locator;
  readonly searchButton: Locator;
  readonly suvCheckbox: Locator;
  readonly cabFare: Locator;
  readonly autoSuggestion: Locator;

  constructor(page: Page) {
    super(page);

    this.outstationTab = page.getByText("Outstation").first();
    this.fromContainer = page.locator("//div[@id='hrlysrc']");
    this.fromInput = page.getByPlaceholder("From").first();
    this.toContainer = page.locator("//div[@id='to']").first();
    this.toInput = page.getByPlaceholder("To").first();
    this.pickupCalendar = page.locator("//div[@id='pickCalender']").first();
    this.datepickerDiv = page.locator("#ui-datepicker-div");
    this.hoursList = page.locator("#hr > ul > li:nth-child(1)");
    this.minutesList = page.locator("#min > ul > li:nth-child(3)");
    this.doneButton = page.locator("//div[@onclick='Done(event)']");
    this.searchButton = page.locator("//div[@onclick='GetList()']");
    this.suvCheckbox = page.locator("input#suv");
    this.cabFare = page.locator('//div[@class="cabFare _f25 "]');
    this.autoSuggestion = page
      .locator('//div[@class="auto_sugg_tttl"]')
      .first();
  }

  // --- Actions ---

  async goto(): Promise<void> {
    await this.navigate("/cabs/");
    await this.waitForPageLoad();
  }

  async selectOutstationTab(): Promise<void> {
    await this.outstationTab.click();
  }

  async enterFromLocation(location: string): Promise<void> {
    await this.fromContainer.click();
    await this.fromInput.click();
    await this.fromInput.type(location);
    await this.autoSuggestion.click();
  }

  async enterToLocation(location: string): Promise<void> {
    await this.toContainer.click();
    await this.toInput.click();
    await this.toInput.pressSequentially(location);
    await this.autoSuggestion.click();
  }

  async selectDate(day: string): Promise<void> {
    await this.pickupCalendar.click();
    await this.datepickerDiv
      .getByRole("link", { name: day, exact: true })
      .click();
    await this.hoursList.click();
    await this.minutesList.click();
    await this.doneButton.click();
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async applySuvFilter(): Promise<void> {
    await this.suvCheckbox.check();
  }

  async getCabFareText(): Promise<string | null> {
    return this.cabFare.textContent();
  }
}
