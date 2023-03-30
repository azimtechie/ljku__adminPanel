import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Results from "./pages/Results/Results";

export const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "results",
    component: Results,
  },
];

export const defaultroutes = [
  {
    path: "/",
    component: Login,
  },
];
