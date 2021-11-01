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

}