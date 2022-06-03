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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jc1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L2RvY3NQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUE0QztBQUU1QyxNQUFhLGVBQWU7SUFHMUIsWUFBNkIsUUFBd0IsY0FBQyxDQUFDLE1BQU0sQ0FBQztRQUFqQyxVQUFLLEdBQUwsS0FBSyxDQUE0QjtRQUM1RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBVkQsMENBVUMifQ==