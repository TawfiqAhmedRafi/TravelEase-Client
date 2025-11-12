import React from 'react';
import { createBrowserRouter } from "react-router";
import RootLayout from '../Layouts/RootLayout';
import Home from '../Components/Home/Home';
import AllVehiclesPage from '../Pages/AllVehiclesPage';
import AddVehicles from '../Pages/AddVehicles';



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
]);
export default router