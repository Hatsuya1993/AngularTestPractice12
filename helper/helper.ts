import {browser, ElementFinder, ExpectedConditions, ElementArrayFinder} from "protractor";
import {globalData} from "./global";
import {Log4jsconfig} from "../config/log4jsconfig";

const EC = ExpectedConditions;

const log4jsconfig = new Log4jsconfig();

export class Helper {
  static async displayed(item : ElementFinder) : Promise<boolean> {
    await browser.sleep(globalData["WAIT_TIME"]["WAIT_SHORT"]);
    await browser.wait(EC.presenceOf(item), globalData["WAIT_TIME"]["WAIT_LONGER"], "Presence false");
    await browser.sleep(globalData["WAIT_TIME"]["WAIT_SHORT"]);
    await browser.wait(EC.visibilityOf(item), globalData["WAIT_TIME"]["WAIT_LONGER"], "Visibility false");
    await browser.sleep(globalData["WAIT_TIME"]["WAIT_SHORT"]);
    return true;
  }

  static async clickItem(item: ElementFinder) {
    await browser.sleep(globalData["WAIT_TIME"]["WAIT_SHORT"]);
    if (await this.displayed(item)) {
      await item.click();
      log4jsconfig.log().debug(`Click element of ${item}`);
      await browser.sleep(globalData["WAIT_TIME"]["WAIT_SHORT"]);
    }
  }

  static async moveClickItem(item: ElementFinder) {
    await browser.sleep(globalData["WAIT_TIME"]["WAIT_SHORT"]);
    await browser.actions().mouseMove(item).click().perform();
  }

  static async handleTabs(tabs: number) {
    await browser.sleep(globalData["WAIT_TIME"]["WAIT_SHORT"]);
    const windowHandles = await browser.getAllWindowHandles();
    log4jsconfig.log().debug(`Get all tabs of ${windowHandles}`);
    await browser.switchTo().window(windowHandles[tabs]);
    log4jsconfig.log().debug(`Switch to ${windowHandles[tabs]}`);
    await browser.sleep(globalData["WAIT_TIME"]["WAIT_SHORT"]);
  }

  static async waitForPage(page: string) {
    await browser.wait(EC.urlContains(page), globalData["WAIT_TIME"]["WAIT_LONGER"]);
  }

  static async scrollPage(amount: string) {
    await browser.executeScript(`window.scrollTo(0,${amount});`);
  }

  static async mouseOverElement(data: ElementFinder) {
    await browser.actions().mouseMove(data).perform();
  }

  static async checkEachValue(data: Array<string>, dataEl : ElementArrayFinder) : Promise<boolean> {
    if (data.length !== await (await dataEl.getText()).length) return false;
    for (const i of await dataEl.getText()) {
      if (!data.includes(i)) return false;
    }
    return true;
  }

  static async handleIframe(data: ElementFinder) {
    await browser.switchTo().frame(data.getWebElement());
  }

  static async handleExitIframe() {
    await browser.switchTo().defaultContent();
  }

  static async checkString(given: ElementFinder, actual: string) : Promise<boolean> {
    log4jsconfig.log().debug(`Given ${await given.getText()} and actual of ${actual}`);
    if (await given.getText() === actual) {
      return true;
    } else {
      return false;
    }
  }
}
