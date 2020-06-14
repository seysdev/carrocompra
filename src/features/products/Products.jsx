import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getCategories } from "./store/actions";
import { addProduct } from "../shoping-car/store/actions";
import Search from "../../components/Search";
import CardProduct from "../../components/CardProduct";
import { useParams } from "react-router-dom";
import style from "./products.module.css";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products) || [];
  let { id } = useParams();

  useEffect(() => {
    console.log("id", id);
    if (!id) {
      dispatch(getProducts());
    } else {
      dispatch(getCategories(id));
    }
  }, [id]);

  const [dataProducts, setDataProducts] = useState(products);

  useEffect(() => {
    setDataProducts(products);
  }, [products]);

  return (
    <div className={style.products}>
      <Search
        data={products}
        watch={(filter) => {
          setDataProducts(filter);
        }}
      />
      <div className={style.grid}>
        {dataProducts.length > 0 ? (
          dataProducts.map((product) => (
            <CardProduct
              {...product}
              key={product.id}
              addProduct={() => dispatch(addProduct(product))}
            />
          ))
        ) : (
          <h2>No hay productos</h2>
        )}
      </div>
    </div>
  );
}

export default Products;
