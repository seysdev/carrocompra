import React, { useState, useRef, useEffect, useCallback } from "react";
import style from "./counter.module.css";

function Counter({ max, watch = () => {}, className, initialValue = 1 }) {
  const [value, setValue] = useState(initialValue);
  const btnDecrement = useRef(null);

  function increment() {
    setValue(value + 1);
  }

  function decrement() {
    if (value < 1) {
      btnDecrement.current.setAttribute("disabled", true);
      btnDecrement.current.classList.add("disabled");
    } else if (value > 1) {
      btnDecrement.current.classList.remove("disabled");
      btnDecrement.current.removeAttribute("disabled");
      setValue(value - 1);
    }
  }

  useEffect(() => {
    watch(value);
  });

  return (
    <div className={`${style.counter} ${className}`}>
      <button type="button" onClick={increment} className={style.btn}>
        +
      </button>
      <input value={value} className={style.input} type="text" />
      <button  type="button" ref={btnDecrement} onClick={decrement} className={style.btn}>
        -
      </button>
    </div>
  );
}

export default Counter;
