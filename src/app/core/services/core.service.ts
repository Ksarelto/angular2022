import { Injectable } from '@angular/core';
import { ISorting } from '../models/sorting.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  sorting = new BehaviorSubject<ISorting>({
    asc: true,
    type: '',
  });

  filtering = new BehaviorSubject<string>('');

  set sort(sort: ISorting) {
    this.sorting.next(sort);
  }

  set filter(filter: string) {
    this.filtering.next(filter);
  }
}
