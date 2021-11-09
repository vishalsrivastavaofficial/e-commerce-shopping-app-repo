// import the interface

import { Banner } from '../models/banner.model';
import { BannerAction, BannerActionType } from '../actions/banner.action';

export interface BannerState {
  banners: Banner[];
  loading: boolean;
  error: string | any;
}

//create a dummy initial state
const initialState: BannerState = {
  banners: [
    {
      bannerImageUrl: '/static/images/offers/offer1.jpg',
      bannerImageAlt: 'Independence Day Deal - 25% off on shampoo',
      isActive: true,
      order: 1,
      id: '5b6c38156cb7d770b7010ccc',
    },
  ],
  loading: false,
  error: '',
};

export function BannerReducer(
  state: BannerState = initialState,
  action: BannerAction
) {
  switch (action.type) {
    case BannerActionType.GET_BANNERS:
      return { ...state, loading: true };

    case BannerActionType.GET_BANNERS_SUCCESS:
      return { ...state, banners: action.payload, loading: false };

    case BannerActionType.GET_BANNERS_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
