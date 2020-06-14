import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthRoutes from "../features/auth/routes";
import ProductsRoutes from "../features/products/routes";
import ShoppingCarRoutes from "../features/shoping-car/routes";

const routes = [...AuthRoutes, ...ShoppingCarRoutes, ...ProductsRoutes];

function MainRoutes() {
  return (
    <Switch>
      {routes.map((route, index) =>
        !route.auth ? <Route {...route} key={index} /> : "NADA"
      )}
      <Redirect from="/" to="login" exact></Redirect>
      <Route to="*">
        <h1>No se encontro la ruta!!</h1>
      </Route>
    </Switch>
  );
}

export default MainRoutes;
