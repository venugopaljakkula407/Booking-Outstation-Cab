# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: scenario1.spec.ts >> Scenario 1 - Outstation Cab Booking >> Test Case 3 - Search Filter and Price Display
- Location: tests\scenario1.spec.ts:20:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.check: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input#suv')

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | import { BasePage } from './BasePage';
  3  | 
  4  | export class CabsPage extends BasePage {
  5  |   readonly outstationTab: Locator;
  6  |   readonly fromContainer: Locator;
  7  |   readonly fromInput: Locator;
  8  |   readonly toContainer: Locator;
  9  |   readonly toInput: Locator;
  10 |   readonly pickupCalendar: Locator;
  11 |   readonly datepickerDiv: Locator;
  12 |   readonly hoursList: Locator;
  13 |   readonly minutesList: Locator;
  14 |   readonly doneButton: Locator;
  15 |   readonly searchButton: Locator;
  16 |   readonly suvCheckbox: Locator;
  17 |   readonly cabFare: Locator;
  18 |   readonly autoSuggestion: Locator;
  19 | 
  20 |   constructor(page: Page) {
  21 |     super(page);
  22 | 
  23 |     this.outstationTab      = page.getByText('Outstation').first();
  24 |     this.fromContainer      = page.locator("//div[@id='hrlysrc']");
  25 |     this.fromInput          = page.getByPlaceholder('From').first();
  26 |     this.toContainer        = page.locator("//div[@id='to']").first();
  27 |     this.toInput            = page.getByPlaceholder('To').first();
  28 |     this.pickupCalendar     = page.locator("//div[@id='pickCalender']").first();
  29 |     this.datepickerDiv      = page.locator('#ui-datepicker-div');
  30 |     this.hoursList          = page.locator('#hr > ul > li:nth-child(1)');
  31 |     this.minutesList        = page.locator('#min > ul > li:nth-child(3)');
  32 |     this.doneButton         = page.locator("//div[@onclick='Done(event)']");
  33 |     this.searchButton       = page.locator("//div[@onclick='GetList()']");
  34 |     this.suvCheckbox        = page.locator('input#suv');
  35 |     this.cabFare            = page.locator('//div[@class="cabFare _f25 "]');
  36 |     this.autoSuggestion     = page.locator('//div[@class="auto_sugg_tttl"]').first();
  37 |   }
  38 | 
  39 |   // --- Actions ---
  40 | 
  41 |   async goto(): Promise<void> {
  42 |     await this.navigate('/cabs/');
  43 |     await this.waitForPageLoad();
  44 |   }
  45 | 
  46 |   async selectOutstationTab(): Promise<void> {
  47 |     await this.outstationTab.click();
  48 |   }
  49 | 
  50 |   async enterFromLocation(location: string): Promise<void> {
  51 |     await this.fromContainer.click();
  52 |     await this.fromInput.click();
  53 |     await this.fromInput.type(location);
  54 |     await this.autoSuggestion.click();
  55 |   }
  56 | 
  57 |   async enterToLocation(location: string): Promise<void> {
  58 |     await this.toContainer.click();
  59 |     await this.toInput.click();
  60 |     await this.toInput.type(location);
  61 |     await this.autoSuggestion.click();
  62 |   }
  63 | 
  64 |   async selectDate(day: string): Promise<void> {
  65 |     await this.pickupCalendar.click();
  66 |     await this.datepickerDiv.getByRole('link', { name: day, exact: true }).click();
  67 |     await this.hoursList.click();
  68 |     await this.minutesList.click();
  69 |     await this.doneButton.click();
  70 |   }
  71 | 
  72 |   async clickSearch(): Promise<void> {
  73 |     await this.searchButton.click();
  74 |   }
  75 | 
  76 |   async applySuvFilter(): Promise<void> {
> 77 |     await this.suvCheckbox.check();
     |                            ^ Error: locator.check: Test timeout of 30000ms exceeded.
  78 |   }
  79 | 
  80 |   async getCabFareText(): Promise<string | null> {
  81 |     return this.cabFare.textContent();
  82 |   }
  83 | }
  84 | 
```