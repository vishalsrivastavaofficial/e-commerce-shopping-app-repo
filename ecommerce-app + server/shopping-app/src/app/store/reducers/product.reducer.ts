// import the interface
import { Product } from '../models/product.model';
import { ProductAction, ProductActionType } from '../actions/product.action';

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | any;
}

//create a dummy initial state
const initialState: ProductState = {
  products: [
    {
      name: 'Fresho Kiwi - Green, 3 pcs',
      imageURL: '/static/images/products/fruit-n-veg/kiwi-green.jpg',
      description:
        'Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.',
      price: 87,
      stock: 50,
      category: '5b6899953d1a866534f516e2',
      sku: 'fnw-kiwi-3',
      id: '5b6c6a7f01a7c38429530883',
    },
  ],
  loading: false,
  error: '',
};

export function ProductReducer(
  state: ProductState = initialState,
  action: ProductAction
) {
  switch (action.type) {
    case ProductActionType.GET_PRODUCTS:
      return { ...state, loading: true };

    case ProductActionType.GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, loading: false };

    case ProductActionType.GET_PRODUCTS_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
