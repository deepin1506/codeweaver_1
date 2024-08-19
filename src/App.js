import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/landing.js";
import CodePage from "./components/code.js";
import GeneratePage from "./components/generate.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "code",
    element: <CodePage />,
  },
  {
    path: "generate_code",
    element: <GeneratePage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
