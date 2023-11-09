import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitString'
})
export class SplitStringPipe implements PipeTransform {
  transform(value: string, separator: string = ' '): string {
    if (value) {
      return value.replace(new RegExp(`(.{4})`, 'g'), `$1${separator}`);
    }
    return value;
  }
}