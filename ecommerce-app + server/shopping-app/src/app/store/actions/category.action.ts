import { Action } from '@ngrx/store';
import { Category } from '../models/category.model';

export enum CategoryActionType {
  GET_CATEGORIES = '[Category] Get Categories',
  GET_CATEGORIES_SUCCESS = '[Category] Get Categories Success',
  GET_CATEGORIES_FAIL = '[Category] Get Categories Fail',
}
export class GetCategoriesAction implements Action {
  readonly type = CategoryActionType.GET_CATEGORIES;
}
export class GetCategoriesSuccessAction implements Action {
  readonly type = CategoryActionType.GET_CATEGORIES_SUCCESS;
  constructor(public payload: Category[]) {}
}
export class GetCategoriesFailAction implements Action {
  readonly type = CategoryActionType.GET_CATEGORIES_FAIL;
  constructor(public payload: any) {}
}

export type CategoryAction =
  | GetCategoriesAction
  | GetCategoriesSuccessAction
  | GetCategoriesFailAction;
