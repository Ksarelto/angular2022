import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IItem } from '../../models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  constructor(private router: Router) {}

  @Input() item: IItem;

  openDetails() {
    this.router.navigate(['main', 'details', this.item.id]);
  }
}
