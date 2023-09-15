import { lazy } from "solid-js";
const About = lazy(() => import("../pages/about"))
const Home = lazy(() => import("../pages/home"))
const route = [
  {
    path: "/",
    component:Home ,
  },
  {
    path: "/about",
    component: About,
  },
];

export { route };
