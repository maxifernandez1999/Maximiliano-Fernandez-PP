import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eatable'
})
export class EatablePipe implements PipeTransform {

  transform(value: boolean): string {
    return value === true ? 'Yes' : 'No';
  }

}
