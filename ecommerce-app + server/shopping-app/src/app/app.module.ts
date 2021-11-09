import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BannerEffects } from './store/effects/banner.effect';
import { CategoryEffects } from './store/effects/category.effect';
import { ProductEffects } from './store/effects/product.effect';
import { reducers } from './store/models/app-state.model';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductEffects, CategoryEffects, BannerEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
