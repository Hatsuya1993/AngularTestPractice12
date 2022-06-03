import {browser} from "protractor";
import {globalData} from "../helper/global";
import {DemoPage} from "../pageObject/demoPage";
import {Helper} from "../helper/helper";
import {LoginPage} from "../pageObject/loginPage";
import {Log4jsconfig} from "../config/log4jsconfig";

describe("Testing demoPage", () => {
  let demoPage : DemoPage;
  const log4jsconfig = new Log4jsconfig();
  beforeEach(async () => {
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

  it("Check if the home url is correct", async () => {
    expect(await browser.getCurrentUrl()).toContain("demo");
  });

  it("Check if the title is correct", async () => {
    log4jsconfig.log().debug("Check if the title is correct");
    expect(await Helper.checkString(demoPage.getTitle(), "PHPTRAVELS")).toBeTruthy();
  });

  it("Check if the subtitle is correct", async () => {
    log4jsconfig.log().debug("Check if the subtitle is correct");
    expect(await Helper.checkString(demoPage.getSubtitle(), "TRAVEL TECHNOLOGY PARTNER")).toBeTruthy();
  });

  it("Check if the main title is correct", async () => {
    log4jsconfig.log().debug("Check if the main title is correct");
    expect(await Helper.checkString(demoPage.getMainTitle(), "Demo Credentials for Frontend and Backend")).toBeTruthy();
  });

  it("Check if the nav options at the top are available", async () => {
    log4jsconfig.log().debug("Check if the nav options at the top are available");
    expect(await Helper.displayed(demoPage.getNavOption())).toBeTruthy();
  });

  it("Check if the home url is correct if demo is clicked", async () => {
    log4jsconfig.log().debug("Check if the home url is correct if demo is clicked");
    await Helper.clickItem(demoPage.getDemoOption());
    expect(await browser.getCurrentUrl()).toContain("demo");
  });

  it("Check if the pricing url is currect if pricing if clicked", async () => {
    log4jsconfig.log().debug("Check if the pricing url is currect if pricing if clicked");
    await Helper.clickItem(demoPage.getPricingOption());
    expect(await browser.getCurrentUrl()).toContain("order");
  });

  it("Check if the integrations url is correct if clicked", async () => {
    log4jsconfig.log().debug("Check if the integrations url is correct if clicked");
    await Helper.clickItem(demoPage.getIntegrationOption());
    expect(await browser.getCurrentUrl()).toContain("integrations");
  });

  it("Check another tab is opened when Docs is clicked", async () => {
    log4jsconfig.log().debug("Check another tab is opened when Docs is clicked");
    await Helper.clickItem(demoPage.getDocsOption());
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });

  it("Check when Docs tab is clicked, the new tab hold the correct url", async () => {
    log4jsconfig.log().debug("Check when Docs tab is clicked, the new tab hold the correct url");
    await Helper.clickItem(demoPage.getDocsOption());
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("docs");
  });

  it("Check another tab is opened when Blog is clicked", async () => {
    log4jsconfig.log().debug("Check another tab is opened when Blog is clicked");
    await Helper.clickItem(demoPage.getBlogOption());
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });

  it("Check when Blog tab is clicked, the new tab hold the correct url", async () => {
    log4jsconfig.log().debug("Check when Blog tab is clicked, the new tab hold the correct url");
    await Helper.clickItem(demoPage.getBlogOption());
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("blog");
  });

  it("Check when login button is clicked another tab is opened", async () => {
    log4jsconfig.log().debug("Check when login button is clicked another tab is opened");
    await Helper.clickItem(demoPage.getLoginOption());
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });

  it("Check when the login button is clicked, the url is correct", async () => {
    log4jsconfig.log().debug("Check when the login button is clicked, the url is correct");
    await Helper.clickItem(demoPage.getLoginOption());
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("login");
  });

  it("Check when the facebook icon is clicked, 2 tabs are opened", async () => {
    log4jsconfig.log().debug("Check when the facebook icon is clicked, 2 tabs are opened");
    await Helper.clickItem(demoPage.getFacebookIcon());
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });

  it("Check the url when the facebook icon is clicked", async () => {
    log4jsconfig.log().debug("Check the url when the facebook icon is clicked");
    await Helper.clickItem(demoPage.getFacebookIcon());
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("facebook");
  });

  it("Check the url when the youtube icon is clicked", async () => {
    log4jsconfig.log().debug("Check the url when the youtube icon is clicked");
    await Helper.clickItem(demoPage.getYoutubeIcon());
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });

  it("Check the url when youtube is clicked", async () => {
    log4jsconfig.log().debug("Check the url when youtube is clicked");
    await Helper.clickItem(demoPage.getYoutubeIcon());
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("phptravelsofficial");
  });

  it("Check the url when twitter is clicked", async () => {
    log4jsconfig.log().debug("Check the url when twitter is clicked");
    await Helper.clickItem(demoPage.getTwitterIcon());
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("twitter");
  });

  it("Check the number of tabs when linkedin button is clicked", async () => {
    log4jsconfig.log().debug("Check the number of tabs when linkedin button is clicked");
    await Helper.clickItem(demoPage.getLinkedIn());
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });

  it("Check the url when the linkedin is clicked", async () => {
    log4jsconfig.log().debug("Check the url when the linkedin is clicked");
    await Helper.clickItem(demoPage.getLinkedIn());
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("linkedin");
  });

  it("Check the number of tabs opened when instagram icon is clicked", async () => {
    log4jsconfig.log().debug("Check the number of tabs opened when instagram icon is clicked");
    await Helper.clickItem(demoPage.getInstagramIcon());
    expect((await browser.getAllWindowHandles()).length).toBe(2);
  });

  it("Check when instagram url when it is clicked", async () => {
    log4jsconfig.log().debug("Check when instagram url when it is clicked");
    await Helper.clickItem(demoPage.getInstagramIcon());
    await Helper.handleTabs(1);
    expect(await browser.getCurrentUrl()).toContain("instagram");
  });

  it("Check the url when the desktop app is clicked", async () => {
    log4jsconfig.log().debug("Check the url when the desktop app is clicked");
    await Helper.clickItem(demoPage.getDeskTopLink());
    expect(await browser.getCurrentUrl()).toContain("desktop-application");
  });


  it("Check the url when the mobile app is clicked", async () => {
    log4jsconfig.log().debug("Check the url when the mobile app is clicked");
    await Helper.clickItem(demoPage.getMobileAppLink());
    expect(await browser.getCurrentUrl()).toContain("mobile-applications");
  });

  it("Check the url when the features is clicked", async () => {
    log4jsconfig.log().debug("Check the url when the features is clicked");
    await Helper.clickItem(demoPage.getFeaturesLink());
    expect(await browser.getCurrentUrl()).toContain("features");
  });

  it("Check the url when the requirements is clicked", async () => {
    log4jsconfig.log().debug("Check the url when the requirements is clicked");
    await Helper.clickItem(demoPage.getRequirementsLink());
    expect(await browser.getCurrentUrl()).toContain("requirements");
  });

  it("Check the url when the technology is clicked", async () => {
    log4jsconfig.log().debug("Check the url when the technology is clicked");
    await Helper.clickItem(demoPage.getTechnologyLink());
    expect(await browser.getCurrentUrl()).toContain("technology");
  });

  it("Check the url when the Changelog is clicked", async () => {
    log4jsconfig.log().debug("Check the url when the Changelog is clicked");
    await Helper.clickItem(demoPage.getChangeLogLink());
    expect(await browser.getCurrentUrl()).toContain("change-log");
  });

  it("Check the url when the updates is clicked", async () => {
    log4jsconfig.log().debug("Check the url when the updates is clicked");
    await Helper.clickItem(demoPage.getUpdatesLink());
    expect(await browser.getCurrentUrl()).toContain("updates");
  });

  it("Check the url when the providers is clicked", async () => {
    log4jsconfig.log().debug("Check the url when the providers is clicked");
    await Helper.clickItem(demoPage.getProvidersLink());
    expect(await browser.getCurrentUrl()).toContain("providers");
  });

  it("Check the url when the affiliate is clicked", async () => {
    log4jsconfig.log().debug("Check the url when the affiliate is clicked");
    await Helper.clickItem(demoPage.getAffiliateLink());
    expect(await browser.getCurrentUrl()).toContain("affiliate");
  });

  it("Check the url when the roadmap is clicked", async () => {
    log4jsconfig.log().debug("Check the url when the roadmap is clicked");
    await Helper.clickItem(demoPage.getRoadMapLink());
    expect(await browser.getCurrentUrl()).toContain("roadmap");
  });

  it("Check the url when the product services is clicked", async () => {
    log4jsconfig.log().debug("Check the url when the product services is clicked");
    await Helper.clickItem(demoPage.getProductServicesLink());
    expect(await browser.getCurrentUrl()).toContain("services");
  });

  it("Check the url when the customization is clicked", async () => {
    log4jsconfig.log().debug("Check the url when the customization is clicke");
    await Helper.clickItem(demoPage.getCustomizationLink());
    expect(await browser.getCurrentUrl()).toContain("customizations");
  });

  it("Check the url when the hotels integration is clicked", async () => {
    log4jsconfig.log().debug("Check the url when the hotels integration is clicked");
    await Helper.clickItem(demoPage.getHotelIntegration());
    expect(await browser.getCurrentUrl()).toContain("expedia-api-integration");
  });

  it("Check the url when the shared cloud hosting is clicked", async () => {
    log4jsconfig.log().debug("Check the url when the shared cloud hosting is clicked");
    await Helper.clickItem(demoPage.getSharedCloudHosting());
    expect(await browser.getCurrentUrl()).toContain("shared-hosting");
  });

  it("Check the url for the register page", async () => {
    log4jsconfig.log().debug("Check the url for the register page");
    await Helper.clickItem(demoPage.getLoginOption());
    await Helper.handleTabs(1);
    const loginPage = new LoginPage();
    await Helper.clickItem(loginPage.createNewAccount);
    expect(await browser.getCurrentUrl()).toContain("register");
  });
});
