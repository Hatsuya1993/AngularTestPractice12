import {browser} from "protractor";
import {globalData} from "../helper/global";
import {FlightReservationModulePage} from "../pageObject/flightReservationModulePage";
import {Log4jsconfig} from "../config/log4jsconfig";
import {Helper} from "../helper/helper";

describe("Flights Reservation Module", () => {
  let flightReservationModulePage : FlightReservationModulePage;
  const log4jsconfig = new Log4jsconfig();
  beforeEach(async () => {
    browser.waitForAngularEnabled(false);
    flightReservationModulePage = new FlightReservationModulePage();
    log4jsconfig.log().debug("Opening website of " +flightReservationModulePage.getWebsite());
    await browser.get(flightReservationModulePage.getWebsite());
    log4jsconfig.log().debug("Website opened " +flightReservationModulePage.getWebsite());
    await browser.manage().window().maximize();
    await browser.sleep(globalData["WAIT_TIME"]["WAIT_LONG"]);
  });

  afterEach(async () => {
    await browser.restart();
  });

  /* Verify if the url is correctly displayed */
  it("Verify if the url is correctly displayed", async () => {
    log4jsconfig.log().debug("Verify if the url is correctly displayed");
    expect(await browser.getCurrentUrl()).toContain("flights-module-features");
  });

  /* Verify the header is displayed */
  it("Verify if the header is displayed", async () => {
    log4jsconfig.log().debug("Verify if the header is displayed");
    expect(await flightReservationModulePage.getHeader().isDisplayed()).toBeTruthy();
  });

  /* Verify the header title is displayed */
  it("Verify if the header title is displayed", async () => {
    log4jsconfig.log().debug("Verify if the header title is displayed");
    expect(await flightReservationModulePage.getHeaderTitle().isDisplayed()).toBeTruthy();
  });

  /* Verify the header title is correctly populated */
  it("Verify the header title is correctly populated", async () => {
    log4jsconfig.log().debug("Verify the header title is correctly populated");
    expect(await flightReservationModulePage.getHeaderTitle().getText()).toContain("Flights Reservation Module");
  });

  /* Verify the header description is displayed */
  it("Verify the header description is displayed", async () => {
    log4jsconfig.log().debug("Verify the header description is displayed");
    expect(await flightReservationModulePage.getHeaderDescription().isDisplayed()).toBeTruthy();
  });

  /* Verify the header description is correctly populated */
  it("Verify the header description is correctly populated", async () => {
    log4jsconfig.log().debug("Verify the header description is correctly populated");
    expect(await flightReservationModulePage.getHeaderDescription().getText()).toContain("Airline Ticketing Software with Flight Booking engine in built");
  });

  /* Verify a total of 3 options under header*/
  it("Verify there are a total of 3 options", async () => {
    log4jsconfig.log().debug("Verify there are a total of 3 options");
    expect(await flightReservationModulePage.getOptions().count()).toEqual(3);
  });

  /* Verify option 1 title is displayed */
  it("Verify options 1 title is displayed", async () => {
    log4jsconfig.log().debug("Verify options 1 title is displayed");
    expect(await flightReservationModulePage.getOptionsOneTitle().isDisplayed()).toBeTruthy();
  });

  /* Verify option 1 title is correctly populated */
  it("Verify options 1 title is displayed correctly", async () => {
    log4jsconfig.log().debug("Verify options 1 title is displayed correctly");
    expect(await flightReservationModulePage.getOptionsOneTitle().getText()).toBe("Search filter and reserve flights tickets");
  });

  /* Verify option 1 description is displayed */
  it("Verify options 1 description is displayed", async () => {
    log4jsconfig.log().debug("Verify options 1 description is displayed");
    expect(await flightReservationModulePage.getOptionsOneDescription().isDisplayed()).toBeTruthy();
  });

  /* Verify option 1 description is correctly populated*/
  it("Verify options 1 description is correctly populated", async () => {
    log4jsconfig.log().debug("Verify options 1 description is correctly populated");
    expect(await flightReservationModulePage.getOptionsOneDescription().getText()).toBe("Premium features included search by oneway return ticket or offer multi destination booking facility to your clients with with realtime and opensource code platform of phptravels");
  });

  /* Verify option 2 title is displayed */
  it("Verify options 2 title is displayed", async () => {
    log4jsconfig.log().debug("Verify options 2 title is displayed");
    expect(await flightReservationModulePage.getOptionsTwoTitle().isDisplayed()).toBeTruthy();
  });

  /* Verify option 2 title is correctly populated */
  it("Verify options 2 title is displayed correctly", async () => {
    log4jsconfig.log().debug("Verify options 2 title is displayed correctly");
    expect(await flightReservationModulePage.getOptionsTwoTitle().getText()).toBe("Flights booking module");
  });

  /* Verify option 2 description is displayed */
  it("Verify options 2 description is displayed", async () => {
    log4jsconfig.log().debug("Verify options 2 description is displayed");
    expect(await flightReservationModulePage.getOptionsTwoDescription().isDisplayed()).toBeTruthy();
  });

  /* Verify option 2 description is correctly populated*/
  it("Verify options 2 description is correctly populated", async () => {
    log4jsconfig.log().debug("Verify options 2 description is correctly populated");
    expect(await flightReservationModulePage.getOptionsTwoDescription().getText()).toBe("Dedicated flights module with multiple features and functionalities such as adding flights managing routes airlines and working with multiple GDS APIs. it also supports multi-currency and multi-language with ability to auto update currency rates and support with major online payment gateways to accept payments for each booking made on your website.");
  });

  /* Verify option 3 title is displayed */
  it("Verify options 3 title is displayed", async () => {
    log4jsconfig.log().debug("Verify options 3 title is displayed");
    expect(await flightReservationModulePage.getOptionsThreeTitle().isDisplayed()).toBeTruthy();
  });

  /* Verify option 3 title is correctly populated */
  it("Verify options 3 title is displayed correctly", async () => {
    log4jsconfig.log().debug("Verify options 3 title is displayed correctly");
    expect(await flightReservationModulePage.getOptionsThreeTitle().getText()).toBe("Complete flights back-office system");
  });

  /* Verify option 3 description is displayed */
  it("Verify options 3 description is displayed", async () => {
    log4jsconfig.log().debug("Verify options 3 description is displayed");
    expect(await flightReservationModulePage.getOptionsThreeDescription().isDisplayed()).toBeTruthy();
  });

  /* Verify option 3 description is correctly populated*/
  it("Verify options 3 description is displayed correctly", async () => {
    log4jsconfig.log().debug("Verify options 3 description is displayed correctly");
    expect(await flightReservationModulePage.getOptionsThreeDescription().getText()).toBe("Sell flights tickets direct from your own GDS account simply by connecting with your credentials. no tech skills required to make it functionaly just deploy phptravels on your site and enable which modules and services you like to sell from.");
  });

  /* Verify features is displayed */
  it("Verify features is displayed", async () => {
    log4jsconfig.log().debug("Verify features is displayed");
    expect(await flightReservationModulePage.getFeaturesContainer().isDisplayed()).toBeTruthy();
  });

  // Verify features is correctly populated
  it("Verify features is correctly populated", async () => {
    log4jsconfig.log().debug("Verify features is correctly populated");
    expect(await flightReservationModulePage.getFeatures().getText()).toBe("Main Features");
  });

  /* Verify features title is displayed */
  it("Verify features title is displayed", async () => {
    log4jsconfig.log().debug("Verify features title is displayed");
    expect(await flightReservationModulePage.getFeatures().isDisplayed()).toBeTruthy();
  });

  /* Verify features options is populated */
  it("Verify features options is displayed", async () => {
    log4jsconfig.log().debug("Verify features options is displayed");
    expect(await flightReservationModulePage.getFeaturesOptions().isDisplayed()).toBeTruthy();
  });

  /* Verify features options is displaying 3 options*/
  it("Verify features options is displayed 3 options", async () => {
    log4jsconfig.log().debug("Verify features options is displayed 3 options");
    expect(await flightReservationModulePage.getFeaturesOptionsEach().count()).toBe(3);
  });

  /* Verify features 1 title is displayed*/
  it("Verify features options one title is displayed", async () => {
    log4jsconfig.log().debug("Verify features options one title is displayed");
    expect(await flightReservationModulePage.getFeaturesOptionsOneTitle().isDisplayed()).toBeTruthy();
  });

  /* Verify features 2 title is displayed*/
  it("Verify features options two title is displayed", async () => {
    log4jsconfig.log().debug("Verify features options two title is displayed");
    expect(await flightReservationModulePage.getFeaturesOptionsTwoTitle().isDisplayed()).toBeTruthy();
  });

  /* Verify features 3 title is displayed*/
  it("Verify features options three title is displayed", async () => {
    log4jsconfig.log().debug("Verify features options three title is displayed");
    expect(await flightReservationModulePage.getFeaturesOptionsThreeTitle().isDisplayed()).toBeTruthy();
  });

  /* Verify features 1 title is correctly populated*/
  it("Verify features options one title is displayed correctly", async () => {
    log4jsconfig.log().debug("Verify features options one title is displayed correctly");
    expect(await flightReservationModulePage.getFeaturesOptionsOneTitle().getText()).toBe("Flight Listing");
  });

  /* Verify features 2 title is correctly populated*/
  it("Verify features options two title is displayed correctly", async () => {
    log4jsconfig.log().debug("Verify features options two title is displayed correctly");
    expect(await flightReservationModulePage.getFeaturesOptionsTwoTitle().getText()).toBe("Last Minutes Deals");
  });

  /* Verify features 3 title is correctly populated*/
  it("Verify features options three title is displayed correctly", async () => {
    log4jsconfig.log().debug("Verify features options three title is displayed correctly");
    expect(await flightReservationModulePage.getFeaturesOptionsThreeTitle().getText()).toBe("Popular Flights");
  });

  /* Verify features 1 description is displayed*/
  it("Verify features options one description is displayed", async () => {
    log4jsconfig.log().debug("Verify features options one description is displayed");
    expect(await flightReservationModulePage.getFeaturesOptionsOneDescrition().isDisplayed()).toBeTruthy();
  });

  /* Verify features 2 description is displayed*/
  it("Verify features options two description is displayed", async () => {
    log4jsconfig.log().debug("Verify features options two description is displayed");
    expect(await (await flightReservationModulePage.getFeaturesOptionsTwoDescription().getText()).length).toBeTruthy();
  });

  /* Verify features 3 description is displayed*/
  it("Verify features options three description is displayed", async () => {
    log4jsconfig.log().debug("Verify features options three description is displayed");
    expect(await (await flightReservationModulePage.getFeaturesOptionsThreeDescription().getText()).length).toBeTruthy();
  });

  /* Verify features 1 description is correctly populated*/
  it("Verify features options one description is correctly displayed", async () => {
    log4jsconfig.log().debug("Verify features options one description is correctly displayed");
    expect(await (await flightReservationModulePage.getFeaturesOptionsOneDescrition().getText()).length).toBeGreaterThan(0);
  });

  /* Verify features 2 description is correctly populated*/
  it("Verify features options two description is correctly displayed", async () => {
    log4jsconfig.log().debug("Verify features options two description is correctly displayed");
    expect(await (await flightReservationModulePage.getFeaturesOptionsTwoDescription().getText()).length).toBeGreaterThan(0);
  });

  /* Verify features 3 description is correctly populated*/
  it("Verify features options three description is correctly displayed", async () => {
    log4jsconfig.log().debug("Verify features options three description is correctly displayed");
    expect(await (await flightReservationModulePage.getFeaturesOptionsThreeDescription().getText()).length).toBeGreaterThan(0);
  });

  /* Verify booking system is displayed */
  it("Verify booking system is displayed", async () => {
    log4jsconfig.log().debug("Verify booking system is displayed");
    expect(await flightReservationModulePage.getCompleteFlightBookingSystem().isDisplayed()).toBeTruthy();
  });

  /* Verify booking system is populated correctly */
  it("Verify booking system is populated correctly", async () => {
    log4jsconfig.log().debug("Verify booking system is populated correctly");
    expect(await flightReservationModulePage.getCompleteFlightBookingSystem().getText()).toBe("Complete flight booking system");
  });

  /* Verify booking system description is displayed */
  it("Verify booking system description is displayed", async () => {
    log4jsconfig.log().debug("Verify booking system description is displayed");
    expect(await flightReservationModulePage.getCompleteFlightBookingSystemDescription().isDisplayed()).toBeTruthy();
  });

  /* Verify the demo button is displayed */
  it("Verify the demo button is displayed", async () => {
    log4jsconfig.log().debug("Verify the demo button is displayed");
    expect(await flightReservationModulePage.getOverviewButton().isDisplayed()).toBeTruthy();
  });

  /* Verify the demo button will move to the demo page */
  fit("Verify the demo button will move to the demo page", async () => {
    await Helper.clickItem(flightReservationModulePage.getOverviewButton());
    expect(await browser.getCurrentUrl()).toContain("demo");
  });

  /* Verify the real time bookings from gds is displayed */

  /* Verify the real time bookings from gds is populated correctly */

  /* Verify the real time bookings from gds description is displayed */

  /* Verify the real time bookings from gds description is populated correctky */

  /* Verify the banner is displayed */

  /* Verify the banner title is displayed */

  /* Verify the banner title is populated correctly */

  /* Verify the banner description is displayed */

  /* Verify the pricing button is displayed */

  /* Verify the pricing button will move to the order page */

  /* Verify the regions are displayed */

  /* Verify the footer is displayed */
});
