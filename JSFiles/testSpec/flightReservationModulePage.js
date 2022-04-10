"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const global_1 = require("../helper/global");
const flightReservationModulePage_1 = require("../pageObject/flightReservationModulePage");
describe("Flights Reservation Module", () => {
    const flightReservationModulePage = new flightReservationModulePage_1.FlightReservationModulePage();
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get(flightReservationModulePage.getWebsite());
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    /* Verify if the url is correctly displayed */
    fit("Verify if the url is correctly displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("flights-module-features");
    }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpZ2h0UmVzZXJ2YXRpb25Nb2R1bGVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdFNwZWMvZmxpZ2h0UmVzZXJ2YXRpb25Nb2R1bGVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1DO0FBQ25DLDZDQUE0QztBQUM1QywyRkFBc0Y7QUFFdEYsUUFBUSxDQUFDLDRCQUE0QixFQUFFLEdBQUcsRUFBRTtJQUMxQyxNQUFNLDJCQUEyQixHQUFHLElBQUkseURBQTJCLEVBQUUsQ0FBQztJQUN0RSxVQUFVLENBQUMsR0FBUyxFQUFFO1FBQ3BCLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsOENBQThDO0lBQzlDLEdBQUcsQ0FBQywwQ0FBMEMsRUFBRSxHQUFTLEVBQUU7UUFDekQsTUFBTSxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdFLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxvQ0FBb0M7SUFFcEMsMENBQTBDO0lBRTFDLG9EQUFvRDtJQUVwRCxnREFBZ0Q7SUFFaEQsMERBQTBEO0lBRTFELDZDQUE2QztJQUU3Qyx3Q0FBd0M7SUFFeEMsa0RBQWtEO0lBRWxELDhDQUE4QztJQUU5Qyx1REFBdUQ7SUFFdkQsd0NBQXdDO0lBRXhDLGtEQUFrRDtJQUVsRCw4Q0FBOEM7SUFFOUMsdURBQXVEO0lBRXZELHdDQUF3QztJQUV4QyxrREFBa0Q7SUFFbEQsOENBQThDO0lBRTlDLHVEQUF1RDtJQUV2RCxrQ0FBa0M7SUFFbEMsd0NBQXdDO0lBRXhDLGtEQUFrRDtJQUVsRCwwQ0FBMEM7SUFFMUMsb0RBQW9EO0lBRXBELHlDQUF5QztJQUV6Qyx5Q0FBeUM7SUFFekMseUNBQXlDO0lBRXpDLG1EQUFtRDtJQUVuRCxtREFBbUQ7SUFFbkQsbURBQW1EO0lBRW5ELCtDQUErQztJQUUvQywrQ0FBK0M7SUFFL0MsK0NBQStDO0lBRS9DLHlEQUF5RDtJQUV6RCx5REFBeUQ7SUFFekQseURBQXlEO0lBRXpELHdDQUF3QztJQUV4QyxrREFBa0Q7SUFFbEQsb0RBQW9EO0lBRXBELHlDQUF5QztJQUV6Qyx1REFBdUQ7SUFFdkQseURBQXlEO0lBRXpELG1FQUFtRTtJQUVuRSxxRUFBcUU7SUFFckUsK0VBQStFO0lBRS9FLG9DQUFvQztJQUVwQywwQ0FBMEM7SUFFMUMsb0RBQW9EO0lBRXBELGdEQUFnRDtJQUVoRCw0Q0FBNEM7SUFFNUMsMkRBQTJEO0lBRTNELHNDQUFzQztJQUV0QyxvQ0FBb0M7QUFDdEMsQ0FBQyxDQUFDLENBQUMifQ==