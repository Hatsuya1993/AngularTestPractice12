import {browser} from "protractor";
import {globalData} from "../helper/global";
import {PricingPage} from "../pageObject/pricingPage";

describe("Testing orderPage", () => {
  const pricingPage = new PricingPage();

  beforeEach( async () => {
    browser.waitForAngularEnabled(false);
    await browser.get(pricingPage.website);
    await browser.manage().window().maximize();
    await browser.sleep(globalData["WAIT_TIME"]["WAIT_LONG"]);
  });

  afterEach( async () => {
    await browser.close();
  });

  it("Correct link for docs php travels", async () => {
    expect(await browser.getCurrentUrl()).toContain("phptravels.com/order");
  });
});
