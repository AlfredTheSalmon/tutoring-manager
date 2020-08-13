import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})

export class TranslatePipe implements PipeTransform {

  constructor() { }

  public language = 'pt';

  private dictionary: { [key: string]: TranslationSet } = {
    pt: {
      languange: 'pt',
      values: {
        gender: {
          // Types
          1: 'Male',
          0: 'Female'
        },
        userStatus: {
          ACTIVE: "Active",
          DELETED: "Deleted",
          CANCELED: "Canceled"
        }
      }
    }
  }
  transform(value: any, mode: string): any {
    if (value == null) {
      return '-';
    }

    if (this.dictionary[this.language] != null) {
      if (this.dictionary[this.language].values[mode] != null) {
        if (this.dictionary[this.language].values[mode][value] != null) {
          return this.dictionary[this.language].values[mode][value];
        }
      }
    }
    return value;
  }

}

export class TranslationSet {
  public languange: string;
  public values: { [key: string]: { [key: string]: string } };
}