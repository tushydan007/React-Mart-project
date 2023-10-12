import { useSelector } from "react-redux";
import CheckOut from "../pages/CheckOut";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRouteCheckout = () => {
  const { loggedInUser } = useSelector((state) => state.user);
  const location = useLocation();
  return loggedInUser ? (
    <CheckOut />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default ProtectedRouteCheckout;
