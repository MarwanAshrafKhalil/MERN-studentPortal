import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./_app.scss";

import i18next from "i18next";
import SignIn from "./pages/signIn/SignIn";
import MainApp from "./components/MainApp";
import PrivateRoute from "./components/PrivateRoute";
import { useEffect, useState } from "react";
import { useAppSelector } from "./redux/app/hooks";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);
  const login = useAppSelector((state) => state.loginPunch.loginState);

  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLanguage(i18next.language);
    };

    i18next.on("languageChanged", handleLanguageChange);

    return () => {
      i18next.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return (
    <div dir={currentLanguage == "ar" ? "rtl" : "ltr"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          debugger;
          <Route element={<PrivateRoute login={login} />}>
            <Route path="/*" element={login && <MainApp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
