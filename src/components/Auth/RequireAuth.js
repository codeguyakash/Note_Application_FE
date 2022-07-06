import Dashboard from "../Dashboard";
import { useLocation, Navigate } from "react-router-dom";
const RequireAuth = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  return token ? (
    <Dashboard />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};
export default RequireAuth;
