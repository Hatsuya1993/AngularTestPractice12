import { browser, ElementFinder, ExpectedConditions, $, WebElementPromise, ElementArrayFinder } from "protractor";
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
            await item.click()
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

    static async scrollPage(amount: string) {
        await browser.executeScript(`window.scrollTo(0,${amount});`)
    }

    static async mouseOverElement(data: ElementFinder) {
        await browser.actions().mouseMove(data).perform()
    }

    static async checkEachValue(data: Array<string>, dataEl : ElementArrayFinder) : Promise<boolean> {
        if(data.length !== await (await dataEl.getText()).length) return false
        for(const i of await dataEl.getText()){
            if(!data.includes(i)) return false
        }
        return true
    }

    static async handleIframe(data: ElementFinder) {
        await browser.switchTo().frame(data.getWebElement())
    }

    static async handleExitIframe() {
        await browser.switchTo().defaultContent()
    }

}