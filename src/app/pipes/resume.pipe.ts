import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  transform(value: string, limit: number): any {
    let myLimit = limit ? limit : 3;
    return value.substr(0, myLimit);
  }

}
