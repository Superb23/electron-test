import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Test = lazy(() => import("../pages/test"));
const Home = lazy(() => import("../pages/home"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/test",
    Component: Test,
  },
  {
    path: "/menu",
  },
]);

export default router;
