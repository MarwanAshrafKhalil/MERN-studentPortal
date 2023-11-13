import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./_app.scss";
import Sidebar from "./components/sidebar/Sidebar";
import { ReactNode, useEffect, useState } from "react";
import Header from "./components/header/Header";
import Dashboard from "./pages/dashboard/Dashboard";
import AllAnnouncements from "./pages/allAnnouncements/AllAnnouncements";
import AllTasks from "./pages/allTasks/AllTasks";
import i18next from "i18next";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar: () => void = () => {
    // debugger;
    toggleSidebar((sidebar) => !sidebar);
  };
  return (
    <>
      <div className=" app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />

        <Container fluid className="app__main ">
          <Header handleToggleSidebar={handleToggleSidebar} />
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

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
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />

          <Route
            path="/announcements"
            element={
              <Layout>
                <AllAnnouncements />
              </Layout>
            }
          />

          <Route
            path="/tasks"
            element={
              <Layout>
                <AllTasks />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
