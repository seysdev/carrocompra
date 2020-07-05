import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "./store/actions";
import { addProduct, addProductQuantity } from "../shoping-car/store/actions";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";

import Button from "../../ui/Button";
import Counter from "../../components/Counter";
import style from "./productDetail.module.css";

function ProductDetail({ addCar = () => {} }) {
  const [totalProducts, setTotalProducts] = useState(1);
  const dispatch = useDispatch();
  let { detail } = useParams();
  const currentProduct = useSelector((state) => state.products.productDetail);
  const productsAdded = useSelector((state) => state.shoppingCar.productsAdded);
  const productFound = productsAdded.find((product) => product.id == detail);

  const {
    product: title,
    description,
    list_price,
    product_photos,
  } = currentProduct;

  useEffect(() => {
    dispatch(getProductDetail(detail));
  }, [detail]);

  const imagesLorem = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  // const images =
  //   !!product_photos && !!product_photos.length
  //     ? product_photos.map((photo, id) => {
  //         return {
  //           original: photo[`photo${id}`],
  //           thumbnail: photo,
  //         };
  //       })
  //     : imagesLorem;

  return (
    <div className={style.productDetail}>
      {Object.entries(currentProduct).length > 0 ? (
        <>
          <div className={style.arrowTop}>
            {imagesLorem && (
              <div>
                <ImageGallery items={imagesLorem} />
              </div>
            )}
            <div>
              <h1>{title}</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <h2>
                S/
                {!!list_price &&
                  !!list_price.length &&
                  list_price[0] &&
                  list_price[0].pricesale &&
                  list_price[0].pricesale}{" "}
                x kg
              </h2>
              <Counter
                className="mb-20"
                watch={(response) => {
                  console.log('response', response)
                  dispatch(addProductQuantity(currentProduct, response.value))
                }}
                initialValue={productFound && productFound.total}
              />
              <div>
                <h3>Disponibilidad y tiempos de entrega</h3>
                <ul>
                  <li>Disponible para despachao a domicilio</li>
                  <li>Disponible para retiro en tu tienda seleccionada</li>
                  <li>Disponible para despacho express</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={style.arrowBottom}>
            <h2>Descripcion del producto</h2>
            <p className={style.customP}>{description}</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </>
      ) : (
        <h1>no hay datos</h1>
      )}
    </div>
  );
}

export default ProductDetail;
