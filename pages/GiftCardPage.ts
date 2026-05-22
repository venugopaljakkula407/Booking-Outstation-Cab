import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class GiftCardPage extends BasePage {
  readonly moreMenuIcon: Locator;
  readonly giftCardIcon: Locator;
  readonly newYearGiftCard: Locator;
  readonly amountInput: Locator;
  readonly quantityDropdown: Locator;
  readonly senderNameInput: Locator;
  readonly receiverNameInput: Locator;
  readonly senderEmailInput: Locator;
  readonly receiverEmailInput: Locator;
  readonly senderPhoneInput: Locator;
  readonly retypeEmailInput: Locator;
  readonly receiverPhoneInput: Locator;
  readonly termsCheckbox: Locator;
  readonly payNowButton: Locator;
  readonly emailErrorMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.moreMenuIcon      = page.locator("span[class='meuicowidth moremenuico']");
    this.giftCardIcon      = page.locator("span[class='menuropos giftcard-roico']");
    this.newYearGiftCard   = page.locator("[title='New Year E-GiftCard']");
    this.amountInput       = page.locator("input[ng-model='User.Amount']");
    this.quantityDropdown  = page.locator("select[selected='selected']");
    this.senderNameInput   = page.locator("input[placeholder*='Sender']").first();
    this.receiverNameInput = page.locator("input[placeholder*='Receiver']").first();
    this.senderEmailInput  = page.locator("input[placeholder*='Sender']").nth(1);
    this.receiverEmailInput= page.locator("input[placeholder*='Receiver']").nth(1);
    this.senderPhoneInput  = page.locator("input[placeholder*='Sender']").nth(2);
    this.retypeEmailInput  = page.locator("input[placeholder*='Retype']");
    this.receiverPhoneInput= page.locator("input[placeholder*='Receiver']").nth(2);
    this.termsCheckbox     = page.locator("input[ng-model='User.Term']");
    this.payNowButton      = page.locator("text=Pay Now");
    this.emailErrorMessage = page.locator(".err_msg.ng-binding").filter({ hasText: "Email" }).first();
  }
  // --- Actions ---
  async goto(): Promise<void> {
    await this.navigate('/');
    await this.waitForPageLoad();
  }

  async navigateToGiftCard(): Promise<void> {
    await this.moreMenuIcon.hover();
    await this.giftCardIcon.click();
    await this.newYearGiftCard.click();
  }

  async fillAmount(amount: string): Promise<void> {
    await this.amountInput.fill(amount);
  }

  async selectQuantity(value: string): Promise<void> {
    await this.quantityDropdown.selectOption({ value });
  }
  async fillFormDetails(
    senderName: string, receiverName: string,
    senderEmail: string, receiverEmail: string,
    senderPhone: string, retypeEmail: string, receiverPhone: string
  ): Promise<void> {
    await this.senderNameInput.scrollIntoViewIfNeeded();
    await this.senderNameInput.fill(senderName);
    await this.receiverNameInput.fill(receiverName);
    await this.senderEmailInput.fill(senderEmail);
    await this.receiverEmailInput.fill(receiverEmail);
    await this.senderPhoneInput.scrollIntoViewIfNeeded();
    await this.senderPhoneInput.fill(senderPhone);
    await this.retypeEmailInput.fill(retypeEmail);
    await this.receiverPhoneInput.fill(receiverPhone);
  }

  async acceptTermsAndPay(): Promise<void> {
    await this.termsCheckbox.check();
    await this.payNowButton.click();
    await this.page.waitForTimeout(2000);
  }

  async getEmailErrorMessage(): Promise<string> {
    return this.emailErrorMessage.innerText();
  }
}
