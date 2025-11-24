// src/components/Header.tsx
import portfolioLogo from "../icons/header-logo-2.png";
import "./Header.css";
import Line from "./gsap/Line";
import { Link } from "react-router-dom";
import { useRef } from "react";

export function Header() {
  const logoRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  return (
    <header className="header">
      {/* Logo */}
      <Link to="/" className="link-clean">
        <div className="logo-container"
          ref={logoRef}>
          <p className="text-logo">Diego Ortino</p>
        </div>
      </Link>

      {/* Navegación */}
      <nav className="nav-container" ref={navRef}>
        <Link to="/sobre-mi" className="link-clean">
          <div className="nav-link is-first">
            <p className="text-header">Sobre mi</p>
          </div>
        </Link>

        <Link to="/mis-proyectos" className="link-clean">
          <div className="nav-link is-middle">
            <p className="text-header">Mis proyectos</p>
          </div>
        </Link>

        <Link to="/contacto" className="link-clean">
          <div className="nav-link is-last">
            <p className="text-header">Contacto</p>
          </div>
        </Link>

        {/* Línea animada debajo del nav */}
        <Line ref={lineRef} />
      </nav>
    </header>
  );
}

export default Header;
