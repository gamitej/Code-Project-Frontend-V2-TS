import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Auth from "@/pages/Auth";
import ProtectedRoute from "@/pages/Auth/ProtectedRoutes";
import { AppAuth } from "@/types/pages";

// lazy
const Explore = lazy(() => import("@/pages/Explore"));

const Router = (props: AppAuth) => {
  const route = useRoutes([
    {
      path: "/",
      element: <ProtectedRoute {...props} />,
      children: [
        {
          path: "/",
          element: <Explore />,
        },
      ],
    },
    {
      path: "/auth",
      element: <Auth {...props} />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return route;
};

export default Router;
