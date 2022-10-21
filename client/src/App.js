import "./app.scss";
import {
  RouterProvider,
  createBrowserRouter,
  // Route,
  // Outlet,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import Category from "./pages/category/Category";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new",
    element: <New />,
  },
  {
    path: "/category/graphicdesign",
    element: <Category />,
  },
  {
    path: "/category/illustration",
    element: <Category />,
  },
  {
    path: "/category/mobile",
    element: <Category />,
  },
  {
    path: "/category/print",
    element: <Category />,
  },
  {
    path: "/category/productdesign",
    element: <Category />,
  },
  {
    path: "/category/typography",
    element: <Category />,
  },
  {
    path: "/category/webdesign",
    element: <Category />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
