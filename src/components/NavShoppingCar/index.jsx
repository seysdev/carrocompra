import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { ReactComponent as IconCar } from "../../assets/images/svg/car.svg";
import style from "./NavShoppingCar.module.css";

function NavShoppingCar({ className }) {
  const quatityProducts = useSelector(
    (state) => state.shoppingCar.productsAdded
  );

  const total = quatityProducts.reduce((valorAnterior, nuevoValor) => {
    return valorAnterior + nuevoValor.total;
  }, 0);

  return (
    <Link
      className={classNames(className, {
        [style.navShoppingCar]: true,
      })}
      to="/shopping-car"
    >
      <IconCar className={style.icon} />
      <span className={style.counter}>{total}</span>
    </Link>
  );
}

export default NavShoppingCar;
