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
          0: "Any",
          1: "Active",
          2: "Deleted",
          3: "Canceled",
          ANY: "Any",
          ACTIVE: "Active",
          DELETED: "Deleted",
          CANCELED: "Canceled"
        },
        year: {
          FIRST: "1st",
          SECOND: "2nd",
          THIRD: "3rd",
          FOURTH: "4th",
          FIFTH: "5th",
          SIXTH: "6th",
          SEVENTH: "7th",
          EIGHTH: "8th",
          NINTH: "9th",
          TENTH: "10th",
          ELEVENTH: "11th",
          TWELFTH: "12th",
          COLLEGE: "College"
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