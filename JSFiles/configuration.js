"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.config = void 0;
// An example configuration file
exports.config = {
  // The address of a running selenium server.
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  framework: "jasmine",
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: "chrome",
  },
  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ["./testSpec/hotelModulePage.js"],
  // restartBrowserBetweenTests: true,
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 2500000,
  },
};
// # sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsZ0NBQWdDO0FBQ25CLFFBQUEsTUFBTSxHQUFXO0lBQzVCLDRDQUE0QztJQUM1QyxtREFBbUQ7SUFDbkQsYUFBYSxFQUFFLElBQUk7SUFDbkIsU0FBUyxFQUFFLFNBQVM7SUFDcEIsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBQ0QsdUVBQXVFO0lBQ3ZFLDJDQUEyQztJQUMzQyxrQ0FBa0M7SUFDbEMsS0FBSyxFQUFFLENBQUMsd0JBQXdCLENBQUM7SUFDakMsb0NBQW9DO0lBRXBDLHdDQUF3QztJQUN4QyxlQUFlLEVBQUU7UUFDZixVQUFVLEVBQUUsSUFBSTtRQUNoQixzQkFBc0IsRUFBRSxPQUFPO0tBQ2hDO0NBQ0YsQ0FBQyJ9
