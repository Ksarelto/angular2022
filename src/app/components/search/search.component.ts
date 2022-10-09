import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() showSort: EventEmitter<any> = new EventEmitter();

  @Output() showList: EventEmitter<any> = new EventEmitter();

  showSortWidgets() {
    this.showSort.emit();
  }

  showItemsList(item: HTMLInputElement) {
    if (item.value !== '') {
      this.sortButtonShown = true;
      this.showList.emit();
    }
  }

  sortButtonShown = false;
}
