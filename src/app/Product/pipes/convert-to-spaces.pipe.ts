import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";

@Pipe({
name:"ConvertToSpacepipe"
})
export class ConvertToSpacesPipe implements PipeTransform{
  
  transform(value: string, character: string) : string {
    return value.replace(character," ");
  }

}