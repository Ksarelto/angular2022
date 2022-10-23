import { Component, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() showSort: EventEmitter<any> = new EventEmitter();

  @Output() showList: EventEmitter<any> = new EventEmitter();

  searchValue = new BehaviorSubject<string>('');

  sortButtonShown = false;

  constructor() {
    this.searchValue.pipe(debounceTime(400)).subscribe((value) => {
      if (value.length >= 3) {
        this.sortButtonShown = true;
        this.showList.emit(value);
      }
    });
  }

  searchItems($event: Event) {
    const { value } = $event.target as HTMLInputElement;
    this.searchValue.next(value);
  }

  showSortWidgets() {
    this.showSort.emit();
  }
}
