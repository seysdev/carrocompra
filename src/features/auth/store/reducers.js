import initialState from "./state";
import {
  SET_STATUS_REGISTER,
  SET_STATUS_LOGIN,
  SET_STATUS_TOKEN,
  LOGOUT,
} from "./constans";

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STATUS_REGISTER:
      console.log("action", action.payload.status);
      return Object.assign({}, state, {
        statusRegister: action.payload.status,
      });

    case SET_STATUS_LOGIN:
      if (action.payload.error) {
        return Object.assign({}, state, {
          user: "",
          isLogin: false,
        });
      } else {
        return Object.assign({}, state, {
          user: action.payload,
          isLogin: true,
        });
      }

    case SET_STATUS_TOKEN:
      return Object.assign({}, state, {
        token: action.payload,
      });

    case LOGOUT:
      return Object.assign({}, state, initialState);

    default:
      return state;
  }
}

export default AuthReducer;
