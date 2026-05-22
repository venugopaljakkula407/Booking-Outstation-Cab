# Playwright POM Framework — EaseMyTrip

A structured Playwright + TypeScript test framework using the **Page Object Model (POM)** pattern, custom fixtures, and centralised test data.

---

## Project Structure

```
playwright-pom-framework/
│
├── pages/                  # Page Object classes (POM layer)
│   ├── BasePage.ts         # Base class: navigate, waitForLoad, getTitle
│   ├── CabsPage.ts         # Outstation cab booking page
│   ├── GiftCardPage.ts     # Gift card purchase page
│   └── HotelsPage.ts       # Hotels room & guest selector page
│
├── tests/                  # Spec files (test layer)
│   ├── scenario1.spec.ts   # Cabs: tab selection, location, date, search
│   ├── scenario2.spec.ts   # Gift card: form fill, error validation
│   └── scenario3.spec.ts   # Hotels: room selector, adult increment
│
├── fixtures/
│   └── index.ts            # Custom fixtures — injects page objects into tests
│
├── test-data/
│   └── testData.ts         # Centralised test data (locations, form values)
│
├── playwright.config.ts    # Playwright configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

---

## Architecture — How POM Works Here

```
Test Spec
   │  uses
   ▼
Custom Fixture (fixtures/index.ts)
   │  creates
   ▼
Page Object (e.g. CabsPage)
   │  extends
   ▼
BasePage
   │  wraps
   ▼
Playwright `page` API
```

Each **Page Object**:
- Declares all locators as `readonly` properties in the constructor
- Exposes **action methods** (`enterFromLocation`, `selectDate`, etc.) — tests never touch raw locators
- Extends `BasePage` for shared helpers

**Fixtures** (`fixtures/index.ts`) wire up page objects so tests receive them directly:
```ts
test('my test', async ({ cabsPage }) => {
  await cabsPage.goto();
  await cabsPage.selectOutstationTab();
});
```

**Test data** lives in `test-data/testData.ts` — update once, affects all tests.

---

## Setup

```bash
npm install
npx playwright install
```

---

## Running Tests

```bash
# All tests
npm test

# Headed mode (see the browser)
npm run test:headed

# Individual scenarios
npm run test:scenario1
npm run test:scenario2
npm run test:scenario3

# HTML report
npm run report
```

---

## Key Improvements Over Original

| Original | This Framework |
|---|---|
| Selectors duplicated across test cases | Selectors defined once in Page Object |
| All steps inline in each test | Action methods in page objects (reusable) |
| Hard-coded test data in tests | Centralised `testData.ts` |
| No shared setup mechanism | Custom Playwright fixtures |
| Single flat `tests/` folder | Layered: `pages/`, `tests/`, `fixtures/`, `test-data/` |
| No base class | `BasePage` with shared navigation helpers |
| Minimal config | Enhanced config with screenshots, video, tracing |
