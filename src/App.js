import {BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./comp/Menu"
import Football from "./comp/Football";
import FootballMulti from "./comp/FootballMulti";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu/>}/>
        <Route path="/single" element={<Football/>}/>
        <Route path="/multi" element={<FootballMulti/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
