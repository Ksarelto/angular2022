import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../models/item.model';

@Pipe({
  name: 'filterItems',
})
export class FilterItemsPipe implements PipeTransform {
  transform(items: IItem[], filter: string): IItem[] {
    return items.filter((i) => i.snippet.title.toLowerCase().includes(filter.toLowerCase()));
  }
}
