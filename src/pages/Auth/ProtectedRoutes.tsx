import PropTypes from "prop-types";
import { Navigate, Outlet, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  isLoggedIn: boolean;
}

const ProtectedRoute = ({ isLoggedIn }: ProtectedRouteProps) => {
  const { pathname: currentPath } = useLocation();

  return !isLoggedIn ? (
    <Navigate to="/auth" state={currentPath} replace />
  ) : (
    <Outlet />
  );
};

ProtectedRoute.propTypes = {
  isAuth: PropTypes.any,
};

export default ProtectedRoute;
