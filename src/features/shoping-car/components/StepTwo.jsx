import React, { useState, useEffect } from "react";
import {
  StepperAction,
  StepperContent,
  StepperContext,
} from "react-material-stepper";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setFormStep } from "../store/actions";
import { ReactComponent as WhatsappIcon } from "../../../assets/images/svg/whatsapp.svg";
import Input from "../../../ui/Input";
import Select from "../../../ui/Select";
import style from "./StepTwo.module.css";

function StepTwo() {
  const dispatch = useDispatch();
  const valuesForm = useSelector((state) => state.shoppingCar.form.step_two);
  const isLogin = useSelector((state) => state.auth.isLogin);
  console.log("valuesForm", valuesForm);
  const history = useHistory();
  const [userValues, setUserValues] = useState({
    needBill: false,
    name: "",
    patherLastname: "",
    motherLastname: "",
    department: "",
    province: "",
    district: "",
    via: "",
    nameVia: "",
    livingPlace: "",
    numberLivingPlace: "",
    zone: "",
    nameZone: "",
    contactNumber: "",
    shippingFee: 69,
  });
  const { resolve, getData } = React.useContext(StepperContext);

  function onSubmitTwo(e) {
    e.preventDefault();
    dispatch(setFormStep(userValues, "two"));
    console.log("acaaa!!!!");
    resolve();
  }

  useEffect(() => {
    setTimeout(() => {
      if (!isLogin) {
        alert("por favor para continuar logueate");
        history.push("login");
      }
    }, 1000);
  }, []);

  return (
    <StepperContent
      onSubmit={onSubmitTwo}
      actions={
        <React.Fragment>
          <StepperAction
            style={{ backgroundColor: "#fa8146" }}
            disabled={!isLogin}
            type="submit"
          >
            SIGUIENTE
          </StepperAction>
        </React.Fragment>
      }
    >
      <>
        <div className={style.form}>
          <div className={style.top}>
            <label>¿Necesitas Factura? *</label>
            <br />
            <br />
            <Select
              value={valuesForm.needBill}
              name="factura"
              items={[
                { text: "No", value: false },
                { text: "Si", value: true },
              ]}
              onChange={(e) =>
                setUserValues({
                  ...userValues,
                  needBill: e.target.value,
                })
              }
              required
            ></Select>
          </div>
          <div className={style.grid}>
            <div>
              <label className={style.label}>Nombre: </label>
              <Input
                required
                value={userValues.name || valuesForm.name}
                className={style.input}
                placeholder="Nombre"
                fullWidth
                onChange={(e) => {
                  setUserValues({
                    ...userValues,
                    name: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label className={style.label}>Apellido Paterno: </label>
              <Input
                value={userValues.patherLastname || valuesForm.patherLastname}
                className={style.input}
                placeholder="Apellido Paterno"
                fullWidth
                onChange={(e) => {
                  setUserValues({
                    ...userValues,
                    patherLastname: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label className={style.label}>Apellido Materno:</label>
              <Input
                value={userValues.motherLastname || valuesForm.motherLastname}
                className={style.input}
                placeholder="Apellido Materno"
                fullWidth
                onChange={(e) => {
                  setUserValues({
                    ...userValues,
                    motherLastname: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label className={style.label}>Departamento: </label>
              <Select
                value={userValues.department || valuesForm.department}
                fullWidth
                name="department"
                items={[
                  { text: "Selecciona tu departamento", value: "" },
                  { text: "Amazonas", value: "Amazonas" },
                  { text: "Ancash", value: "Ancash" },
                  { text: "Lima", value: "Lima" },
                ]}
                onChange={(e) =>
                  setUserValues({
                    ...userValues,
                    department: e.target.value,
                  })
                }
              ></Select>
            </div>
            <div>
              <label className={style.label}>Provincias: </label>
              <Select
                value={userValues.province || valuesForm.province}
                fullWidth
                name="provincias"
                items={[
                  { text: "Selecciona tu provincia", value: "" },
                  { text: "Amazonas", value: "Amazonas" },
                  { text: "Ancash", value: "Ancash" },
                  { text: "Lima", value: "Lima" },
                ]}
                onChange={(e) =>
                  setUserValues({
                    ...userValues,
                    province: e.target.value,
                  })
                }
              ></Select>
            </div>
            <div>
              <label className={style.label}>Distrito: </label>
              <Select
                value={userValues.district || valuesForm.district}
                fullWidth
                name="district"
                items={[
                  { text: "Selecciona tu distrito", value: "" },
                  { text: "Comas", value: "Comas" },
                  { text: "Puente Piedra", value: "Puente piedra" },
                  { text: "Ancon", value: "Ancon" },
                ]}
                onChange={(e) =>
                  setUserValues({
                    ...userValues,
                    district: e.target.value,
                  })
                }
              ></Select>
            </div>
            <div>
              <label className={style.label}>Vía: </label>
              <Select
                value={userValues.via || valuesForm.via}
                fullWidth
                name="via"
                items={[
                  { text: "Calle", value: "Calle" },
                  { text: "Jiron", value: "Jiron" },
                  { text: "Urbanizacion", value: "Urbanizacion" },
                ]}
                onChange={(e) =>
                  setUserValues({
                    ...userValues,
                    via: e.target.value,
                  })
                }
              ></Select>
            </div>
            <div className={style.column2}>
              <label className={style.label}>Nombre de Vía y Numero: </label>
              <Input
                value={userValues.nameVia || valuesForm.nameVia}
                className={style.input}
                placeholder="Ej: Petit Thouars 5273"
                fullWidth
                onChange={(e) =>
                  setUserValues({
                    ...userValues,
                    nameVia: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className={style.label}>Vivienda: </label>
              <Select
                value={userValues.livingPlace}
                fullWidth
                name="vivienda"
                items={[
                  { text: "Departamento", value: "Departamento" },
                  { text: "Casa", value: "Casa" },
                ]}
                onChange={(e) =>
                  setUserValues({
                    ...userValues,
                    livingPlace: e.target.value,
                  })
                }
              ></Select>
            </div>
            <div className={style.column2}>
              <label className={style.label}>Numero Depto/Interior: </label>
              <Input
                value={
                  userValues.numberLivingPlace || valuesForm.numberLivingPlace
                }
                className={style.input}
                placeholder="Ej: Depto 501"
                fullWidth
                onChange={(e) =>
                  setUserValues({
                    ...userValues,
                    numberLivingPlace: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className={style.label}>Zona: </label>
              <Select
                value={userValues.zone || valuesForm.zone}
                fullWidth
                name="zona"
                items={[
                  { text: "Selecciona tu zona", value: "" },
                  { text: "Manzana", value: "Manzana" },
                  { text: "Lote", value: "Lote" },
                  { text: "Zona", value: "Zona" },
                ]}
                onChange={(e) =>
                  setUserValues({
                    ...userValues,
                    zone: e.target.value,
                  })
                }
              ></Select>
            </div>
            <div>
              <label className={style.label}>Nombre de Zona</label>
              <Input
                value={userValues.nameZone || valuesForm.nameZone}
                className={style.input}
                placeholder="Manzana/Lote/Zona"
                fullWidth
                onChange={(e) =>
                  setUserValues({
                    ...userValues,
                    nameZone: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className={style.label}>Numero de Contacto</label>
              <Input
                value={userValues.contactNumber || valuesForm.contactNumber}
                className={style.input}
                placeholder="Ej: 993541937"
                fullWidth
                onChange={(e) =>
                  setUserValues({
                    ...userValues,
                    contactNumber: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className={style.rate}>
          <p>Tarifa de Envio</p>
          <p>S/.69.00</p>
        </div>
        <p>Para coordinar la entrega comunicarse con el asesor via whatsApp</p>
        <div className="-mt-10 flex ai-center mb-40">
          <WhatsappIcon />
          <span className="ml-4">993541937</span>
        </div>
      </>
    </StepperContent>
  );
}

export default StepTwo;
