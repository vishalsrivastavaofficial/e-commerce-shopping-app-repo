import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductPageComponent } from './product-page/product-page.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [ProductPageComponent, ProductComponent],
  imports: [CommonModule, ProductListRoutingModule, SharedModule],
})
export class ProductListModule {}
