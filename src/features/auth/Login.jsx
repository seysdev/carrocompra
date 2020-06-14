import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "./store/actions";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import style from "./Login.module.css";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userForm, setUserForm] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login(userForm));
  }

  const statusLogin = useSelector((state) => state.auth.isLogin);

  useEffect(() => {
    if (statusLogin) {
      history.replace('/')
    }
  }, [statusLogin]);

  return (
    <div className={style.login}>
      <h1 className="text-center mb-40">
        <b>Login</b>
      </h1>
      <form onSubmit={handleSubmit}>
        <Input
          value={userForm.username}
          onChange={(e) => {
            setUserForm({ ...userForm, username: e.target.value });
          }}
          placeholder="Usuario"
          fullWidth
        />
        <br />
        <Input
          value={userForm.password}
          onChange={(e) => {
            setUserForm({ ...userForm, password: e.target.value });
          }}
          type="password"
          placeholder="Contraseña"
          fullWidth
        />
        <br />
        <div className={style.row}>
          <label className={`${style.aItems} ${style.flex}`}>
            <input type="checkbox" />
            Recordarme
          </label>
          <a href="/lost-password">Olvidaste tu contraseña</a>
        </div>
        <br />
        <Button type="submit" primary fullWidth>
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
