import { browser, ElementFinder, ExpectedConditions } from "protractor";
import { globalData } from "./global";

let EC = ExpectedConditions

export class Helper {

    static async displayed(item : ElementFinder) : Promise<boolean> {
        await browser.sleep(globalData["WAIT_TIME"]["WAIT_SHORT"])
        await browser.wait(EC.presenceOf(item), globalData["WAIT_TIME"]["WAIT_LONG"])
        await browser.sleep(globalData["WAIT_TIME"]["WAIT_SHORT"])
        await browser.wait(EC.visibilityOf(item), globalData["WAIT_TIME"]["WAIT_LONG"])
        await browser.sleep(globalData["WAIT_TIME"]["WAIT_SHORT"])
        return true
    }

    static async clickItem(item: ElementFinder) {
        await browser.sleep(globalData["WAIT_TIME"]["WAIT_SHORT"])
        if(await this.displayed(item)){
            item.click()
            await browser.sleep(globalData["WAIT_TIME"]["WAIT_SHORT"])
        }
    }

    static async handleTabs(tabs: number) {
        await browser.sleep(globalData["WAIT_TIME"]["WAIT_SHORT"])
        let windowHandles = await browser.getAllWindowHandles();
        await browser.switchTo().window(windowHandles[tabs])
        await browser.sleep(globalData["WAIT_TIME"]["WAIT_SHORT"])
    }

    static async waitForPage(page: string) {
        await browser.wait(EC.urlContains(page), globalData["WAIT_TIME"]["WAIT_LONGER"])
    }

}