import React from "react";
import classNames from "classnames";
import style from "./button.module.css";

function Button({
  onClick = () => {},
  primary,
  secondary,
  children,
  fullWidth,
  className,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(className, {
        [style.btn]: true,
        [style.btnPrimary]: primary,
        [style.btnSecondary]: secondary,
        [style.fullWidth]: fullWidth,
      })}
    >
      {children}
    </button>
  );
}

export default Button;
