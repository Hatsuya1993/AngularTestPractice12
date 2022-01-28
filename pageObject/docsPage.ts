import {ElementFinder, $} from "protractor";

export class IntegrationPage {
  configuration : ElementFinder;

  constructor(private readonly $main = ("main")) {
    this.configuration = $("a[href='/startup/configuration']");
  }
}
