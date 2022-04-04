import {ElementFinder, $, ElementArrayFinder} from "protractor";

export class HotelModulePage {
  private readonly website : string;
  private readonly configuration : ElementFinder;
  private readonly header : ElementFinder;
  private readonly hotelsModule : ElementArrayFinder;
  private readonly fullCalendar : ElementArrayFinder;
  private readonly mainFeatures : ElementFinder;
  private readonly googleMaps : ElementArrayFinder;
  private readonly banner : ElementFinder;
  private readonly bannerTitle : ElementFinder;
  private readonly bannerDescription : ElementFinder;
  private readonly viewPricing : ElementFinder;

  constructor(private readonly $main : ElementFinder = $("body")) {
    this.website = "https://phptravels.com/hotels-module-features/";
    this.configuration = this.$main.$("a[href='/startup/configuration']");
    this.header = this.$main.$("header.BS-header");
    this.hotelsModule = this.$main.$$(".container-outer.grey");
    this.fullCalendar = this.$main.$$(".container-outer.white");
    this.mainFeatures = this.$main.$(".features.grey");
    this.googleMaps = this.$main.$$(".container-outer.white");
    this.banner = this.$main.$(".gradient-cover");
    this.bannerTitle = this.$main.$(".gradient .container .col-12 h2");
    this.bannerDescription = this.$main.$(".gradient .container .col-md-8 p");
    this.viewPricing = this.$main.$("[href*='phptravels.com/order']");
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

  getMainFeatures() : ElementFinder {
    return this.mainFeatures;
  }
  getGoogleMaps() : ElementArrayFinder {
    return this.googleMaps;
  }
  getBanner() : ElementFinder {
    return this.banner;
  }
  getBannerTitle() : ElementFinder {
    return this.bannerTitle;
  }
  getBannerDescription() : ElementFinder {
    return this.bannerDescription;
  }
  getViewPricing() : ElementFinder {
    return this.viewPricing;
  }
}
