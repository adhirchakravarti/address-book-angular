import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contact.model';

@Pipe({
  name: 'filterContact'
})
export class FilterContactPipe implements PipeTransform {

  transform(value: Contact[], filterString: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const myRe = new RegExp(filterString, 'gi');
    const resultArray: Contact[] = [];
    for (const item of value) {
      if ((item.name.search(myRe) !== -1) || (item.phone.search(myRe) !== -1) || (item.email.search(myRe) !== -1)) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
