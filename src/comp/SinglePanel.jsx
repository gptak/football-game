import { Link } from "react-router-dom";
import "../styles/Football.css";

const SinglePanel = ({
  setPlayerAColor,
  setPlayerBColor,
  playerAColor,
  playerBColor,
  winScore,
  setWinScore,
}) => {
  const colorAChangeHandler = (e) => {
    const colorA = e.target.value;
    setPlayerAColor(colorA);
  };

  const colorBChangeHandler = (e) => {
    const colorB = e.target.value;
    setPlayerBColor(colorB);
  };

  const scoreHandler = (e) => {
    const score = e.target.value;
    setWinScore(score);
  };

  return (
    <div className="football">
      <header className="title">
        <h1>Football Game</h1>
        <h2>Single Player</h2>
      </header>
      <div className="options">
        <h2 className="options_title">Options</h2>
        <div className="option">
          <label htmlFor="playerAColor">Your color:</label>
          <input
            type="color"
            id="playerAColor"
            value={playerAColor}
            onChange={colorAChangeHandler}
          />
        </div>
        <div className="option">
          <label htmlFor="playerBColor">Oponent color:</label>
          <input
            type="color"
            id="playerBColor"
            value={playerBColor}
            onChange={colorBChangeHandler}
          />
        </div>

        <div className="option">
          <label htmlFor="playerAColor">Goals to win:</label>
          <input
            type="number"
            id="winScore"
            value={winScore}
            min="1"
            max="10"
            onChange={scoreHandler}
          />
        </div>
      </div>
      <div className="control">
        <h2 className="options_title">Control</h2>
        <p>Use WSAD to move. Q key to kick the ball.</p>
      </div>

      <nav className="nav">
        <Link className="button" to="./game">
          Play
        </Link>
        <Link className="button small_button" to="/">
          Back to main menu
        </Link>
      </nav>
    </div>
  );
};

export default SinglePanel;
