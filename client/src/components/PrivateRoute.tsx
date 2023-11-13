import { Navigate, Outlet } from "react-router-dom";

export interface PrivateRouteProps {
  login: boolean;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ login }) => {
  console.log(login);
  return login ? <Outlet /> : <Navigate to="/signin" />;
};
export default PrivateRoute;
