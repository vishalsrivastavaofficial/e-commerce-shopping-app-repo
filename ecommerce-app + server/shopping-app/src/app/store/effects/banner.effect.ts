import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { DataService } from '../../data.service';
import {
  BannerActionType,
  GetBannerAction,
  GetBannerFailAction,
  GetBannerSuccessAction,
} from '../actions/banner.action';

@Injectable()
export class BannerEffects {
  @Effect() getBanners$ = this.actions$.pipe(
    ofType<GetBannerAction>(BannerActionType.GET_BANNERS),
    mergeMap(() =>
      this.service.getBanners().pipe(
        map((data) => {
          return new GetBannerSuccessAction(data);
        }),
        catchError((error) => of(new GetBannerFailAction(error)))
      )
    )
  );

  constructor(private actions$: Actions, private service: DataService) {}
}
