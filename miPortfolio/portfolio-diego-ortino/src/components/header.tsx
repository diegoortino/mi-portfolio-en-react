import portfolioLogo from "../icons/header-logo-2.png";
import "./header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <Link to="/" className="link-clean">
        <div className="logo-container">
                <img className="logo-header" src={portfolioLogo} alt="logo del portfolio" />
                <p className="text-logo">Diego Ortino</p>
        </div>
        </Link>

      {/* Navegación */}
      <nav className="nav-container">
        <Link to="/sobre-mi" className="link-clean">
          <nav className="nav-link is-first"><p className="text-header">Sobre mi</p></nav>
        </Link>
        <Link to="/mis-proyectos" className="link-clean">
          <nav className="nav-link is-middle"><p className="text-header">Mis proyectos</p></nav>
        </Link>
        <Link to="/contacto" className="link-clean">
          <nav className="nav-link is-last"><p className="text-header">Contacto</p></nav>
        </Link>
      </nav>
    </header>
  );
};

export default Header;