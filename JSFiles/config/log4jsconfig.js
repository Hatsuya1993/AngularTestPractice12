"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log4jsconfig = void 0;
class Log4jsconfig {
    constructor() {
    }
    log() {
        const log4js = require("log4js");
        log4js.configure("./config/log4js.json");
        // var logger = log4js.getLogger(); //for both console and file
        const log = log4js.getLogger("default");
        return log;
    }
}
exports.Log4jsconfig = Log4jsconfig;
//# sourceMappingURL=log4jsconfig.js.map