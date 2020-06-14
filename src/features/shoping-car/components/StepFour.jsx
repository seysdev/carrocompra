import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { resetState } from "../store/actions";
import style from "./StepFour.module.css";
import check from "../../../assets/images/check1.jpg";
import { NavLink } from "react-router-dom";
import {
  StepperAction,
  StepperContent,
  StepperContext,
} from "react-material-stepper";
import { useSelector } from "react-redux";
import Button from "../../../ui/Button";

function StepFour() {
  const dispatch = useDispatch();
  const { resolve, getData } = React.useContext(StepperContext);
  const products = useSelector((state) => state.shoppingCar.productsAdded);
  const [productsCurrent] = useState(products);
  useEffect(() => {
    resolve(true);
    dispatch(resetState());
  }, []);

  return (
    <StepperContent>
      <section className={style.mpagoconf}>
        <div className={`${style.confirmacion} `}>
          <h2 className={style.h2}>Muchas Gracias por su Compra</h2>
          <p className={style.p}>Los productos que has comprado son:</p>
          <ul className={style.ul}>
            {productsCurrent.map((product) => (
              <li style={{ textAlign: "center" }}>
                <img
                  width="120"
                  src={product.product_photos[0].photo1}
                  alt=""
                />
                <h2 style={{ marginTop: "10px" }}>{product.product}</h2>
              </li>
            ))}
          </ul>
          <figure>
            <img src={check} className={style.img} alt="niubiz" />
          </figure>
          <NavLink primary exact to={"/"}>
            <Button primary>Ver Productos </Button>
          </NavLink>
          {/* <Button
            primary
            onClick={() => {
              dispatch(resetState());
            }}
          >
            Finalizar
          </Button> */}
        </div>
      </section>
    </StepperContent>
  );
}

export default StepFour;
