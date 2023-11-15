// UnderConstruction.tsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SettingsSuggest } from "@mui/icons-material/";
import "./underConst.scss";

const UnderConst: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the home page after 2 seconds
    const timeoutId = setTimeout(() => {
      navigate("/dashboard");
    }, 2000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="underConst">
      <div className="underConst__content">
        <SettingsSuggest style={{ fontSize: "160px" }} />
        <h1>Under Construction</h1>
        <p>
          This page is currently under construction. Redirecting to the home
          page...
        </p>
      </div>
    </div>
  );
};

export default UnderConst;
