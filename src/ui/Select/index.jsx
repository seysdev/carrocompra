import React from "react";
import classNames from "classnames";
import style from "../Select/select.module.css";

function Select({
  onChange = () => {},
  fullWidth,
  className,
  items = [],
  required,
  value = "",
}) {
  return (
    <select
      value={value}
      required
      // onClick={onClick}
      className={classNames(className, {
        [style.select]: fullWidth,
      })}
      onChange={onChange}
    >
      {items.map((item, id) => (
        <option value={item.value} key={id}>
          {item.text}
        </option>
      ))}
    </select>
  );
}

export default Select;
