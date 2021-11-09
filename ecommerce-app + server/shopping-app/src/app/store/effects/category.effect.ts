import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { DataService } from '../../data.service';
import {
  CategoryActionType,
  GetCategoriesAction,
  GetCategoriesFailAction,
  GetCategoriesSuccessAction,
} from '../actions/category.action';

@Injectable()
export class CategoryEffects {
  @Effect() getCategories$ = this.actions$.pipe(
    ofType<GetCategoriesAction>(CategoryActionType.GET_CATEGORIES),
    mergeMap(() =>
      this.service.getCategories().pipe(
        map((data) => {
          return new GetCategoriesSuccessAction(data);
        }),
        catchError((error) => of(new GetCategoriesFailAction(error)))
      )
    )
  );

  constructor(private actions$: Actions, private service: DataService) {}
}
