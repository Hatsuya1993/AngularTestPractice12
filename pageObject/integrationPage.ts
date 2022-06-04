import {ElementFinder, $, by} from "protractor";

export class IntegrationPage {
  website : string;
  pageContents : ElementFinder;
  websiteTravelPort : ElementFinder;
  websiteAmadeus : ElementFinder;


  constructor(private readonly $main : ElementFinder = $("main")) {
    this.website = "https://phptravels.com/integrations/";
    this.pageContents = this.$main.element(by.css(".container.module"));
    this.websiteTravelPort = this.$main.$("a[href*='phptravels.gumroad.com/l/utzhq']");
    this.websiteAmadeus = this.$main.$("a[href*='phptravels.gumroad.com/l/nevel']");
  }

  getWebsite() : string {
    return this.website;
  }

  getPageContent() : ElementFinder {
    return this.pageContents;
  }

  getTravelPort() : ElementFinder {
    return this.websiteTravelPort;
  }

  getAmadeus() : ElementFinder {
    return this.websiteAmadeus;
  }
}
