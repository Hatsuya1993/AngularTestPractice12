import {browser} from "protractor";
import {globalData} from "../helper/global";
import {DemoPage} from "../pageObject/demoPage";
import {Helper} from "../helper/helper";
import {OrderPage} from "../pageObject/orderPage";
import {ConfirmOrderPage} from "../pageObject/confirmOrder";


describe("Testing orderPage", () => {
  const demoPage = new DemoPage();
  const orderPage = new OrderPage();
  const confirmOrderPage = new ConfirmOrderPage();

  beforeEach( async () => {
    browser.waitForAngularEnabled(false);
    await browser.get(demoPage.website);
    await browser.manage().window().maximize();
    await browser.sleep(globalData["WAIT_TIME"]["WAIT_LONG"]);
  });

  afterEach( async () => {
    await browser.close();
  });

  it("Should disable the buy now button by default", async () => {
    const demoPage = new DemoPage();
    await Helper.clickItem(demoPage.pricingOption);
    expect(await orderPage.buyNowButton.isEnabled()).toBe(false);
  });

  it("Should able the buy now button after selecting an option", async () => {
    const demoPage = new DemoPage();
    await Helper.clickItem(demoPage.pricingOption);
    await Helper.waitForPage("order");
    await orderPage.getCheckBox("1");
    expect(await orderPage.buyNowButton.isEnabled()).toBe(true);
  });

  it("Should check the url when the buy now button is clicked", async () => {
    await Helper.clickItem(demoPage.pricingOption);
    await Helper.waitForPage("order");
    await orderPage.getCheckBox("1");
    await Helper.scrollPage("500");
    await Helper.clickItem(orderPage.buyNowButton);
    expect(await browser.getCurrentUrl()).toContain("order-confirm");
  });

  it("Should input the given values", async () => {
    await Helper.clickItem(demoPage.pricingOption);
    await Helper.waitForPage("order");
    await orderPage.getCheckBox("1");
    await Helper.scrollPage("500");
    await Helper.clickItem(orderPage.buyNowButton);
    await confirmOrderPage.fillInConfirmOrder({
      firstName: "testName",
      lastName: "testLastName",
      businessName: "testBusiness",
      emailAddress: "testEmail",
      mobile: "123456",
    });
    expect(await confirmOrderPage.firstNameInput.getAttribute("value")).not.toBe("");
    expect(await confirmOrderPage.lastNameInput.getAttribute("value")).not.toBe("");
    expect(await confirmOrderPage.businessNameInput.getAttribute("value")).not.toBe("");
    expect(await confirmOrderPage.emailAddressInput.getAttribute("value")).not.toBe("");
    expect(await confirmOrderPage.mobileInput.getAttribute("value")).not.toBe("");
  });

  it("Should check the default data is shown", async () => {
    await Helper.clickItem(demoPage.pricingOption);
    expect(await orderPage.orderPageData.isDisplayed()).toBeTruthy();
  });
});
