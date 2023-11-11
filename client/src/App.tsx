import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./_app.scss";
import Sidebar from "./components/sidebar/Sidebar";
import { ReactNode } from "react";
import Header from "./components/header/Header";
import Dashboard from "./pages/dashboard/Dashboard";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // const [sidebar, toggleSidebar] = useState(false);

  // const handleToggleSidebar = (): void => {
  //   toggleSidebar((value: boolean) => !value);
  // };
  console.log(children);

  return (
    <>
      <div className="app__container ">
        <Sidebar />

        <Container fluid className="app__main ">
          <Header />

          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  return (
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
