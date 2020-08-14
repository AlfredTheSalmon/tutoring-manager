import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatString'
})
export class FormatStringPipe implements PipeTransform {

  transform(value: string, replacement?: string): any {
    if (value == null || value == '') {
      return replacement == null ? '-' : replacement;
    }
    return value;
  }

}
