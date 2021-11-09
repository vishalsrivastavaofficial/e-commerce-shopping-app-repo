import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  ProductActionType,
  GetProductsAction,
  GetProductsSuccessAction,
  GetProductsFailAction,
} from '../../store/actions/product.action';
import { DataService } from '../../data.service';

@Injectable()
export class ProductEffects {
  @Effect() getPosts$ = this.actions$.pipe(
    ofType<GetProductsAction>(ProductActionType.GET_PRODUCTS),
    mergeMap(() =>
      this.service.getProducts().pipe(
        map((data) => {
          return new GetProductsSuccessAction(data);
        }),
        catchError((error) => of(new GetProductsFailAction(error)))
      )
    )
  );

  constructor(private actions$: Actions, private service: DataService) {}
}
