import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
 
export class HotelsPage extends BasePage {
  readonly roomSelectorButton: Locator; //locaotrs
  readonly adultLabel: Locator;
  readonly adultCount: Locator;
  readonly adultPlusButton: Locator;
  readonly adultMinusButton: Locator;  // ← added for reset step
 
  constructor(page: Page) {
    super(page);
    this.roomSelectorButton = page.locator("i[class='down_arw_htl']");  // ← your selector
    this.adultLabel         = page.locator('#Label7');
    this.adultCount         = page.locator('#Adults_room_1_1');
    this.adultPlusButton    = page.locator('#Adults_room_1_1_plus');
    this.adultMinusButton   = page.locator('#Adults_room_1_1_minus');   // ← your reset button
  }
 
  async goto(): Promise<void> {
    await this.navigate('/hotels/');  // ← your full URL
    await this.page.locator("span[class='meuicowidth hotelmenuico']").click(); // ← your hotel tab click
    await this.waitForPageLoad();
  }
 
  async openRoomSelector(): Promise<void> {
    await this.roomSelectorButton.click();
  }
  async getAllAdultValues(): Promise<string[]> {
    const adultList: string[] = []; //list  empty
 
    // Step 1: Reset to minimum by clicking minus
    await this.adultMinusButton.click(); //value 1
 
    // Step 2: Capture initial value
    const initialValue = await this.adultCount.textContent();//1
    adultList.push(initialValue!);//not null value push
 
    // Step 3: Increment and collect until max
    while (true) {
      const beforeClick = await this.adultCount.textContent();//1
      await this.adultPlusButton.click();//click + button to add 1
      const afterClick = await this.adultCount.textContent();//2
      if (beforeClick === afterClick) break; // reached maximum//1==2
      adultList.push(afterClick!);//2
    }
    return adultList;
  }
}