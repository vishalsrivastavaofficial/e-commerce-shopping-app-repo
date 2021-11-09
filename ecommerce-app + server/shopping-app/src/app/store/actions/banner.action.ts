import { Action } from '@ngrx/store';
import { Banner } from '../models/banner.model';

export enum BannerActionType {
  GET_BANNERS = '[Banner] Get Banners',
  GET_BANNERS_SUCCESS = '[Banner] Get Banners Success',
  GET_BANNERS_FAIL = '[Banner] Get Banners Fail',
}
export class GetBannerAction implements Action {
  readonly type = BannerActionType.GET_BANNERS;
}
export class GetBannerSuccessAction implements Action {
  readonly type = BannerActionType.GET_BANNERS_SUCCESS;
  constructor(public payload: Banner[]) {}
}
export class GetBannerFailAction implements Action {
  readonly type = BannerActionType.GET_BANNERS_FAIL;
  constructor(public payload: any) {}
}

export type BannerAction =
  | GetBannerAction
  | GetBannerSuccessAction
  | GetBannerFailAction;
