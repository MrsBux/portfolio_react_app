import { Link } from "react-router-dom";
import "../../style/css/header.css";
import logo from "../../assets/logohd.webp";

function Header() {
  return (
    <header>
      <div className="navbar">
        <div className="navbar__logo">
          <Link to="/">
            <img src={logo} alt="logo bux web compagnie"></img>
          </Link>
        </div>
        <nav className="navbar__menu">
          <Link to="/" className="navbar__menu__link">
            Accueil
          </Link>
          <Link to="/gallery" className="navbar__menu__link">
            Galerie
          </Link>
          <Link to="/services" className="navbar__menu__link">
            Services
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
