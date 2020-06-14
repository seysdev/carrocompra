import { ADD_PRODUCT, REMOVE_PRODUCT, SET_FORM_STEP, RESET_STATE } from "./constans";

function addProduct(payload, total = 1) {
  return {
    type: ADD_PRODUCT,
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
    type: RESET_STATE
  }
}

export { addProduct, removeProduct, setFormStep, resetState };
