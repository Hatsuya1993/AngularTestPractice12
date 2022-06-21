import {Config} from "protractor";

// An example configuration file
export const config: Config = {
  // The address of a running selenium server.
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  // Capabilities to be passed to the webdriver instance.
  // capabilities: {
  //   browserName: "chrome",
  // },
  multiCapabilities: [{
    browserName: "chrome",
  },
  {
    browserName: "chrome",
  },
  ],
  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ["./testSpec/*.ts"],
  // restartBrowserBetweenTests: true,
  onPrepare: function() {
    const AllureReporter = require("jasmine-allure-reporter");
    jasmine.getEnv().addReporter(
        new AllureReporter({
          resultsDir: "target/allure-results",
        }),
    );
  },
};
