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
import Loading from "./components/Loading/Loading";
import Profile from "./pages/profile/Profile";
import Hire from "./pages/hire/Hire";
import PostPage from "./pages/PostPage/PostPage";
import Discover from "./pages/discover/Discover";
import Inspiration from "./pages/inspiration/Inspiration";
import UserForm from "./pages/userForm/UserForm";
import HireForm from "./pages/hireForm/HireForm";

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
    path: "/loading",
    element: <Loading />,
  },
  {
    path: "/profile/:username",
    element: <Profile />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/hire",
    element: <Hire />,
  },
  {
    path: "/hire/:username",
    element: <HireForm />,
  },
  {
    path: "/inspiration",
    element: <Inspiration />,
  },
  {
    path: "/discover",
    element: <Discover />,
  },
  {
    path: "/post/:id",
    element: <PostPage />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/userform/:username",
    element: <UserForm />,
  },
  {
    path: "/hireform",
    element: <HireForm />,
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
