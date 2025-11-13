import React from 'react';
import { createBrowserRouter } from "react-router";
import RootLayout from '../Layouts/RootLayout';
import Home from '../Components/Home/Home';
import AllVehiclesPage from '../Pages/AllVehiclesPage';
import AddVehicles from '../Pages/AddVehicles';
import AuthLayout from '../Layouts/AuthLayout';
import Login from '../Components/Login/Login';
import Register from '../Register/Register';



const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
   children: [
    {
        index: true ,
        Component: Home,
    },
    {
        path: "/allVehicles",
        Component: AllVehiclesPage
    },
    {
        path: "/addVehicles",
        Component : AddVehicles,
    }
   ]
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
      
    ],
  },
]);
export default router