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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nNGpzY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29uZmlnL2xvZzRqc2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLFlBQVk7SUFDdkI7SUFFQSxDQUFDO0lBRUQsR0FBRztRQUNELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDekMsK0RBQStEO1FBQy9ELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0NBQ0Y7QUFaRCxvQ0FZQyJ9