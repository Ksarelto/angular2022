import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthComponent } from './components/auth/auth.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './pages/main/main.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    AuthComponent,
    SortingComponent,
    SearchComponent,
    MainComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [
    NotFoundComponent,
    HeaderComponent,
    AuthComponent,
    SortingComponent,
    SearchComponent,
    MainComponent,
  ],
})
export class CoreModule {}
