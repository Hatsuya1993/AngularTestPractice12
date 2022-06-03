import {ElementFinder, $} from "protractor";

export class IntegrationPage {
  configuration : ElementFinder;

  constructor(private readonly $main : ElementFinder = $("main")) {
    this.configuration = this.$main.$("a[href='/startup/configuration']");
  }

  getDocsOption() : ElementFinder {
    return this.configuration;
  }
}
