import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import { logout } from "../../features/auth/store/actions";
import { Link } from "react-router-dom";

import NavUser from "../NavUser";
import NavShoppingCar from "../NavShoppingCar";
import Categories from "../Categories";
import "./Header.scss";

function Header({ className }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.auth.user);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      "https://carallenglish.herokuapp.com/apis_category/List_All_Categorys/"
    )
      .then((response) => response.json())
      .then((categories) => setCategories(categories));
  }, []);
  return (
    <header className={classNames("header", className)}>
      <div className="container">
        <div className="header__top flex jc-between ai-center">
          <Link to={"/"}>CARRITO DE COMPRA</Link>
          <div className="header__row">
            <NavUser
              text={user ? user : "Ingresar"}
              items={
                user
                  ? [
                      {
                        href: "/logout",
                        text: "Logout",
                        cb: (e) => {
                          e.preventDefault();
                          dispatch(logout());
                          history.replace("login");
                        },
                      },
                    ]
                  : [
                      { href: "/login", text: "Log in", cb: () => {} },
                      { href: "/register", text: "Registrar", cb: () => {} },
                    ]
              }
            />
            <NavShoppingCar className="header__navShopping" />
          </div>
        </div>
        <div className="header__bottom">
          <Categories
            categories={
              categories &&
              categories.map((categorie) => {
                return {
                  href: `/categorie/${categorie.id}`,
                  text: `${categorie.name}`,
                };
              })
            }
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
