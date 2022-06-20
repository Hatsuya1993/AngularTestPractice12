import {$, by, ElementArrayFinder, ElementFinder} from "protractor";

export class FlightReservationModulePage {
  private readonly website : string;
  private readonly header : ElementFinder;
  private readonly headerTitle : ElementFinder;
  private readonly headerDescription : ElementFinder;
  private readonly options : ElementArrayFinder;
  private readonly optionsOneTitle : ElementFinder;
  private readonly optionsOneDescription : ElementFinder;
  private readonly optionsTwoTitle : ElementFinder;
  private readonly optionsTwoDescription : ElementFinder;
  private readonly optionsThreeTitle : ElementFinder;
  private readonly optionsThreeDescription : ElementFinder;
  private readonly features : ElementFinder;
  private readonly featuresContainer : ElementFinder;
  private readonly featuresOptions : ElementFinder;
  private readonly featuresOptionsEach : ElementArrayFinder;
  private readonly featuresOptionsOneTitle : ElementFinder;
  private readonly featuresOptionsTwoTitle : ElementFinder;
  private readonly featuresOptionsThreeTitle : ElementFinder;
  private readonly featuresOptionsOneDescription : ElementFinder;
  private readonly featuresOptionsTwoDescription : ElementFinder;
  private readonly featuresOptionsThreeDescription : ElementFinder;
  private readonly completeFlightBookingSystem : ElementFinder;
  private readonly completeFlightBookingSystemDescription : ElementFinder;

  constructor(private readonly $main : ElementFinder = $("body")) {
    this.website = "https://phptravels.com/flights-module-features/";
    this.header = this.$main.$(".BS-header");
    this.headerTitle = this.$main.$("#header-title");
    this.headerDescription = this.$main.$("#header-description");
    this.options = this.$main.$$(".container-outer[style='overflow:hidden; ']");
    this.optionsOneTitle = this.$main.element(by.cssContainingText("h2", "Search filter and reserve flights tickets"));
    this.optionsOneDescription = this.$main.$$("div.col-md-5").get(0).$("p");
    this.optionsTwoTitle = this.$main.element(by.cssContainingText("h2", "Flights booking module"));
    this.optionsTwoDescription = this.$main.$$("div.col-md-5").get(1).$("p");
    this.optionsThreeTitle = this.$main.element(by.cssContainingText("h2", "Complete flights back-office system"));
    this.optionsThreeDescription = this.$main.$$("div.col-md-5").get(2).$("p");
    this.features = this.$main.element(by.cssContainingText("h2", "Main Features"));
    this.featuresContainer = this.$main.$(".features");
    this.featuresOptions = this.$main.$(".row.justify-content-center.text-center");
    this.featuresOptionsEach = this.featuresOptions.$$("div .container");
    this.featuresOptionsOneTitle = this.$main.element(by.cssContainingText("h5", "Flight Listing"));
    this.featuresOptionsTwoTitle = this.$main.element(by.cssContainingText("h5", "Last Minutes Deals"));
    this.featuresOptionsThreeTitle = this.$main.element(by.cssContainingText("h5", "Popular Flights"));
    this.featuresOptionsOneDescription = this.featuresOptionsOneTitle.element(by.xpath("following-sibling::p"));
    this.featuresOptionsTwoDescription = this.featuresOptionsTwoTitle.element(by.xpath("following-sibling::p"));
    this.featuresOptionsThreeDescription = this.featuresOptionsThreeTitle.element(by.xpath("following-sibling::p"));
    this.completeFlightBookingSystem = this.$main.element(by.cssContainingText("h2", "Complete flight booking system"));
    this.completeFlightBookingSystemDescription = this.completeFlightBookingSystem.element(by.xpath("following-sibling::p"));
  }

  getWebsite() : string {
    return this.website;
  }

  getHeader() : ElementFinder {
    return this.header;
  }

  getHeaderTitle() : ElementFinder {
    return this.headerTitle;
  }

  getHeaderDescription() : ElementFinder {
    return this.headerDescription;
  }

  getOptions() : ElementArrayFinder {
    return this.options;
  }

  getOptionsOneTitle() : ElementFinder {
    return this.optionsOneTitle;
  }

  getOptionsOneDescription() : ElementFinder {
    return this.optionsOneDescription;
  }

  getOptionsTwoTitle() : ElementFinder {
    return this.optionsTwoTitle;
  }

  getOptionsTwoDescription() : ElementFinder {
    return this.optionsTwoDescription;
  }

  getOptionsThreeTitle() : ElementFinder {
    return this.optionsThreeTitle;
  }

  getOptionsThreeDescription() : ElementFinder {
    return this.optionsThreeDescription;
  }

  getFeatures() : ElementFinder {
    return this.features;
  }

  getFeaturesContainer() : ElementFinder {
    return this.featuresContainer;
  }

  getFeaturesOptions() : ElementFinder {
    return this.featuresOptions;
  }

  getFeaturesOptionsEach() : ElementArrayFinder {
    return this.featuresOptionsEach;
  }

  getFeaturesOptionsOneTitle() : ElementFinder {
    return this.featuresOptionsOneTitle;
  }

  getFeaturesOptionsTwoTitle() : ElementFinder {
    return this.featuresOptionsTwoTitle;
  }

  getFeaturesOptionsThreeTitle() : ElementFinder {
    return this.featuresOptionsThreeTitle;
  }

  getFeaturesOptionsOneDescrition() : ElementFinder {
    return this.featuresOptionsOneDescription;
  }

  getFeaturesOptionsTwoDescription() : ElementFinder {
    return this.featuresOptionsTwoDescription;
  }

  getFeaturesOptionsThreeDescription() : ElementFinder {
    return this.featuresOptionsThreeDescription;
  }

  getCompleteFlightBookingSystem() : ElementFinder {
    return this.completeFlightBookingSystem;
  }

  getCompleteFlightBookingSystemDescription() : ElementFinder {
    return this.completeFlightBookingSystemDescription;
  }
}
