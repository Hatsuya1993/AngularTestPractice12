"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationPage = void 0;
const protractor_1 = require("protractor");
class IntegrationPage {
    constructor($main = protractor_1.$("main")) {
        this.$main = $main;
        this.configuration = this.$main.$("a[href='/startup/configuration']");
    }
    getDocsOption() {
        return this.configuration;
    }
}
exports.IntegrationPage = IntegrationPage;
//# sourceMappingURL=docsPage.js.map