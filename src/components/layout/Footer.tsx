import { contact } from '../../data/contact';
import { Tag } from '../ui/Tag';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <div className="footer-brand">
          <img className='brand-mark' src="/portfolioLogo.png" alt="Logo" />
          <div>
            <h4>Seguimos creando.</h4>
          </div>
        </div>
        <div className="footer-links">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <div className="footer-meta">
          <Tag tone="accent">{contact.location}</Tag>
          <small>© {new Date().getFullYear()} Diego Ortino</small>
        </div>
      </div>
    </footer>
  );
}
