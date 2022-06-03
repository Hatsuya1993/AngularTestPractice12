import {browser} from "protractor";
import {globalData} from "../helper/global";
import {Helper} from "../helper/helper";
import {HotelModulePage} from "../pageObject/hotelModulePage";
import {Log4jsconfig} from "../config/log4jsconfig";

describe("Hotel Module Page", () => {
  let hotelModulePage : HotelModulePage;
  const log4jsconfig = new Log4jsconfig();
  beforeEach( async () => {
    browser.waitForAngularEnabled(false);
    hotelModulePage = new HotelModulePage();
    log4jsconfig.log().debug("Opening website of " +hotelModulePage.getWebsite());
    await browser.get(hotelModulePage.getWebsite());
    log4jsconfig.log().debug("Website opened " +hotelModulePage.getWebsite());
    await browser.manage().window().maximize();
    await browser.sleep(globalData["WAIT_TIME"]["WAIT_LONG"]);
  });

  afterEach( async () => {
    await browser.restart();
  });

  it("Correct link for hotels module features", async () => {
    log4jsconfig.log().debug("Correct link for hotels module features");
    expect(await browser.getCurrentUrl()).toContain("hotels-module-features");
  });

  it("Header should be displayed", async () => {
    log4jsconfig.log().debug("Header should be displayed");
    expect(await hotelModulePage.getHeader().isDisplayed()).toBeTruthy();
  });

  it("Hotels booking module should be displayed", async () => {
    log4jsconfig.log().debug("Hotels booking module should be displayed");
    expect(await hotelModulePage.getHotelsModule().first().isDisplayed()).toBeTruthy();
  });

  it("Full calendar should be displayed", async () => {
    log4jsconfig.log().debug("Full calendar should be displayed");
    expect(await hotelModulePage.getFullCalendar().first().isDisplayed()).toBeTruthy();
  });

  it("Main features should be displayed", async () => {
    log4jsconfig.log().debug("Main features should be displayed");
    expect(await hotelModulePage.getMainFeatures().isDisplayed()).toBeTruthy();
  });

  it("Hotels module should be displayed", async () => {
    log4jsconfig.log().debug("Hotels module should be displayed");
    expect(await hotelModulePage.getGoogleMaps().last().isDisplayed()).toBeTruthy();
  });

  it("Banner should be displayed", async () => {
    log4jsconfig.log().debug("Banner should be displayed");
    expect(await hotelModulePage.getBanner().isDisplayed()).toBeTruthy();
  });

  it("Banner title should be displayed", async () => {
    log4jsconfig.log().debug("Banner title should be displayed");
    expect(await hotelModulePage.getBannerTitle().isDisplayed()).toBeTruthy();
  });

  it("Banner title should be populated correctly", async () => {
    log4jsconfig.log().debug("Banner title should be populated correctly");
    expect(await hotelModulePage.getBannerTitle().getText()).toContain("Complete Hotel Management ");
  });

  it("Banner description should be displayed", async () => {
    log4jsconfig.log().debug("Banner description should be displayed");
    expect(await hotelModulePage.getBannerDescription().isDisplayed()).toBeTruthy();
  });

  it("View pricing button should be displayed", async () => {
    log4jsconfig.log().debug("View pricing button should be displayed");
    expect(await hotelModulePage.getViewPricing().isDisplayed()).toBeTruthy();
  });

  it("Pricing page should move to the order page", async () => {
    log4jsconfig.log().debug("Pricing page should move to the order page");
    await Helper.clickItem(hotelModulePage.getViewPricing());
    expect(await browser.getCurrentUrl()).toContain("order");
  });

  it("View overview demo button should be displayed", async () => {
    log4jsconfig.log().debug("View overview demo button should be displayed");
    expect(await hotelModulePage.getOverviewButton().isDisplayed()).toBeTruthy();
  });

  it("Clicking the demo button will move to the demo page", async () => {
    log4jsconfig.log().debug("Clicking the demo button will move to the demo page");
    await Helper.clickItem(hotelModulePage.getOverviewButton());
    expect(await browser.getCurrentUrl()).toContain("demo");
  });
});
