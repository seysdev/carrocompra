import React from "react";
import { Link } from "react-router-dom";

import Button from "../../ui/Button";
import style from "./cardproduct.module.css";

function CardProduct({
  id,
  product_photos,
  product: title,
  feature: description,
  currency,
  meassure,
  price,
  list_price,
  addProduct = () => {},
}) {
  return (
    <article className={style.cardProduct}>
      <figure className={style.figure}>
        <img
          className={style.img}
          src={product_photos && product_photos.length > 0 && product_photos[0].photo1}
          alt={title}
        />
      </figure>
      <div className={style.text}>
        <h2 className={style.title}>
          <Link
            to={{
              pathname: `/${id}`,
              params: { detail: id },
            }}
          >
            {title}
          </Link>
        </h2>
        <p className={style.description}>{description}</p>
        <p className={style.currency}>
          {/* {currency}
          {price} x {meassure} */}
          S/.
          {list_price && list_price.length > 0 && list_price[0].pricesale}
        </p>
        <Button className={style.btn} fullWidth primary onClick={addProduct}>
          AGREGAR AL CARRITO
        </Button>
      </div>
    </article>
  );
}

export default CardProduct;
