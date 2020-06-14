import {
  SET_STATUS_REGISTER,
  SET_STATUS_LOGIN,
  SET_STATUS_TOKEN,
  LOGOUT,
} from "./constans";

function registerUser(payload) {
  return function (dispatch) {
    fetch("https://carallenglish.herokuapp.com/apis_user/registeruser/", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("response", response);
        dispatch(setStatusRegister(response));
      })
      .catch((err) => dispatch(setStatusRegister(err)));
  };
}

function login(payload) {
  return function (dispatch) {
    fetch("https://carallenglish.herokuapp.com/apis_user/authenticate/", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          dispatch(setStatusLogin(response));
          dispatch(setStatusToken(""));
        } else {
          dispatch(setStatusToken(response));
          dispatch(setStatusLogin(payload.username));
        }
      })
      .catch((err) => dispatch(setStatusLogin(err)));
  };
}

function setStatusRegister(payload) {
  return {
    type: SET_STATUS_REGISTER,
    payload,
  };
}

function setStatusLogin(payload) {
  return {
    type: SET_STATUS_LOGIN,
    payload,
  };
}

function setStatusToken(payload) {
  return {
    type: SET_STATUS_TOKEN,
    payload,
  };
}

function logout() {
  return {
    type: LOGOUT,
  };
}

export { registerUser, login, logout };
