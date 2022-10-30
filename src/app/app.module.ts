import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { ItemsReducer } from './ngrx/reducers/items.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ItemsEffects } from './ngrx/effects/items.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    AuthModule,
    StoreModule.forRoot({
      items: ItemsReducer,
    }),
    EffectsModule.forRoot([ItemsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
