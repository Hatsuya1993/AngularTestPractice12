import {browser} from "protractor";
import {globalData} from "../helper/global";
import {DemoPage} from "../pageObject/demoPage";
import {Helper} from "../helper/helper";
import {Log4jsconfig} from "../config/log4jsconfig";

describe("Testing orderPage", () => {
  let demoPage : DemoPage;
  const log4jsconfig = new Log4jsconfig();
  beforeEach( async () => {
    browser.waitForAngularEnabled(false);
    demoPage = new DemoPage();
    log4jsconfig.log().debug("Opening website of " +demoPage.getWebsite());
    await browser.get(demoPage.getWebsite());
    log4jsconfig.log().debug("Website opened " +demoPage.getWebsite());
    await browser.manage().window().maximize();
    await browser.sleep(globalData["WAIT_TIME"]["WAIT_LONG"]);
  });

  afterEach( async () => {
    await browser.restart();
  });

  it("Correct link for docs php travels", async () => {
    log4jsconfig.log().debug("Correct link for docs php travel");
    const demoPage = new DemoPage();
    await Helper.clickItem(demoPage.getDocsOption());
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("phptravels");
  });
});
