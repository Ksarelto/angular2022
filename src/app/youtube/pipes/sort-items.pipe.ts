import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../models/item.model';
import { ISorting } from '../models/sorting.model';

@Pipe({
  name: 'sortItems',
})
export class SortItemsPipe implements PipeTransform {
  transform(items: IItem[] | null, sortConfig: ISorting): IItem[] {
    if (!items) {
      return [];
    }

    const sortedItems = [...items];

    if (sortConfig?.type === 'date') {
      sortedItems.sort((a, b) =>
        sortConfig.asc
          ? new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime()
          : new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime(),
      );
    }

    if (sortConfig?.type === 'count of views') {
      sortedItems.sort((a, b) =>
        sortConfig.asc
          ? parseInt(a.statistics.viewCount) - parseInt(b.statistics.viewCount)
          : parseInt(b.statistics.viewCount) - parseInt(a.statistics.viewCount),
      );
    }

    return sortedItems;
  }
}
