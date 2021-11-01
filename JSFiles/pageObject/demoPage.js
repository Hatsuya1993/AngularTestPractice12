"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPage = void 0;
const protractor_1 = require("protractor");
class DemoPage {
    constructor($main = protractor_1.$("#Main")) {
        this.$main = $main;
        this.website = "https://phptravels.com/demo/";
        this.title = protractor_1.$("#PHPTRAVELS");
    }
}
exports.DemoPage = DemoPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtb1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L2RlbW9QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUE4QztBQUU5QyxNQUFhLFFBQVE7SUFLakIsWUFBNkIsUUFBUSxjQUFDLENBQUMsT0FBTyxDQUFDO1FBQWxCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyw4QkFBOEIsQ0FBQTtRQUM3QyxJQUFJLENBQUMsS0FBSyxHQUFHLGNBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0NBRUo7QUFWRCw0QkFVQyJ9