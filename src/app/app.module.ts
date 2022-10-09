import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { InputComponent } from './components/input/input.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { ItemsListComponent } from './components/itemslist/itemsList.component';
import { AuthComponent } from './components/auth/auth.component';
import { ItemComponent } from './components/itemslist/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    InputComponent,
    SortingComponent,
    ItemsListComponent,
    AuthComponent,
    ItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
