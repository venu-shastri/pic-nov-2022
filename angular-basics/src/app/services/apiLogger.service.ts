import { ILogger } from "./logger.contract";

export class ApiLoggerService implements ILogger{

    write(msg:string){
        console.log("ApiLoggerService Logging,,,,,",msg);
    }
}