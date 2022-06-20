import {Config} from "protractor";
const Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");

// An example configuration file
export const config: Config = {
  // The address of a running selenium server.
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: "chrome",
  },
  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ["./testSpec/*.ts"],
  // restartBrowserBetweenTests: true,
  onPrepare: function() {
    jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: "./target/screenshots",
        }),
    );
  },
};
