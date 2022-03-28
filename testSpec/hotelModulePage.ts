import {browser} from "protractor";
import {globalData} from "../helper/global";
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

  fit("Main features should be displayed", async () => {
    expect(await hotelModulePage.getMainFeatures().isDisplayed()).toBeTruthy();
  });
});
