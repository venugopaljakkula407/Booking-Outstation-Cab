import { test, expect } from '../fixtures';
import { giftCardData } from '../test-data/testData';
test.describe('Scenario 2 - Gift Card Purchase', () => {

  test('Test Case 1 - Navigation and Gift Card Form Fill', async ({ giftCardPage }) => {
    await giftCardPage.goto();
    await giftCardPage.navigateToGiftCard();
    await giftCardPage.fillAmount(giftCardData.amount);
    await giftCardPage.selectQuantity(giftCardData.quantity);
    await giftCardPage.fillFormDetails(
      giftCardData.sender.name,    giftCardData.receiver.name,
      giftCardData.sender.email,   giftCardData.receiver.email,
      giftCardData.sender.phone,   giftCardData.receiver.retypeEmail,
      giftCardData.receiver.phone
    );
  });
  test('Test Case 2 - Submit and Error Message Validation', async ({ giftCardPage }) => {
    await giftCardPage.goto();
    await giftCardPage.navigateToGiftCard();
    await giftCardPage.fillAmount(giftCardData.amount);
    await giftCardPage.selectQuantity(giftCardData.quantity);
    await giftCardPage.fillFormDetails(
      giftCardData.sender.name,    giftCardData.receiver.name,
      giftCardData.sender.email,   giftCardData.receiver.email,
      giftCardData.sender.phone,   giftCardData.receiver.retypeEmail,
      giftCardData.receiver.phone
    );
    await giftCardPage.acceptTermsAndPay();
    const errorMessage = await giftCardPage.getEmailErrorMessage();
    console.log('Error Message:', errorMessage);
    expect(errorMessage).toContain('Email');
  });
});
