import React from "react";
import "./signIn.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/app/hooks";
import { loggIn } from "../../redux/features/signIn/signIn.action";

export const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function toggleLogin() {
    dispatch(loggIn());

    navigate("/dashboard");
  }
  return (
    <div className="signIn">
      <button onClick={() => toggleLogin()}>Sign In</button>
    </div>
  );
};

export default SignIn;
