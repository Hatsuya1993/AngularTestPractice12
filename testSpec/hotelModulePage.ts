import {browser} from "protractor";
import {globalData} from "../helper/global";
import {HotelModulePage} from "../pageObject/hotelModulePage";

describe("Hotel Module Page", () => {
  const hotelModulePage = new HotelModulePage();

  beforeEach( async () => {
    browser.waitForAngularEnabled(false);
    await browser.get(hotelModulePage.website);
    await browser.manage().window().maximize();
    await browser.sleep(globalData["WAIT_TIME"]["WAIT_LONG"]);
  });

  afterEach( async () => {
    await browser.close();
  });

  it("Correct link for hotels module features", async () => {
    expect(await browser.getCurrentUrl()).toContain("hotels-module-features");
  });

  fit("Header should be displayed", async () => {
    expect(await hotelModulePage.header.isDisplayed()).toBeTruthy();
  });
});
