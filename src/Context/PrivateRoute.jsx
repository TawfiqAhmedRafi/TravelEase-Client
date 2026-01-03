import React, { use } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router";
import LoadingPage from "../Pages/LoadingPage";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  if (user && user.email) {
    return children;
  } else {
    return (
      <Navigate to="/auth/login" state={{ from: location.pathname }} replace />
    );
  }
};

export default PrivateRoute;
