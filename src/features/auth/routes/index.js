import Login from "../Login";
import Register from "../Register";

const AuthRoutes = [
  {
    path: "/login",
    component: Login,
    auth: false,
  },
  {
    path: "/register",
    component: Register,
    auth: false,
  },
];

export default AuthRoutes;
