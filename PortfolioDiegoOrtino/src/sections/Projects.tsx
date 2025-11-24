import { useMemo, useState } from 'react';
import { projects as projectData, type Project } from '../data/projects';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Tag } from '../components/ui/Tag';
import { Section } from '../components/layout/Section';

const typeFilters: { label: string; value: Project['type'] | 'all' }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Automation', value: 'automation' },
  { label: 'Backend', value: 'backend' },
  { label: 'Design', value: 'design' },
];

export function Projects() {
  const [activeType, setActiveType] = useState<Project['type'] | 'all'>('all');
  const [activeTech, setActiveTech] = useState<string>('all');

  const techFilters = useMemo(() => {
    const tech = new Set<string>();
    projectData.forEach((p) => p.tech.forEach((t) => tech.add(t)));
    return ['all', ...Array.from(tech)];
  }, []);

  const filtered = useMemo(() => {
    return [...projectData]
      .sort((a, b) => Number(b.featured) - Number(a.featured))
      .filter((project) => {
        const matchType = activeType === 'all' || project.type === activeType;
        const matchTech = activeTech === 'all' || project.tech.includes(activeTech);
        return matchType && matchTech;
      });
  }, [activeTech, activeType]);

  return (
    <Section
      id="projects"
      eyebrow="Proyectos"
      title="Proyectos destacados"
      subtitle="UI editorial, automatización y backends listos para producción."
    >
      <div className="filter-bar">
        <div className="chip-group">
          {typeFilters.map((filter) => (
            <button
              key={filter.value}
              className={`chip ${activeType === filter.value ? 'chip-active' : ''}`}
              onClick={() => setActiveType(filter.value)}
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="chip-group tech">
          {techFilters.map((tech) => (
            <button
              key={tech}
              className={`chip ${activeTech === tech ? 'chip-active' : ''}`}
              onClick={() => setActiveTech(tech)}
              type="button"
            >
              {tech === 'all' ? 'Todo tech' : tech}
            </button>
          ))}
        </div>
      </div>
      <div className="card-grid">
        {filtered.map((project) => (
          <Card
            key={project.id}
            image={project.image}
            alt={project.title}
            badge={<Tag tone="accent">{project.type}</Tag>}
          >
            <div className="card-headline">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="tech-row">
              {project.tech.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
            <div className="card-actions">
              {project.links.demo ? (
                <Button href={project.links.demo} target="_blank">
                  Demo
                </Button>
              ) : null}
              {project.links.repo ? (
                <Button href={project.links.repo} variant="ghost" target="_blank">
                  GitHub
                </Button>
              ) : null}
              <span className="meta">{new Date(project.date).toLocaleDateString()}</span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
