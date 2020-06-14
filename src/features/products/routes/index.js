import Products from "../Products";
import ProductDetail from "../ProductDetail";

const ProductsRoutes = [
  {
    path: "/",
    component: Products,
    auth: false,
    exact: true,
  },
  {
    path: "/categorie/:id",
    component: Products,
    auth: false,
    exact: true,
  },
  {
    path: "/:detail",
    component: ProductDetail,
    auth: false,
  },
];

export default ProductsRoutes;
