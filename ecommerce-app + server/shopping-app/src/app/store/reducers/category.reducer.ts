// import the interface
import { Category } from '../models/category.model';
import { CategoryAction, CategoryActionType } from '../actions/category.action';

export interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: string | any;
}

//create a dummy initial state
const initialState: CategoryState = {
  categories: [
    {
      name: 'Beverages',
      key: 'beverages',
      description:
        'Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ',
      enabled: true,
      order: 3,
      imageUrl: '/static/images/category/beverages.png',
      id: '5b675e5e5936635728f9fc30',
    },
  ],
  loading: false,
  error: '',
};

export function CategoryReducer(
  state: CategoryState = initialState,
  action: CategoryAction
) {
  switch (action.type) {
    case CategoryActionType.GET_CATEGORIES:
      return { ...state, loading: true };

    case CategoryActionType.GET_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload, loading: false };

    case CategoryActionType.GET_CATEGORIES_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
