import { test, expect } from '../fixtures';
import { cabsData }     from '../test-data/testData';

test.describe('Scenario 1 - Outstation Cab Booking', () => {

  test('Test Case 1 - Page Load and Outstation Tab Selection', async ({ cabsPage }) => {
    await cabsPage.goto();
    await cabsPage.selectOutstationTab();
    await expect(cabsPage.outstationTab).toBeVisible();//to verify tab visisble 
  });

  test('Test Case 2 - From To Location and Date Time Selection', async ({ cabsPage }) => {
    await cabsPage.goto();
    await cabsPage.selectOutstationTab();
    await cabsPage.enterFromLocation(cabsData.fromLocation);
    await cabsPage.enterToLocation(cabsData.toLocation);
    await cabsPage.selectDate(cabsData.pickupDay);
  });

  test('Test Case 3 - Search Filter and Price Display', async ({ cabsPage }) => {
    await cabsPage.goto();
    await cabsPage.selectOutstationTab();
    await cabsPage.enterFromLocation(cabsData.fromLocation);
    await cabsPage.enterToLocation(cabsData.toLocation);
    await cabsPage.selectDate(cabsData.pickupDay);
    await cabsPage.clickSearch();
    await cabsPage.applySuvFilter();

    const price = await cabsPage.getCabFareText();
    console.log('SUV Fare:', price);
    expect(price).not.toBeNull();
  });
});
