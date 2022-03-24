import {ElementFinder, $} from "protractor";

export class HotelModulePage {
  website : string;
  configuration : ElementFinder;

  constructor(private readonly $main : ElementFinder = $("main")) {
    this.website = "https://phptravels.com/hotels-module-features/";
    this.configuration = this.$main.$("a[href='/startup/configuration']");
  }
}
