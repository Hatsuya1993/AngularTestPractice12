import {browser} from "protractor";
import {globalData} from "../helper/global";
import {DemoPage} from "../pageObject/demoPage";
import {Helper} from "../helper/helper";

describe("Testing orderPage", () => {
  let demoPage;
  beforeEach( async () => {
    browser.waitForAngularEnabled(false);
    demoPage = new DemoPage();
    await browser.get(demoPage.getWebsite());
    await browser.manage().window().maximize();
    await browser.sleep(globalData["WAIT_TIME"]["WAIT_LONG"]);
  });

  afterEach( async () => {
    await browser.restart();
  });

  it("Correct link for docs php travels", async () => {
    const demoPage = new DemoPage();
    await Helper.clickItem(demoPage.docsOption);
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("phptravels");
  });
});
