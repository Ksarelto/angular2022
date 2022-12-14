import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CoreService } from 'src/app/core/services/core.service';
import { IItem } from '../../models/item.model';
import { ISorting } from '../../models/sorting.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  constructor(private youtubeService: YoutubeService, private coreService: CoreService) {}

  sorting: ISorting;

  filter: string;

  items$: BehaviorSubject<IItem[]>;

  ngOnInit(): void {
    this.items$ = this.youtubeService.dataBase;
    this.coreService.sorting.subscribe((value) => (this.sorting = value));
    this.coreService.filtering.subscribe((value) => (this.filter = value));
  }
}
