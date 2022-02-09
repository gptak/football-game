import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SinglePanel from "./SinglePanel";
import Football from "./Football";
import "./Football.css";

const SingleMenu = () => {
  const [playerAColor, setPlayerAColor] = useState("#0000FF");
  const [playerBColor, setPlayerBColor] = useState("#FF0000");
  const [winScore, setWinScore] = useState(3);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <SinglePanel
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
          <Football playerAColor={playerAColor} playerBColor={playerBColor} winScore={winScore}/>
        }
      />
    </Routes>
  );
};

export default SingleMenu;
