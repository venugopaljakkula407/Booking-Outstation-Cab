import { test as base } from '@playwright/test';
import { CabsPage }     from '../pages/CabsPage';
import { GiftCardPage } from '../pages/GiftCardPage';
import { HotelsPage }   from '../pages/HotelsPage';

/**
 * Custom fixtures
 * Import `test` from this file in your spec files to get
 * pre-built page objects injected automatically.
 *
 * Usage:
 *   import { test, expect } from '../fixtures';
 */
type PageFixtures = {
  cabsPage: CabsPage;
  giftCardPage: GiftCardPage;
  hotelsPage: HotelsPage;
};

export const test = base.extend<PageFixtures>({ //important
  cabsPage: async ({ page }, use) => {
    await use(new CabsPage(page));
  },
  giftCardPage: async ({ page }, use) => {
    await use(new GiftCardPage(page));
  },
  hotelsPage: async ({ page }, use) => {
    await use(new HotelsPage(page));
  },
});

export { expect } from '@playwright/test';
