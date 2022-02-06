import { Link } from "react-router-dom";
import "./Football.css";

const MultiPanel = ({
  setPlayerAColor,
  setPlayerBColor,
  playerAColor,
  playerBColor,
}) => {
  const colorAChangeHandler = (e) => {
    const colorA = e.target.value;
    setPlayerAColor(colorA);
  };

  const colorBChangeHandler = (e) => {
    const colorB = e.target.value;
    setPlayerBColor(colorB);
  };

  return (
    <div className="football">
      <header className="title">
        <h1>Football Game</h1>
      </header>
      <input
        type="color"
        id="playerAColor"
        value={playerAColor}
        onChange={colorAChangeHandler}
      />
      <input
        type="color"
        id="playerBColor"
        value={playerBColor}
        onChange={colorBChangeHandler}
      />
      <nav className="nav">
        <Link className="button" to="./game">
          Play
        </Link>
        <Link className="button" to="/">
          Back to menu
        </Link>
      </nav>
    </div>
  );
};

export default MultiPanel;
