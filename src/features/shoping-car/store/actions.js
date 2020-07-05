import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_FORM_STEP,
  RESET_STATE,
  DISABLE_STEP,
  ADD_PRODUCT_QUANTITY,
  DISCOUNT_PRODUCT_QUANTITY,
} from "./constans";

function addProduct(payload, total = 1) {
  return {
    type: ADD_PRODUCT,
    payload,
    total,
  };
}

function addProductQuantity(payload, total) {
  return {
    type: ADD_PRODUCT_QUANTITY,
    payload,
    total,
  };
}

function discountProductQuantity(payload, total) {
  return {
    type: DISCOUNT_PRODUCT_QUANTITY,
    payload,
    total,
  };
}

function removeProduct(payload) {
  return {
    type: REMOVE_PRODUCT,
    payload,
  };
}

function setFormStep(data, step) {
  return {
    type: SET_FORM_STEP,
    payload: {
      data,
      step,
    },
  };
}

function resetState() {
  return {
    type: RESET_STATE,
  };
}

function disableStep(payload) {
  return {
    type: DISABLE_STEP,
    payload,
  };
}

export {
  addProduct,
  removeProduct,
  setFormStep,
  resetState,
  disableStep,
  addProductQuantity,
  discountProductQuantity,
};
