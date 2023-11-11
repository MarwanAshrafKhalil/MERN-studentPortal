import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./_app.scss";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
