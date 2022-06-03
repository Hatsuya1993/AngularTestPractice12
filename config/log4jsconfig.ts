export class Log4jsconfig {
  constructor() {

  }

  log(): any {
    const log4js = require("log4js");
    log4js.configure("./config/log4js.json");
    // var logger = log4js.getLogger(); //for both console and file
    const log = log4js.getLogger("default");
    return log;
  }
}
