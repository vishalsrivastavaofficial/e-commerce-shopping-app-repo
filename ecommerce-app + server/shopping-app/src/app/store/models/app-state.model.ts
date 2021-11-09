import { ActionReducerMap } from '@ngrx/store';
import { BannerReducer, BannerState } from '../reducers/banner.reducer';
import { CategoryReducer, CategoryState } from '../reducers/category.reducer';
import { ProductReducer, ProductState } from '../reducers/product.reducer';

export default interface AppState {
  readonly product: ProductState;
  readonly category: CategoryState;
  readonly banner: BannerState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  product: ProductReducer,
  category: CategoryReducer,
  banner: BannerReducer,
};
