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

  /* Verify the header is displayed */

  /* Verify the header title is displayed */

  /* Verify the header title is correctly populated */

  /* Verify the header description is displayed */

  /* Verify the header description is correctly populated */

  /* Verify a total of 3 options under header*/

  /* Verify option 1 title is displayed */

  /* Verify option 1 title is correctly populated */

  /* Verify option 1 description is displayed */

  /* Verify option 1 description is correctly populated*/

  /* Verify option 2 title is displayed */

  /* Verify option 2 title is correctly populated */

  /* Verify option 2 description is displayed */

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
});
