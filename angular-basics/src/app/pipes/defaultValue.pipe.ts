import {Pipe,PipeTransform} from '@angular/core'
export class DefaultValuePipe implements PipeTransform{

    transform(value: any):string {
        return "Enter Value other than zero";
    }

}