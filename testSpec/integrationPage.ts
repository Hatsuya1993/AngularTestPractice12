import {browser} from "protractor";
import {globalData} from "../helper/global";
import {DemoPage} from "../pageObject/demoPage";
import {Helper} from "../helper/helper";
import {ViewToPage} from "../view/viewToPage";


describe("Testing orderPage", () => {
  const demoPage = new DemoPage();
  const viewToPage = new ViewToPage();

  beforeEach( async () => {
    browser.waitForAngularEnabled(false);
    await browser.get(demoPage.website);
    await browser.manage().window().maximize();
    await browser.sleep(globalData["WAIT_TIME"]["WAIT_LONG"]);
  });

  afterEach( async () => {
    await browser.close();
  });

  it("Should check the default content is displayed", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    expect(await integratePage.pageContents.isDisplayed()).toBeTruthy();
  });

  it("Should open another tab to the correct website for travelport", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.websiteTravelPort);
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });

  it("Should open to the correct website for travelport", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.websiteTravelPort);
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("travelport");
  });

  it("Should open another tab to the correct website for travelport documentation", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.travelPortDoc);
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });

  it("Should open to the correct website for travelport", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.travelPortDoc);
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("hotels/travelport");
  });

  it("Should open another tab to the correct website for travelpayout", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.travelPayOut);
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });

  it("Should open to the correct website for travelpayouts", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.travelPayOut);
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("travelpayouts");
  });

  it("Check if each module is correct", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    const results = await Helper.checkEachValue(["Flights Modules", "Hotels Modules", "Tours Modules", "Cars Modules", "Multi-Vendor Manual Modules"], integratePage.modules);
    expect(results).toBe(true);
  });

  it("Should open another tab to the correct website for hotel beds", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.hotelBeds);
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });

  it("Should open another tab to the correct website for hotelbeds documentation", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.hotelBedsDoc);
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });

  it("Should open to the correct website for hotelbeds documentation", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.hotelBedsDoc);
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("hotels/hotelbeds");
  });

  it("Should open another tab to the correct website for hotelston", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.hotelston);
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });

  it("Should open to the correct website for hotelston", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.hotelston);
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("hotelston");
  });

  it("Should open another tab to the correct website for hotelston doc", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.hotelstonDoc);
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });

  it("Should open to the correct website for hotelston doc", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.hotelstonDoc);
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("modules/hotels/hotelston");
  });

  it("Should open another tab to the correct website for expedia", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.expedia);
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });

  it("Should open to the correct website for expedia", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.expedia);
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("expedia");
  });

  it("Should open to the correct website for viator", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.viator);
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });

  it("Should open to the correct website for viator", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.viator);
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("viator");
  });

  it("Should open to the correct website for viator doc", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.viatorDoc);
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });

  it("Should open to the correct website for viator doc", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.viatorDoc);
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("tours/viator");
  });

  it("Should open to the correct website for cartrawler", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.cartrawler);
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });

  it("Should open to the correct website for cartrawler", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.cartrawler);
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("cartrawler");
  });

  it("Should open to the correct website for cartrawler doc", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.cartrawlerDoc);
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });

  it("Should open to the correct website for cartrawler doc", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.cartrawlerDoc);
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("cars/cartrawler");
  });

  it("Should open to the correct website for kiwitaxic", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.kititaxi);
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });

  it("Should open to the correct website for kiwitaxic doc", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.kititaxi);
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("kiwitaxi");
  });

  it("Should open to the correct website for iway", async () => {
    const integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption);
    await Helper.clickItem(integratePage.iway);
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });
});
