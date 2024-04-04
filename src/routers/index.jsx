import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout";
import {
  App,
  ErrorPage,
  About,
  Recruit,
  Login,
  Register,
  Products,
  ProductDetails,
  Cart,
  Checkout,
  MainAdminLayout,
  Console ,
  AdminProducts,
  Profile
} from "../Pages/index";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/tuyendung",
        element: <Recruit />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path:"/cart" ,
        element:<Cart/>
      } ,
      {
        path:"/checkout" ,
        element:<Checkout/>
      }
    ],
  },
  {
    path:"/admin" ,
    element:<MainAdminLayout/> ,
    children : [
      {
        path:"/admin" ,
        element : <Console/>
      } ,
      {
        path:"/admin/Products" ,
        element:<AdminProducts/>
      }
    ]
  } ,
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile" ,
    element:<Profile/>
  }
]);
