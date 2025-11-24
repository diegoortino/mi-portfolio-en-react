import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';

const navItems = [
  { id: 'hero', label: 'Inicio' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contacto' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') navigate('/');
    handleScroll('hero');
  };

  return (
    <header className="header glass">
      <div className="container header-row">
        <button className="brand" onClick={handleLogoClick} type="button" aria-label="Ir al inicio">
          <img className='brand-mark' src="/portfolioLogo.png" alt="Logo" />
          <div className="brand-text">
            <strong>Diego Ortino</strong>
          </div>
        </button>
        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className="nav-link"
              onClick={() => handleScroll(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
          <div className="nav-cta">
            <Button variant="ghost" onClick={() => handleScroll('contact')}>
              Agenda una llamada
            </Button>
          </div>
        </nav>
        <button
          className="burger"
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
