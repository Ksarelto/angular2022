import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'filterDate',
})
export class FilterDatePipe implements PipeTransform {
  transform(date: string | undefined): string {
    return moment(date).format('dddd, MMMM DD, YYYY');
  }
}
