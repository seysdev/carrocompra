import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_FORM_STEP,
  RESET_STATE,
} from "./constans";

import initialState from "./state";

function ShoppingCarReducer(state = initialState, action) {
  console.log("action", action);
  switch (action.type) {
    case ADD_PRODUCT:
      const found = state.productsAdded.find(
        (el) => el.id === action.payload.id
      );
      const index = state.productsAdded
        .map((item) => item.id)
        .indexOf(action.payload.id);

      if (!found) {
        action.payload.total = 1;
        action.payload.priceTotal =
          action.payload.list_price[0].pricesale * action.payload.total;
        return Object.assign({}, state, {
          productsAdded: [...state.productsAdded, action.payload],
        });
      } else {
        state.productsAdded[index].total =
          state.productsAdded[index].total + action.total;
        state.productsAdded[index].priceTotal =
          action.payload.list_price[0].pricesale *
          state.productsAdded[index].total;
        return Object.assign({}, state, {
          productsAdded: [...state.productsAdded],
        });
      }

    case REMOVE_PRODUCT:
      state.productsAdded.filter((product) => {
        console.log(product);
        console.log(action.payload);
        //product.id !== action.payload.id
      });
      return Object.assign({}, state, {
        productsAdded: state.productsAdded.filter((product) => {
          return product.id !== action.payload.id;
        }),
      });

    case SET_FORM_STEP:
      return Object.assign({}, state, {
        form: {
          ...state.form,
          [`step_${action.payload.step}`]: action.payload.data,
        },
      });

    case RESET_STATE:
      return Object.assign({}, initialState);
      
    default:
      return state;
  }
}

export default ShoppingCarReducer;
