import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AllFoods from "../pages/AllFoods/AllFoods";
import Gallery from "../pages/Gallery/Gallery";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import ProductPurchase from "../pages/ProductPurchase/ProductPurchase";
import AddFood from "../pages/AddFood/AddFood";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import MyFood from "../pages/MyFood/MyFood";
import MyOrder from "../pages/MyOrder/MyOrder";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router=createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/all-foods',
        element: <AllFoods></AllFoods>
      },
      {
        path: '/food/:id',
        element: <FoodDetails></FoodDetails>
      },
      {
        path: '/purchase/:id',
        element: <PrivateRoutes><ProductPurchase></ProductPurchase></PrivateRoutes>,
        loader: ({params})=>fetch(`https://hungry-naki-server-swart.vercel.app/foods/${params.id}`)
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>
      },
      {
        path: '/addFood',
        element: <PrivateRoutes><AddFood></AddFood></PrivateRoutes>
      },
      {
        path: '/myFood/:email',
        element: <PrivateRoutes><MyFood></MyFood></PrivateRoutes>,
        loader: ({params})=>fetch(`https://hungry-naki-server-swart.vercel.app/allFoods/${params.email}`)
      },
      {
        path: '/myOrders/:email',
        element: <PrivateRoutes><MyOrder></MyOrder></PrivateRoutes>,
        loader: ({params})=>fetch(`https://hungry-naki-server-swart.vercel.app/myOrders/${params.email}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  }
])
export default router;