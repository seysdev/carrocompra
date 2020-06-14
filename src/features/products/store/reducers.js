import {
  SET_PRODUCTS,
  SET_PRODUCT_DETAIL,
} from "./constans";
import initialState from "./state";

function ProductsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return Object.assign({}, state, {
        products: action.payload,
      });
    case SET_PRODUCT_DETAIL:
      return Object.assign({}, state, {
        productDetail: action.payload,
      });
    default:
      return state;
  }
}

export default ProductsReducer;
