import { Link } from "react-router-dom";
import "./Football.css";

const Menu = () => {
 
  return (
    <div className="football">
      <header className="title">
        <h1>Football Game</h1>
      </header>
      <nav className="nav">
        <Link className="button" to="/single">
          Single Player
        </Link>
        <Link className="button" to="/multi">
          Two Players
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
