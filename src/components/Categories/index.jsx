import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Categories.module.css";

function Categories({ categories = [] }) {
  return (
    <ul className={style.categories}>
      <li className={style.items}>
        <NavLink
          className={style.link}
          exact
          to={"/"}
          activeClassName={style.linkActive}
        >
          All
        </NavLink>
        <span className={style.bar}>\</span>
      </li>
      {categories.map((categorie, id) => {
        return (
          <li key={id} className={style.items}>
            <NavLink
              className={style.link}
              exact
              to={categorie.href}
              activeClassName={style.linkActive}
            >
              {categorie.text}
            </NavLink>
            <span className={style.bar}>\</span>
          </li>
        );
      })}
    </ul>
  );
}

export default Categories;
