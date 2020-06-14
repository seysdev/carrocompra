import React from "react";
import classNames from "classnames";
import style from "./input.module.css";

function Input({
  onChange = () => {},
  id,
  name,
  type = "text",
  placeholder,
  fullWidth,
  required,
  className,
  value = "",
}) {
  return (
    <input
      value={value}
      placeholder={placeholder}
      className={classNames(className, {
        [style.input]: true,
        [style.fullWidth]: fullWidth,
      })}
      id={id}
      name={name}
      type={type}
      onChange={(e) => onChange(e)}
      required
    />
  );
}

export default Input;
