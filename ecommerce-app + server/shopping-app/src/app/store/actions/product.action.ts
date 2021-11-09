import { Action } from '@ngrx/store';
import { Product } from '../models/product.model';
export enum ProductActionType {
  GET_PRODUCTS = '[Product] Get Products',
  GET_PRODUCTS_SUCCESS = '[Product] Get Products Success',
  GET_PRODUCTS_FAIL = '[Product] Get Products Fail',
}
export class GetProductsAction implements Action {
  readonly type = ProductActionType.GET_PRODUCTS;
}
export class GetProductsSuccessAction implements Action {
  readonly type = ProductActionType.GET_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}
export class GetProductsFailAction implements Action {
  readonly type = ProductActionType.GET_PRODUCTS_FAIL;
  constructor(public payload: any) {}
}

export type ProductAction =
  | GetProductsAction
  | GetProductsSuccessAction
  | GetProductsFailAction;
