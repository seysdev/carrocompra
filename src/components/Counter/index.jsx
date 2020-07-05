import React, { useState, useRef, useEffect, useCallback } from "react";
import style from "./counter.module.css";

function Counter({ max, watch = () => {}, className, initialValue = 1 }) {
  const [value, setValue] = useState({
    value: initialValue,
    type: "+",
  });
  const btnDecrement = useRef(null);
  const firstTime = useRef(null);

  function increment() {
    setValue({
      value: value.value + 1,
      type: "+",
    });
  }

  function decrement() {
    if (value.value > 0) {
      setValue({
        value: value.value - 1,
        type: "-",
      });
    }
  }

  useEffect(() => {
    if (firstTime.current) {
      watch(value);
    } else {
      firstTime.current = true;
    }
  }, [value]);

  return (
    <div className={`${style.counter} ${className}`}>
      <button
        type="button"
        ref={btnDecrement}
        onClick={decrement}
        className={style.btn}
      >
        -
      </button>
      <input value={value.value} className={style.input} type="number" />
      <button type="button" onClick={increment} className={style.btn}>
        +
      </button>
    </div>
  );
}

export default Counter;
