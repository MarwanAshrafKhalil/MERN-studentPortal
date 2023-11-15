import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/app/hooks";

export interface PrivateRouteProps {
  login: boolean;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ login }) => {
  // const login = useAppSelector((state) => state.loginPunch.loginState);
  return login ? <Outlet /> : <Navigate to="/" replace />;
};
export default PrivateRoute;
