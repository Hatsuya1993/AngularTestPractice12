"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationPage = void 0;
const protractor_1 = require("protractor");
class IntegrationPage {
    constructor($main = protractor_1.$("main")) {
        this.$main = $main;
        this.website = "https://phptravels.com/integrations/";
        this.pageContents = this.$main.element(protractor_1.by.css(".container.module"));
        this.websiteTravelPort = this.$main.$("a[href*='phptravels.gumroad.com/l/utzhq']");
        this.websiteAmadeus = this.$main.$("a[href*='phptravels.gumroad.com/l/nevel']");
    }
    getWebsite() {
        return this.website;
    }
    getPageContent() {
        return this.pageContents;
    }
    getTravelPort() {
        return this.websiteTravelPort;
    }
    getAmadeus() {
        return this.websiteAmadeus;
    }
}
exports.IntegrationPage = IntegrationPage;
//# sourceMappingURL=integrationPage.js.map