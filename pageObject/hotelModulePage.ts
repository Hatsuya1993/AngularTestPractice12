import {ElementFinder, $, ElementArrayFinder} from "protractor";

export class HotelModulePage {
  private readonly website : string;
  private readonly configuration : ElementFinder;
  private readonly header : ElementFinder;
  private readonly hotelsModule : ElementArrayFinder;
  private readonly fullCalendar : ElementArrayFinder;

  constructor(private readonly $main : ElementFinder = $("body")) {
    this.website = "https://phptravels.com/hotels-module-features/";
    this.configuration = this.$main.$("a[href='/startup/configuration']");
    this.header = this.$main.$("header.BS-header");
    this.hotelsModule = this.$main.$$(".container-outer.grey");
    this.fullCalendar = this.$main.$$(".container-outer.white");
  }

  getWebsite() : string {
    return this.website;
  }

  getConfiguration() : ElementFinder {
    return this.configuration;
  }

  getHeader() : ElementFinder {
    return this.header;
  }

  getHotelsModule() : ElementArrayFinder {
    return this.hotelsModule;
  }

  getFullCalendar() : ElementArrayFinder {
    return this.fullCalendar;
  }
}
