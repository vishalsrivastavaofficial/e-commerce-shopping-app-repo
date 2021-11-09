import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatagoryCatalogComponent } from './catagory-catalog/catagory-catalog.component';
import { SharedModule } from '../shared/shared.module';
import { OwlModule } from 'ngx-owl-carousel';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [DashboardComponent, CatagoryCatalogComponent, BannerComponent],
  imports: [CommonModule, HomepageRoutingModule, SharedModule, OwlModule],
})
export class HomepageModule {}
