import {$, by, ElementArrayFinder, ElementFinder} from "protractor";

export class FlightReservationModulePage {
  private readonly website : string;
  private readonly header : ElementFinder;
  private readonly headerTitle : ElementFinder;
  private readonly headerDescription : ElementFinder;
  private readonly options : ElementArrayFinder;
  private readonly optionsOneTitle : ElementFinder;

  constructor(private readonly $main : ElementFinder = $("body")) {
    this.website = "https://phptravels.com/flights-module-features/";
    this.header = this.$main.$(".BS-header");
    this.headerTitle = this.$main.$("#header-title");
    this.headerDescription = this.$main.$("#header-description");
    this.options = this.$main.$$(".container-outer[style='overflow:hidden; ']");
    this.optionsOneTitle = this.$main.element(by.cssContainingText("h2", "Search filter and reserve flights tickets"));
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
}
