import {ElementFinder} from "protractor";
import {Helper} from "../helper/helper";
import {IntegrationPage} from "../pageObject/integrationPage";

export class ViewToPage {
  constructor(private readonly $main = ("main")) {

  }

  public async moveToIntegrate(item : ElementFinder) {
    await Helper.clickItem(item);
    return new IntegrationPage();
  }
}
