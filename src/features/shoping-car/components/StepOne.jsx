import React, { useState, useEffect } from "react";
import {
  StepperAction,
  StepperContent,
  StepperContext,
} from "react-material-stepper";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Counter from "../../../components/Counter";
import Button from "../../../ui/Button";
import { addProduct, removeProduct } from "../../shoping-car/store/actions";
import { ReactComponent as IconDelete } from "../../../assets/images/svg/delete.svg";
import "./StepOne.scss";

function StepOne({ watch = () => {}, vertical = false }) {
  const [totalProducts, setTotalProducts] = useState(1);
  const dispatch = useDispatch();
  const { resolve, getData } = React.useContext(StepperContext);
  const products = useSelector((state) => state.shoppingCar.productsAdded);

  function onSubmit(e) {
    e.preventDefault();
    resolve();
    console.log("comprar!!!");
  }

  function total(a, b) {
    return a * b;
  }

  return (
    <StepperContent
      onSubmit={onSubmit}
      actions={
        <React.Fragment>
          <StepperAction
            style={{ backgroundColor: "#fa8146" }}
            disabled={!products.length}
            align={vertical ? "left" : "right"}
            type="submit"
          >
            COMPRAR
          </StepperAction>
        </React.Fragment>
      }
    >
      {products.length > 0 ? (
        <div className="stepOne">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <td>Producto</td>
                  <td>Metodos de Entrega</td>
                  <td>Cantidad</td>
                  <td>Precio</td>
                  <td>Total</td>
                  <td>Accion</td>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        {product.producto}
                        <img
                          width="160"
                          src={
                            !!product.product_photos.length
                              ? product.product_photos[0].photo1
                              : "http://lorempixel.com/400/200/food/"
                          }
                          alt="Detalle de imagen"
                        />
                      </td>
                      <td>
                        <ul>
                          <li>Despacho a domicilio</li>
                          <li>Retiro en tienda</li>
                        </ul>
                      </td>
                      <td>
                        <Counter
                          initialValue={product.total}
                          watch={(total) => {
                            setTotalProducts(total);
                          }}
                        />
                        <br />
                        <Button
                          fullWidth
                          primary
                          onClick={() => {
                            dispatch(addProduct(product, totalProducts));
                          }}
                        >
                          Agregar
                        </Button>
                      </td>
                      <td>{product.list_price[0].pricesale}</td>
                      <td>
                        S/
                        {product.priceTotal.toFixed(2)}
                      </td>
                      <td className="text-center">
                        <IconDelete
                          onClick={() => {
                            dispatch(removeProduct(product));
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="table-step">
            <div className="table-body">
              {products.map((product) => {
                return (
                  <div className="table-row">
                    <div>
                      <img
                        width="160"
                        src={
                          !!product.product_photos.length
                            ? product.product_photos[0].photo1
                            : "http://lorempixel.com/400/200/food/"
                        }
                        alt="Detalle de imagen"
                      />
                    </div>
                    <div className="flex ai-center jc-between">
                      <div>
                        <div>Despacho a domicilio</div>
                        <br />
                        <div>Retiro en tienda</div>
                      </div>
                      <div>
                        <Counter
                          initialValue={product.total}
                          watch={(total) => {
                            setTotalProducts(total);
                          }}
                        />
                        <br />
                        <Button
                          fullWidth
                          primary
                          onClick={() => {
                            dispatch(addProduct(product, totalProducts));
                          }}
                        >
                          Agregar
                        </Button>
                      </div>
                    </div>
                    <div className="flex ai-center jc-between">
                      <div className="price">
                        <div>
                          <span>
                            <b>Precio: </b>
                          </span>
                          S/{product.list_price[0].pricesale}
                        </div>
                        <br />
                        <div>
                          <span>
                            <b>Total por producto: </b>
                          </span>
                          S/
                          {product.priceTotal.toFixed(2)}
                        </div>
                      </div>
                      <div className="text-center">
                        <IconDelete
                          onClick={() => {
                            dispatch(removeProduct(product));
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-right mt-20">
            <h2>
              Total a pagar S/.{" "}
              {products
                .reduce((acumulador, valorActual) => {
                  return acumulador + valorActual.priceTotal;
                }, 0)
                .toFixed(2)}
            </h2>
          </div>
          <div className="text-right mt-20"></div>
        </div>
      ) : (
        <>
          <h1>No hay productos, por favor agregar en el home</h1>

          <NavLink primary exact to={"/"}>
            <Button primary>Ver Productos </Button>
          </NavLink>
        </>
      )}
    </StepperContent>
  );
}

export default StepOne;
