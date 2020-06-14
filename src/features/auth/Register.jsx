import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Input from "../../ui/Input";
import Button from "../../ui/Button";
import style from "./Register.module.css";
import { registerUser } from "./store/actions";
import { useEffect } from "react";

function Register() {
  // const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userForm, setUserForm] = useState({
    email: "",
    username: "",
    password: "",
  });
  const statusRegister = useSelector((state) => state.auth.statusRegister);
  const history = useHistory();

  function onSubmit(event) {
    event.preventDefault();

    if (confirmPassword === userForm.password) {
      dispatch(registerUser(userForm));
    } else {
      alert("Los passwords no son iguales!!");
    }
  }

  useEffect(() => {
    if (statusRegister === 500) {
      alert("El usuario ya esta registrado");
    } else if (statusRegister === 200) {
      alert("Bienvenido a nuestro sistema logueate por favor");
      history.replace("login");
    }
  }, [statusRegister]);

  return (
    <div className={style.register}>
      <h1 className="text-center mb-40">
        <b>Registrarse</b>
      </h1>
      <form onSubmit={onSubmit}>
        <div className={`${style.row} row`}>
          <div className="col">
            <Input
              value={userForm.email}
              onChange={(e) => {
                setUserForm({ ...userForm, email: e.target.value });
              }}
              placeholder="Correo"
              type="email"
              fullWidth
              required
              // ref={register({ required: true, maxLength: 20 })}
            />
          </div>
          <div className="col">
            <Input
              value={userForm.username}
              onChange={(e) => {
                setUserForm({ ...userForm, username: e.target.value });
              }}
              placeholder="Nickname"
              fullWidth
              required
            />
          </div>
        </div>
        <div className={`${style.row} row`}>
          <div className="col">
            <Input
              value={userForm.password}
              onChange={(e) => {
                setUserForm({ ...userForm, password: e.target.value });
              }}
              placeholder="Password"
              type="password"
              fullWidth
              required
            />
          </div>
          <div className="col">
            <Input
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              placeholder="Confirmar password"
              type="password"
              fullWidth
              required
            />
          </div>
        </div>
        <br className="d-xs-none" />
        <br className="d-xs-none" />
        <div className={`${style.row} row`}>
          <div className="col">
            <Button type="submit" primary fullWidth>
              Registrarse
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
