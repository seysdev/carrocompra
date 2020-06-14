import { combineReducers } from "redux";
import ProductsReducer from "../features/products/store/reducers";
import ShoppingCarReducer from "../features/shoping-car/store/reducers";
import AuthReducer from "../features/auth/store/reducers";

const allReducer = combineReducers({
  products: ProductsReducer,
  shoppingCar: ShoppingCarReducer,
  auth: AuthReducer,
});

export default allReducer;
