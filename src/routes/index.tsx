import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() =>
  import("./Home").then((module) => ({ default: module.default }))
);

export const router = createBrowserRouter([{ path: "/", element: <Home /> }]);
