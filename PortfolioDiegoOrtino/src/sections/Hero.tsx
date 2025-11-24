import halftone from '../assets/halftone.svg';
import { Button } from '../components/ui/Button';
import { Tag } from '../components/ui/Tag';

const heroBg =
  'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1600&q=80&sat=-100';

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-media" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay" />
        <div className="hero-halftone" style={{ backgroundImage: `url(${halftone})` }} />
      </div>
      <div className="container hero-content">
        <div className="hero-text">
          <span className="eyebrow">Portfolio · 2025</span>
          <h1>
            <span className="highlight">Diego Ortino</span> —{' '}
            <span className="highlight">Full-Stack</span> +{' '}
            <span className="highlight">Automation Developer</span>
          </h1>
          <p>
            Construyo productos digitales con estética editorial, performance cuidada y microinteracciones que suman.
            Me muevo entre frontend, backend y automatización para construir soluciones que sumen.
          </p>
          <div className="hero-actions">
            <Button onClick={() => scrollTo('projects')}>Ver proyectos</Button>
            <Button variant="ghost" href="/cv.pdf" target="_blank">
              Descargar CV
            </Button>
          </div>
          <div className="hero-tags">
            <Tag tone="accent">Disponible · Remote friendly</Tag>
            <Tag>React · TypeScript · Node · AppScripts</Tag>
          </div>
        </div>
        <div className="hero-metrics glass">
          <div>
            <strong>+30</strong>
            <span>Features entregadas en 2025</span>
          </div>
          <div>
            <strong>+3</strong>
            <span>Years of experience automating office workflows with Google Apps Script</span>
          </div>
          <div>
            <strong>Ops</strong>
            <span>Automations · Dashboards · UI kits</span>
          </div>
        </div>
      </div>
    </section>
  );
}
