import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import FootballMulti from "./FootballMulti";
import MultiPanel from "./MultiPanel";
import "./Football.css";

const MultiMenu = () => {
  const [playerAColor, setPlayerAColor] = useState("#0000FF");
  const [playerBColor, setPlayerBColor] = useState("#FF0000");
  const [winScore, setWinScore] = useState(3);

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
            winScore={winScore}
            setWinScore={setWinScore}
          />
        }
      />
      <Route
        path="/game"
        element={
          <FootballMulti
            playerAColor={playerAColor}
            playerBColor={playerBColor}
            winScore={winScore}
          />
        }
      />
    </Routes>
  );
};

export default MultiMenu;
