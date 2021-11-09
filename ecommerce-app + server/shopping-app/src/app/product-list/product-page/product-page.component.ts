import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { GetCategoriesAction } from 'src/app/store/actions/category.action';
import { GetProductsAction } from 'src/app/store/actions/product.action';
import AppState from 'src/app/store/models/app-state.model';
import { Category } from 'src/app/store/models/category.model';
import { Product } from 'src/app/store/models/product.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  products$!: Observable<Product[]>;
  categories$!: Observable<Category[]>;
  loading$!: Observable<Boolean>;
  errorProduct$!: Observable<Error>;
  errorCategory$!: Observable<Error>;

  productsDisplay$!: Observable<Product[]>;

  selectedId: string = '';
  routedId: any = '';

  constructor(private store: Store<AppState>, private location: Location) {}

  ngOnInit(): void {
    this.products$ = this.store.select((store) => store.product.products);
    this.categories$ = this.store.select((store) => store.category.categories);
    this.errorProduct$ = this.store.select((store) => store.product.error);
    this.errorCategory$ = this.store.select((store) => store.category.error);
    this.store.dispatch(new GetProductsAction());
    this.store.dispatch(new GetCategoriesAction());
    this.productsDisplay$ = this.products$;
    this.routedId = this.location.getState();

    if (this.routedId.id) {
      this.filterItems(this.routedId.id);
    }
  }

  filterItems(categoryId: string) {
    if (this.selectedId == categoryId) {
      this.productsDisplay$ = this.products$;
      this.selectedId = '';
    } else {
      this.selectedId = categoryId;
      this.productsDisplay$ = this.products$;
      this.productsDisplay$ = this.products$.pipe(
        map((products) =>
          products.filter((product) => product.category == categoryId)
        )
      );
    }
  }
}
