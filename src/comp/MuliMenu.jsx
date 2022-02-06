import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import FootballMulti from "./FootballMulti";
import MultiPanel from "./MultiPanel";
import "./Football.css";

const MultiMenu = () => {
  const [playerAColor, setPlayerAColor] = useState("#0033FF");
  const [playerBColor, setPlayerBColor] = useState("#FF0000");

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MultiPanel
            playerAColor={playerAColor}
            playerBColor={playerBColor}
            setPlayerAColor={setPlayerAColor}
            setPlayerBColor={setPlayerBColor}
          />
        }
      />
      <Route
        path="/game"
        element={
          <FootballMulti
            playerAColor={playerAColor}
            playerBColor={playerBColor}
          />
        }
      />
    </Routes>
  );
};

export default MultiMenu;
