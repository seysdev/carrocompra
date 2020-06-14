import React, { useState } from "react";
import Stepper, { Step } from "react-material-stepper";
import "react-material-stepper/dist/react-stepper.css";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";

import style from "./shoppingCar.module.css";

function ShoppingCar() {
  const [step, setState] = useState(1);

  return (
    <>
      <h1>titulo</h1>
      <Stepper
        className={style.stepper}
        style={{ padding: "20px" }}
        initialStep={step}
      >
        <Step
          stepId={1}
          title="Carro de 
compras"
        >
          <StepOne
            watch={(step) => {
              // setState(step);
              setState(step);
            }}
          />
        </Step>
        <Step
          stepId={2}
          title="Tipo de 
entrega"
        >
          <StepTwo />
        </Step>
        <Step
          stepId={3}
          title="Pago
Seguro"
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
