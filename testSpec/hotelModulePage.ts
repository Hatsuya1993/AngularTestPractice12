import {browser} from "protractor";
import {globalData} from "../helper/global";
import {Helper} from "../helper/helper";
import {HotelModulePage} from "../pageObject/hotelModulePage";

describe("Hotel Module Page", () => {
  const hotelModulePage = new HotelModulePage();

  beforeEach( async () => {
    browser.waitForAngularEnabled(false);
    await browser.get(hotelModulePage.getWebsite());
    await browser.manage().window().maximize();
    await browser.sleep(globalData["WAIT_TIME"]["WAIT_LONG"]);
  });

  afterEach( async () => {
    await browser.close();
  });

  it("Correct link for hotels module features", async () => {
    expect(await browser.getCurrentUrl()).toContain("hotels-module-features");
  });

  it("Header should be displayed", async () => {
    expect(await hotelModulePage.getHeader().isDisplayed()).toBeTruthy();
  });

  it("Hotels booking module should be displayed", async () => {
    expect(await hotelModulePage.getHotelsModule().first().isDisplayed()).toBeTruthy();
  });

  it("Full calendar should be displayed", async () => {
    expect(await hotelModulePage.getFullCalendar().first().isDisplayed()).toBeTruthy();
  });

  it("Main features should be displayed", async () => {
    expect(await hotelModulePage.getMainFeatures().isDisplayed()).toBeTruthy();
  });

  it("Hotels module should be displayed", async () => {
    expect(await hotelModulePage.getGoogleMaps().last().isDisplayed()).toBeTruthy();
  });

  it("Banner should be displayed", async () => {
    expect(await hotelModulePage.getBanner().isDisplayed()).toBeTruthy();
  });

  it("Banner title should be displayed", async () => {
    expect(await hotelModulePage.getBannerTitle().isDisplayed()).toBeTruthy();
  });

  it("Banner title should be populated correctly", async () => {
    expect(await hotelModulePage.getBannerTitle().getText()).toContain("Complete Hotel Management ");
  });

  it("Banner description should be displayed", async () => {
    expect(await hotelModulePage.getBannerDescription().isDisplayed()).toBeTruthy();
  });

  it("View pricing button should be displayed", async () => {
    expect(await hotelModulePage.getViewPricing().isDisplayed()).toBeTruthy();
  });

  it("Pricing page should move to the order page", async () => {
    await Helper.clickItem(hotelModulePage.getViewPricing());
    expect(await browser.getCurrentUrl()).toContain("order");
  });

  it("View overview demo button should be displayed", async () => {
    expect(await hotelModulePage.getOverviewButton().isDisplayed()).toBeTruthy();
  });

  it("Clicking the demo button will move to the demo page", async () => {
    await Helper.clickItem(hotelModulePage.getOverviewButton());
    expect(await browser.getCurrentUrl()).toContain("demo");
  });
});
