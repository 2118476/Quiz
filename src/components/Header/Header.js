import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        Yeab Quiz Hub
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;
