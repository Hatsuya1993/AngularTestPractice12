import {$, WebElement} from "protractor";

export class FlightReservationModulePage {
  website : string;

  constructor(private readonly $main : WebElement = $("#PageContainer")) {
    this.website = "https://phptravels.com/flights-module-features/";
  }

  getWebsite() : string {
    return this.website;
  }
}
