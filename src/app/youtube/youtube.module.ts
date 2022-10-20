import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './pages/details/details.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { BorderColorDirective } from './directives/border-color.directive';
import { FilterItemsPipe } from './pipes/filter-items.pipe';
import { SortItemsPipe } from './pipes/sort-items.pipe';
import { ItemsComponent } from './pages/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterDatePipe } from './pipes/filter-date.pipe';

@NgModule({
  declarations: [
    DetailsComponent,
    BorderColorDirective,
    FilterItemsPipe,
    SortItemsPipe,
    FilterDatePipe,
    ItemsComponent,
    ItemComponent,
  ],
  imports: [CommonModule, YoutubeRoutingModule, SharedModule],
})
export class YoutubeModule {}
