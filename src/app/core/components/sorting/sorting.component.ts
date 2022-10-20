import { Component, OnInit } from '@angular/core';
import { ISorting } from '../../models/sorting.model';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent implements OnInit {
  sort: ISorting;

  constructor(private coreService: CoreService) {}

  ngOnInit(): void {
    this.coreService.sorting.subscribe((value) => (this.sort = value));
  }

  sortingModes: string[] = ['date', 'count of views', 'by word or sentence'];

  sortItems($event: MouseEvent) {
    if (this.sort?.type !== ($event.target as HTMLInputElement).name) {
      this.coreService.sort = {
        type: ($event.target as HTMLInputElement).name,
        asc: true,
      };
    } else {
      this.coreService.sort = { ...this.sort, asc: !this.sort?.asc };
    }
  }

  itemsFilter($event: Event) {
    this.coreService.filter = ($event.target as HTMLInputElement).value;
  }
}
