import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_FORM_STEP,
  RESET_STATE,
  DISABLE_STEP,
  ADD_PRODUCT_QUANTITY,
  DISCOUNT_PRODUCT_QUANTITY,
} from "./constans";

import initialState from "./state";

function ShoppingCarReducer(state = initialState, action) {
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

    case ADD_PRODUCT_QUANTITY: {
      const index = state.productsAdded
        .map((item) => item.id)
        .indexOf(action.payload.id);

      if (index > 0) {
        state.productsAdded[index].total = parseFloat(action.total);
        state.productsAdded[index].priceTotal =
          action.payload.list_price[0].pricesale *
          state.productsAdded[index].total;
        return Object.assign({}, state, {
          productsAdded: [...state.productsAdded],
        });
      }
    }

    case REMOVE_PRODUCT:
      return Object.assign({}, state, {
        productsAdded: state.productsAdded.filter((product) => {
          return product.id !== action.payload.id;
        }),
      });
    // return state;

    case SET_FORM_STEP:
      return Object.assign({}, state, {
        form: {
          ...state.form,
          [`step_${action.payload.step}`]: action.payload.data,
        },
      });

    case RESET_STATE:
      return Object.assign({}, initialState);

    case DISABLE_STEP:
      return Object.assign({}, state, {
        disabledStep: action.payload,
      });

    default:
      return state;
  }
}

export default ShoppingCarReducer;
