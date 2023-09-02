import { lazy } from "react";
import { AppAuth } from "@/types/pages";
import { Navigate, useRoutes } from "react-router-dom";
// pages
import Auth from "@/pages/Auth";
import ProtectedRoute from "@/pages/Auth/ProtectedRoutes";

// lazy
const Explore = lazy(() => import("@/pages/Explore"));
const Topic = lazy(() => import("@/pages/Explore/Topic/Topic"));
const Profile = lazy(() => import("@/pages/Profile"));

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
        {
          path: "/explore/:topic",
          element: <Topic />,
        },
        {
          path: "/profile",
          element: <Profile />,
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
