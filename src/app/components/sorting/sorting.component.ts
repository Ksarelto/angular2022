import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent {
  @Output() sort: EventEmitter<any> = new EventEmitter();

  @Output() filter: EventEmitter<any> = new EventEmitter();

  sortingModes: string[] = ['date', 'count of views', 'by word or sentence'];

  sortItems($event: MouseEvent) {
    this.sort.emit($event);
  }

  filterItems($event: Event) {
    this.filter.emit($event);
  }
}
