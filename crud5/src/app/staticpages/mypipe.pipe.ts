import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string, email: string): string {
    if (email === 'ggg@ggg') {
      return 'Mr ' + value;
    }
    else {
      return 'Miss ' + value;
    }
  }

}
