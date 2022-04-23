import {browser} from "protractor";
import {globalData} from "../helper/global";
import {FlightReservationModulePage} from "../pageObject/flightReservationModulePage";

describe("Flights Reservation Module", () => {
  const flightReservationModulePage = new FlightReservationModulePage();
  beforeEach(async () => {
    browser.waitForAngularEnabled(false);
    await browser.get(flightReservationModulePage.getWebsite());
    await browser.manage().window().maximize();
    await browser.sleep(globalData["WAIT_TIME"]["WAIT_LONG"]);
  });

  /* Verify if the url is correctly displayed */
  it("Verify if the url is correctly displayed", async () => {
    expect(await browser.getCurrentUrl()).toContain("flights-module-features");
  });

  /* Verify the header is displayed */
  it("Verify if the header is displayed", async () => {
    expect(await flightReservationModulePage.getHeader().isDisplayed()).toBeTruthy();
  });

  /* Verify the header title is displayed */
  it("Verify if the header title is displayed", async () => {
    expect(await flightReservationModulePage.getHeaderTitle().isDisplayed()).toBeTruthy();
  });

  /* Verify the header title is correctly populated */
  it("Verify the header title is correctly populated", async () => {
    expect(await flightReservationModulePage.getHeaderTitle().getText()).toContain("Flights Reservation Module");
  });

  /* Verify the header description is displayed */
  it("Verify the header description is displayed", async () => {
    expect(await flightReservationModulePage.getHeaderDescription().isDisplayed()).toBeTruthy();
  });

  /* Verify the header description is correctly populated */
  it("Verify the header description is correctly populated", async () => {
    expect(await flightReservationModulePage.getHeaderDescription().getText()).toContain("Airline Ticketing Software with Flight Booking engine in built");
  });

  /* Verify a total of 3 options under header*/
  it("Verify there are a total of 3 options", async () => {
    expect(await flightReservationModulePage.getOptions().count()).toEqual(3);
  });

  /* Verify option 1 title is displayed */
  it("Verify options 1 title is displayed", async () => {
    expect(await flightReservationModulePage.getOptionsOneTitle().isDisplayed()).toBeTruthy();
  });

  /* Verify option 1 title is correctly populated */
  it("Verify options 1 title is displayed correctly", async () => {
    expect(await flightReservationModulePage.getOptionsOneTitle().getText()).toBe("Search filter and reserve flights tickets");
  });

  /* Verify option 1 description is displayed */
  it("Verify options 1 description is displayed", async () => {
    expect(await flightReservationModulePage.getOptionsOneDescription().isDisplayed()).toBeTruthy();
  });

  /* Verify option 1 description is correctly populated*/
  it("Verify options 1 description is correctly populated", async () => {
    expect(await flightReservationModulePage.getOptionsOneDescription().getText()).toBe("Premium features included search by oneway return ticket or offer multi destination booking facility to your clients with with realtime and opensource code platform of phptravels");
  });

  /* Verify option 2 title is displayed */
  it("Verify options 2 title is displayed", async () => {
    expect(await flightReservationModulePage.getOptionsTwoTitle().isDisplayed()).toBeTruthy();
  });

  /* Verify option 2 title is correctly populated */
  it("Verify options 2 title is displayed correctly", async () => {
    expect(await flightReservationModulePage.getOptionsTwoTitle().getText()).toBe("Flights booking module");
  });

  /* Verify option 2 description is displayed */
  fit("Verify options 1 description is displayed", async () => {
    expect(await flightReservationModulePage.getOptionsTwoDescription().isDisplayed()).toBeTruthy();
  });

  /* Verify option 2 description is correctly populated*/

  /* Verify option 3 title is displayed */

  /* Verify option 3 title is correctly populated */

  /* Verify option 3 description is displayed */

  /* Verify option 3 description is correctly populated*/

  /* Verify features is displayed */

  /* Verify features title is displayed */

  /* Verify features title is correctly populated */

  /* Verify features options is populated */

  /* Verify features options is displaying 3 options*/

  /* Verify features 1 title is displayed*/

  /* Verify features 2 title is displayed*/

  /* Verify features 3 title is displayed*/

  /* Verify features 1 title is correctly populated*/

  /* Verify features 2 title is correctly populated*/

  /* Verify features 3 title is correctly populated*/

  /* Verify features 1 description is displayed*/

  /* Verify features 2 description is displayed*/

  /* Verify features 3 description is displayed*/

  /* Verify features 1 description is correctly populated*/

  /* Verify features 2 description is correctly populated*/

  /* Verify features 3 description is correctly populated*/

  /* Verify booking system is displayed */

  /* Verify booking system is populated correctly */

  /* Verify booking system description is displayed */

  /* Verify the demo button is displayed */

  /* Verify the demo button will move to the demo page */

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
