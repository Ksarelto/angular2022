import { Component, Input } from '@angular/core';
import { IItem } from '../../models/item.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './itemsList.component.html',
  styleUrls: ['./itemsList.component.scss'],
})
export class ItemsListComponent {
  @Input() items: IItem[];
}
