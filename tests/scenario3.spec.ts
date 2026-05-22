import { test, expect } from "../fixtures";
test.describe("Scenario 3 - Hotel Room Selector", () => {
  test("Test Case 1 - Navigate, Open Room Selector and Verify Adult Label", async ({
    hotelsPage,
  }) => {
    await hotelsPage.goto();
    await hotelsPage.openRoomSelector();
    await expect(hotelsPage.adultLabel).toBeVisible();
  });

  test("Test Case 2 - Extract All Adult Values by Incrementing", async ({
    hotelsPage,
  }) => {
    await hotelsPage.goto();
    await hotelsPage.openRoomSelector();
    await expect(hotelsPage.adultLabel).toBeVisible();

    const adultList = await hotelsPage.getAllAdultValues();
    console.log("Adult Values:", adultList);

    expect(adultList.length).toBeGreaterThan(0);
    expect(parseInt(adultList[0])).toBeGreaterThanOrEqual(1); // ← string → number for assertion
  });
});
