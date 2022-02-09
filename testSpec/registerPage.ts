import {browser} from "protractor";
import {globalData} from "../helper/global";
import {Helper} from "../helper/helper";
import {RegisterDetails, RegisterPage} from "../pageObject/registerPage";

describe("Testing registerPage", () => {
  const registerPage = new RegisterPage();

  const accountRegister : Partial<RegisterDetails> = {
    firstName: "FirstNameTest"+ new Date().getTime() / 1000,
    lastName: "LastNameTest"+ new Date().getTime() / 1000,
    email: + new Date().getTime() / 1000+"@test.com",
    phoneNumber: "1234567890",
    companyName: "testCompanyName",
    streetAddress: "testStreetAddress",
    streetAddress2: "testStreetAddress2",
    city: "testCity",
    state: "testState",
    country: "Singapore",
    mobile: "1234567890",
    password: "testPassword12345",
    confirmPassword: "testPassword12345",
    postCode: "12345",
  };

  const noMatchPassword : Partial<RegisterDetails> = {
    password: "testPassword12345",
    confirmPassword: "testPassword1234",
  };

  const errorRegister : Partial<RegisterDetails> = {
    firstName: "FirstNameTest"+ new Date().getTime() / 1000,
    lastName: "LastNameTest"+ new Date().getTime() / 1000,
    streetAddress: "testStreetAddress",
    city: "testCity",
    state: "testState",
    country: "Singapore",
  };

  beforeEach( async () => {
    browser.waitForAngularEnabled(false);
    await browser.get(registerPage.website);
    await browser.manage().window().maximize();
    await browser.sleep(globalData["WAIT_TIME"]["WAIT_LONG"]);
  });

  afterEach( async () => {
    await browser.close();
  });

  it("Correct link for docs php travels", async () => {
    expect(await browser.getCurrentUrl()).toContain("register");
  });

  it("Register title should be correct", async () => {
    expect(await registerPage.registerTitle.isDisplayed()).toBeTruthy();
    expect(await registerPage.registerTitle.getText()).toBe("Register");
  });

  it("First name should be displayed with the correct label", async () => {
    expect(await registerPage.labelForFirstName.isDisplayed()).toBeTruthy();
    expect(await registerPage.labelForFirstName.getText()).toBe("First Name");
  });

  it("Last name should be displayed with the correct label", async () => {
    expect(await registerPage.labelForLastName.isDisplayed()).toBeTruthy();
    expect(await registerPage.labelForLastName.getText()).toBe("Last Name");
  });

  it("Email address should be displayed with the correct label", async () => {
    expect(await registerPage.labelForEmailAddress.isDisplayed()).toBeTruthy();
    expect(await registerPage.labelForEmailAddress.getText()).toBe("Email Address");
  });

  it("Phone number should be displayed with the correct label", async () => {
    expect(await registerPage.labelForPhone.isDisplayed()).toBeTruthy();
    expect(await registerPage.labelForPhone.getText()).toBe("Phone Number");
  });

  it("Company name should be displayed with the correct label", async () => {
    expect(await registerPage.labelForCompanyName.isDisplayed()).toBeTruthy();
    expect(await registerPage.labelForCompanyName.getText()).toBe("Company Name (Optional)");
  });

  it("Street address should be displayed with the correct label", async () => {
    expect(await registerPage.labelStreetAddress.isDisplayed()).toBeTruthy();
    expect(await registerPage.labelStreetAddress.getText()).toBe("Street Address");
  });

  it("Street address 2 should be displayed with the correct label", async () => {
    expect(await registerPage.labelStreetAddress2.isDisplayed()).toBeTruthy();
    expect(await registerPage.labelStreetAddress2.getText()).toBe("Street Address 2");
  });

  it("City should be displayed with the correct label", async () => {
    expect(await registerPage.labelCity.isDisplayed()).toBeTruthy();
    expect(await registerPage.labelCity.getText()).toBe("City");
  });

  it("State should be displayed with the correct label", async () => {
    expect(await registerPage.labelState.isDisplayed()).toBeTruthy();
    expect(await registerPage.labelState.getText()).toBe("State (Optional)");
  });

  it("Postcode should be displayed with the correct label", async () => {
    expect(await registerPage.labelPostCode.isDisplayed()).toBeTruthy();
    expect(await registerPage.labelPostCode.getText()).toBe("Postcode (Optional)");
  });

  it("Country should be displayed with the correct label", async () => {
    expect(await registerPage.labelCountry.isDisplayed()).toBeTruthy();
    expect(await registerPage.labelCountry.getText()).toBe("Country");
  });

  fit("Mobile should be displayed with the correct label", async () => {
    expect(await registerPage.labelMobile.isDisplayed()).toBeTruthy();
    expect(await registerPage.labelMobile.getText()).toBe("Mobile");
  });

  it("Register flow success", async () => {
    await registerPage.fill(accountRegister);
    await Helper.handleIframe(registerPage.reCaptcha);
    await Helper.clickItem(registerPage.captchaBox);
    await Helper.clickItem(registerPage.captchaBox);
    await Helper.handleExitIframe();
    await Helper.clickItem(registerPage.registerButton);
    expect(await browser.getCurrentUrl()).toContain("clientarea");
  });

  it("Error when email address is invalid", async () => {
    await registerPage.fill(noMatchPassword);
    expect(await registerPage.noMatchPassword.isDisplayed()).toBeTruthy();
  });


  it("Error when data is invalid", async () => {
    await registerPage.fill(errorRegister);
    await Helper.clickItem(registerPage.registerButton);
    expect(await registerPage.errorAlert.isDisplayed()).toBeTruthy();
  });
});
