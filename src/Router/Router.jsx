import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Components/Home/Home";
import AllVehiclesPage from "../Pages/AllVehiclesPage";
import AddVehicles from "../Pages/AddVehicles";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Components/Login/Login";
import Register from "../Register/Register";
import ForgetPass from "../Pages/ForgetPass";
import ErrorPage from "../Pages/ErrorPage";
import MyVehicles from "../Pages/MyVehicles";
import MyBookings from "../Pages/MyBookings";
import PrivateRoute from "../Context/PrivateRoute";
import ViewDetails from "../Pages/ViewDetails";
import LoadingPage from "../Pages/LoadingPage";
import UpdateVehicle from "../Pages/UpdateVehicle";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forgetpass",
        element: <ForgetPass></ForgetPass>,
      },
    ],
  },
  {
    path: "/myVehicles",
    loader: () => fetch("https://travel-ease-server-roan.vercel.app/vehicles"),
    element: (
      <PrivateRoute>
        {" "}
        <MyVehicles></MyVehicles>
      </PrivateRoute>
    ),
  },
  {
    path: "/allVehicles",
    loader: () => fetch("https://travel-ease-server-roan.vercel.app/vehicles"),
    Component: AllVehiclesPage,
    hydrateFallbackElement: <LoadingPage></LoadingPage>,
  },
  {
    path: "/addVehicles",
    element: (
      <PrivateRoute>
        <AddVehicles></AddVehicles>
      </PrivateRoute>
    ),
  },
  {
    path : "/update-vehicle/:id",
    element: <PrivateRoute><UpdateVehicle></UpdateVehicle></PrivateRoute>
  },
  {
    path: "/bookings",
    element: (
      <PrivateRoute>
        <MyBookings></MyBookings>
      </PrivateRoute>
    ),
  },
  {
    path: "/vehicles/:id",
    loader: ({ params }) =>
      fetch(`https://travel-ease-server-roan.vercel.app/vehicles/${params.id}`),
    element: (
      <PrivateRoute>
        <ViewDetails></ViewDetails>
      </PrivateRoute>
    ),
    hydrateFallbackElement: <LoadingPage></LoadingPage>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
export default router;
