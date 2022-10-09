import { Component } from '@angular/core';
import { IDataBase } from './models/response.model';
import * as db from '../dataBase.json';
import { ISorting } from './models/sorting.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private dataBase: IDataBase;

  showSort = false;

  sorting: ISorting;

  filter: string = '';

  get data(): IDataBase {
    return this.dataBase;
  }

  set data(newData) {
    this.dataBase = newData;
  }

  downloadDb() {
    this.data = db;
  }

  sortItems($event: MouseEvent) {
    if (this.sorting?.type !== ($event.target as HTMLInputElement).name) {
      this.sorting = {
        type: ($event.target as HTMLInputElement).name,
        asc: true,
      };
    } else {
      this.sorting = { ...this.sorting, asc: !this.sorting?.asc };
    }
  }

  itemsFilter($event: Event) {
    this.filter = ($event.target as HTMLInputElement).value;
  }
}
