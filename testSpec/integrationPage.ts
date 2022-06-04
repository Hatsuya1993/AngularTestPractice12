import {browser} from "protractor";
import {globalData} from "../helper/global";
import {Helper} from "../helper/helper";
import {Log4jsconfig} from "../config/log4jsconfig";
import {IntegrationPage} from "../pageObject/integrationPage";

describe("Testing orderPage", () => {
  let integrationPage : IntegrationPage;
  const log4jsconfig = new Log4jsconfig();

  beforeEach( async () => {
    browser.waitForAngularEnabled(false);
    integrationPage = new IntegrationPage();
    log4jsconfig.log().debug("Opening website of " +integrationPage.getWebsite());
    await browser.get(integrationPage.getWebsite());
    log4jsconfig.log().debug("Website opened " +integrationPage.getWebsite());
    await browser.manage().window().maximize();
    await browser.sleep(globalData["WAIT_TIME"]["WAIT_LONG"]);
  });

  afterEach( async () => {
    await browser.restart();
  });

  it("Should check the default content is displayed", async () => {
    log4jsconfig.log().debug("Should check the default content is displayed");
    expect(await integrationPage.getPageContent().isDisplayed()).toBeTruthy();
  });

  it("Should open another tab to the correct website for travelport", async () => {
    log4jsconfig.log().debug("Should open another tab to the correct website for travelport");
    await Helper.scrollAndCheck(integrationPage.getTravelPort());
    await Helper.clickItem(integrationPage.getTravelPort());
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });

  it("Should open to the correct website for travelport", async () => {
    log4jsconfig.log().debug("Should open to the correct website for travelport");
    await Helper.scrollAndCheck(integrationPage.getTravelPort());
    await Helper.clickItem(integrationPage.getTravelPort());
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("travelport");
  });

  it("Should open another tab to the correct website for Amadeus", async () => {
    log4jsconfig.log().debug("Should open another tab to the correct website for Amadeus");
    await Helper.scrollAndCheck(integrationPage.getAmadeus());
    await Helper.clickItem(integrationPage.getAmadeus());
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });

  it("Should open to the correct website for Amadeus", async () => {
    log4jsconfig.log().debug("Should open to the correct website for Amadeus");
    await Helper.scrollAndCheck(integrationPage.getAmadeus());
    await Helper.clickItem(integrationPage.getAmadeus());
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("nevel");
  });
});
