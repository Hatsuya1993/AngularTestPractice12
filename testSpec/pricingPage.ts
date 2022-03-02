import {browser} from "protractor";
import {globalData} from "../helper/global";
import {PricingPage} from "../pageObject/pricingPage";
import {Helper} from "../helper/helper";

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

  it("Check all the plans are populated correctly", async () => {
    const plans = ["Plans and prices", "Startup", "Agency", "Business", "Enterprise"];
    const results = await pricingPage.getAllPlans(pricingPage.plans, plans);
    expect(results).toBeTruthy();
  });

  it("Pop up when travelport flights button is clicked", async () => {
    await Helper.scrollPage("1000");
    await Helper.clickItem(pricingPage.travelPortFlights);
    await Helper.handleIframe(pricingPage.iframe);
    expect(pricingPage.travelPortFlightsPopUp.getAttribute("class")).toContain("showing");
    await Helper.handleExitIframe();
  });

  it("Clicking startup buy this from popup will display checkout form", async () => {
    await Helper.scrollPage("1000");
    await Helper.clickItem(pricingPage.travelPortFlights);
    await Helper.handleIframe(pricingPage.iframe);
    await Helper.clickItem(pricingPage.iWantThisButton);
    expect(await pricingPage.checkoutPopUpForm.isDisplayed()).toBeTruthy();
    await Helper.handleExitIframe();
  });

  it("Clicking amadeus buy this from popup will display checkout form", async () => {
    await Helper.scrollPage("1000");
    await Helper.clickItem(pricingPage.amadeusFlights);
    await Helper.handleIframe(pricingPage.iframe);
    await Helper.clickItem(pricingPage.buyThisButton);
    expect(await pricingPage.checkoutPopUpForm.isDisplayed()).toBeTruthy();
    await Helper.handleExitIframe();
  });

  it("Clicking AerTicker buy this from popup will display checkout form", async () => {
    await Helper.scrollPage("1200");
    await Helper.clickItem(pricingPage.aerTicketFlights);
    await Helper.handleIframe(pricingPage.iframe);
    await Helper.clickItem(pricingPage.buyThisButton);
    expect(await pricingPage.checkoutPopUpForm.isDisplayed()).toBeTruthy();
    await Helper.handleExitIframe();
  });

  it("Clicking Kiwi buy this from popup will display checkout form", async () => {
    await Helper.scrollPage("1200");
    await Helper.clickItem(pricingPage.kiwiFlightsPopUp);
    await Helper.handleIframe(pricingPage.iframe);
    await Helper.clickItem(pricingPage.iWantThisButton);
    expect(await pricingPage.checkoutPopUpForm.isDisplayed()).toBeTruthy();
    await Helper.handleExitIframe();
  });

  it("Clicking TravelPayouts buy this from popup will display checkout form", async () => {
    await Helper.scrollPage("1200");
    await Helper.clickItem(pricingPage.travelPayOutsPopUp);
    await Helper.handleIframe(pricingPage.iframe);
    await Helper.clickItem(pricingPage.buyThisButton);
    expect(await pricingPage.checkoutPopUpForm.isDisplayed()).toBeTruthy();
    await Helper.handleExitIframe();
  });

  it("Clicking Viator buy this from popup will display checkout form", async () => {
    await Helper.scrollPage("1200");
    await Helper.clickItem(pricingPage.viatorPopUp);
    await Helper.handleIframe(pricingPage.iframe);
    await Helper.clickItem(pricingPage.buyThisButton);
    expect(await pricingPage.checkoutPopUpForm.isDisplayed()).toBeTruthy();
    await Helper.handleExitIframe();
  });

  it("Clicking Hotelbeds buy this from popup will display checkout form", async () => {
    await Helper.scrollPage("1200");
    await Helper.clickItem(pricingPage.hotelBedsPopUp);
    await Helper.handleIframe(pricingPage.iframe);
    await Helper.clickItem(pricingPage.buyThisButton);
    expect(await pricingPage.checkoutPopUpForm.isDisplayed()).toBeTruthy();
    await Helper.handleExitIframe();
  });

  fit("Clicking Agoda buy this from popup will display checkout form", async () => {
    await Helper.scrollPage("1200");
    await Helper.clickItem(pricingPage.agodaPopUp);
    await Helper.handleIframe(pricingPage.iframe);
    await Helper.clickItem(pricingPage.buyThisButton);
    expect(await pricingPage.checkoutPopUpForm.isDisplayed()).toBeTruthy();
    await Helper.handleExitIframe();
  });

  it("Pop up when amadeus flights button is clicked", async () => {
    await Helper.scrollPage("1000");
    await Helper.clickItem(pricingPage.amadeusFlights);
    await Helper.handleIframe(pricingPage.iframe);
    expect(pricingPage.amadeusFlightsPopUp.getAttribute("class")).toContain("showing");
    await Helper.handleExitIframe();
  });

  it("Pop up when aerticket flights button is clicked", async () => {
    await Helper.scrollPage("1000");
    await Helper.clickItem(pricingPage.aerTicketFlights);
    await Helper.handleIframe(pricingPage.iframe);
    expect(pricingPage.amadeusFlightsPopUp.getAttribute("class")).toContain("showing");
    await Helper.handleExitIframe();
  });

  it("Clicking the contact us button wil redirect the user to a new page", async () => {
    await Helper.scrollPage("2000");
    await Helper.clickItem(pricingPage.contactUs);
    expect(await browser.getCurrentUrl()).toContain("contact-us");
  });

  it("Bottom info should populate 4 rows of data", async () => {
    expect(await pricingPage.bottomInfo.count()).toBe(4);
  });

  it("Frequently asked question is displayed and populated properly", async () => {
    expect(await pricingPage.frequentlyAsked.isDisplayed()).toBeTruthy();
    expect(await pricingPage.frequentlyAsked.getText()).toBe("Frequently asked questions");
  });

  it("Looking for customization is displayed and populated properly", async () => {
    await Helper.scrollPage("2000");
    await Helper.displayed(pricingPage.lookingForCustomization);
    expect(await pricingPage.lookingForCustomization.isDisplayed()).toBeTruthy();
    expect(await pricingPage.lookingForCustomization.getText()).toBe("Looking for customization?");
  });

  it("World's leading booking software title is displayed and populated correctly", async () => {
    await Helper.scrollPage("2000");
    await Helper.displayed(pricingPage.worldLeadingBooking);
    expect(await pricingPage.worldLeadingBooking.isDisplayed()).toBeTruthy();
    expect(await pricingPage.worldLeadingBooking.getText()).toBe("World's leading booking software");
  });
});
