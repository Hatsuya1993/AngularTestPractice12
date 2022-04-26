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
}
