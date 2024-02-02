import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/landing";
import CodePage from "./components/code";
import GeneratePage from "./components/generate";
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
