import React from "react";
import {
  StepperAction,
  StepperContent,
  StepperContext,
} from "react-material-stepper";
import StripeCheckout from "react-stripe-checkout";
import { useSelector } from "react-redux";

import style from "./StepThree.module.css";
import card from "../../../assets/images/niubiz.png";

function StepThree() {
  const { resolve, getData } = React.useContext(StepperContext);
  const products = useSelector((state) => state.shoppingCar.productsAdded);
  const amount = products
    .reduce((acumulador, valorActual) => {
      return acumulador + valorActual.priceTotal;
    }, 0)
    .toFixed(2);

  const userData = useSelector((state) => state.shoppingCar.form.step_two);

  console.log("amount", amount);

  function onSubmit(e) {
    e.preventDefault();
    // resolve();
    console.log("comprar!!!");
  }

  return (
    <StepperContent
      onSubmit={onSubmit}
      // actions={
      //   <React.Fragment>
      //     <StepperAction type="submit">PAGAR AHORA</StepperAction>
      //   </React.Fragment>
      // }
    >
      <section className={style.mpago}>
        <div className={`${style.facturacion} ${style.flex}`}>
          <div className={style.col8}>
            <h3>Niubiz</h3>
            <div className={style.divLeft}>
              <input id="direction" type="checkbox" className={style.input} />
              <label htmlFor="direction" className={style.span}>
                {" "}
                Mis direcciones de facturacion y envio son las mismas{" "}
              </label>
              <ul className={`${style.ul} ${style.innerLeft}`}>
                <li>
                  {userData && userData.name}{" "}
                  {userData && userData.patherLastname}{" "}
                  {userData && userData.motherLastname}
                </li>
                <li>
                  {userData && userData.department} -{" "}
                  {userData && userData.province} -{" "}
                  {userData && userData.district}
                </li>
                <li>{userData && userData.contactNumber}</li>
              </ul>
            </div>
          </div>

          <figure className={style.col4}>
            <img src={card} className={style.img} alt="niubiz" />
          </figure>
        </div>
        <div className={style.condiciones}>
          <div className={style.divLeft}>
            <input id="accept" type="checkbox" className={style.input} />
            <label htmlFor="accept" className={style.span}>
              Acepto los terminos y condiciones
            </label>
            <div className={style.innerLeft}>
              <h3 className={style.h3}>TERMINOS Y CONDICIONES</h3>
              <h4>1.- Titularidad de la Pagina Web</h4>
              <p className={style.lineHeight}>
                El acceso, uso, operacion, reserva, busqueda y/o cualquier otra
                actividad que se realice en este sitio web rige por los terminos
                y condiciones descritos en el presente documento(en adelante y
                de forma conjunta , los "Terminos y Condiciones"), asi como por
                la legislacion peruana aplicable y vigente.
              </p>
            </div>
          </div>
        </div>
        <StripeCheckout
          stripeKey="pk_test_ZAwARGpKvOHuoR0LSHkrLyse004ZYKIiyz"
          token={(data) => {
            console.log("data", data);
            resolve();
          }}
          label="Pagar"
          amount={amount * 100}
          locale="auto"
          currency="USD"
        />
      </section>
    </StepperContent>
  );
}

export default StepThree;
