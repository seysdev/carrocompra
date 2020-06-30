import React, { useState } from "react";
import Stepper, { Step } from "react-material-stepper";
import { useSelector } from "react-redux";
import "react-material-stepper/dist/react-stepper.css";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";

import style from "./shoppingCar.module.css";

function ShoppingCar() {
  const [step, setState] = useState(1);
  const disabledStep = useSelector((state) => state.shoppingCar.disabledStep);

  return (
    <>
      <h1>Compra de producto</h1>
      <Stepper
        className={style.stepper}
        style={{ padding: "20px", color: "#fa8146" }}
        initialStep={step}
        completeColor="#fa8146"
      >
        <Step
          stepId={1}
          title="Carro de 
compras"
          disabled={disabledStep}
        >
          <StepOne />
        </Step>
        <Step
          stepId={2}
          title="Tipo de 
entrega"
          disabled={disabledStep}
        >
          <StepTwo />
        </Step>
        <Step
          stepId={3}
          title="Pago
Seguro"
          disabled={disabledStep}
        >
          <StepThree />
        </Step>
        <Step
          stepId={4}
          title="Confirmacion
        de compra"
        >
          <StepFour />
        </Step>
      </Stepper>
    </>
  );
}

export default ShoppingCar;
