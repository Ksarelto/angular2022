import { selectRemoteItems } from './../../../ngrx/selectors/items.selector';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreService } from 'src/app/core/services/core.service';
import { IItem } from '../../models/item.model';
import { ISorting } from '../../models/sorting.model';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/ngrx/models/state.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  constructor(private coreService: CoreService, private store: Store<IState>) {}

  sorting: ISorting;

  filter: string;

  items$: Observable<IItem[]>;

  ngOnInit(): void {
    this.items$ = this.store.select(selectRemoteItems);
    this.coreService.sorting.subscribe((value) => (this.sorting = value));
    this.coreService.filtering.subscribe((value) => (this.filter = value));
  }
}
