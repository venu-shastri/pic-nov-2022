import { ILogger } from "./logger.contract";

export class ConsoleLoggerService implements ILogger{
    constructor(){
        console.log("Consologger Service Instantiated");
    }
    
    write(msg:string){
        console.log(msg);
    }

}