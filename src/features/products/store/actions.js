import { SET_PRODUCTS, SET_PRODUCT_DETAIL, SET_PRODUCT_FILTER } from "./constans";

function setProductFilter(payload) {
  return {
    type: SET_PRODUCT_FILTER,
    payload
  }
}

function setProducts(payload) {
  return {
    type: SET_PRODUCTS,
    payload,
  };
}

function setProductDetail(payload) {
  return {
    type: SET_PRODUCT_DETAIL,
    payload,
  };
}

function getProducts() {
  return function (dispatch) {
    fetch("https://carallenglish.herokuapp.com/apis_product/List_Products")
      .then((response) => response.json())
      .then((products) => dispatch(setProducts(products)));
  };
}

function getCategories(id) {
  return function (dispatch) {
    fetch(
      `https://carallenglish.herokuapp.com/apis_category/List_Category_Products/${id}`
    )
      .then((response) => response.json())
      .then((products) => dispatch(setProducts(products.products)));
  };
}

function getProductDetail(id) {
  return function (dispatch) {
    fetch(
      `https://carallenglish.herokuapp.com/apis_product/Detail_Products/${id}`
    )
      .then((response) => response.json())
      .then((product) => dispatch(setProductDetail(product)));
  };
}

export { setProducts, setProductDetail, getProducts, getProductDetail, getCategories, setProductFilter };
