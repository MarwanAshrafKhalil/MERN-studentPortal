import { Navigate, Route, Routes } from "react-router";
import Sidebar from "./sidebar/Sidebar";
import { Container } from "react-bootstrap";
import Header from "./header/Header";
import { ReactNode, useState } from "react";
import Dashboard from "../pages/dashboard/Dashboard";
import AllAnnouncements from "../pages/allAnnouncements/AllAnnouncements";
import AllTasks from "../pages/allTasks/AllTasks";
import UnderConst from "../pages/underConstruction/UnderConst";
import React from "react";

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

// export interface MainAppProps {
//   handleToggleSignIn: () => void;
// }

export const MainApp: React.FC = () => {
  return (
    <div>
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
        <Route path="/pending" element={<UnderConst />} />

        <Route path="/*" element={<Navigate to="/pending" />} />
      </Routes>
    </div>
  );
};

export default MainApp;
