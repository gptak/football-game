import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./comp/Menu";
import SingleMenu from "./comp/SingleMenu";
import MultiMenu from "./comp/MuliMenu";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/single/*" element={<SingleMenu />} />
        <Route path="/multi/*" element={<MultiMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
