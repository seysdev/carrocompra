import React, { useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import style from "./search.module.css";
import { setProductFilter } from "../../features/products/store/actions";
import { useDispatch, useSelector } from "react-redux";

function Search({ data, watch }) {
  // const dispatch = useDispatch();
  // const products = useSelector((state) => state.products.products) || [];
  // console.log("products", products);
  // const origen = products.slice();
  // console.log("origen", origen);
  const [value, setValue] = useState("");
  return (
    <div className={`${style.search} flex ai-center`}>
      <Input
        className={style.input}
        fullWidth
        onChange={(e) => {
          setValue(e.target.value);
          const filter = data.filter(
            (product) =>
              product.product
                .toUpperCase()
                .indexOf(e.target.value.toUpperCase()) > -1
          );

          watch(filter);
        }}
        value={value}
      />
      <Button className={style.button} primary>
        Buscar
      </Button>
    </div>
  );
}

export default Search;
