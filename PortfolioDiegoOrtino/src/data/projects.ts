export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  type: 'web' | 'automation' | 'backend' | 'design';
  image: string;
  links: { demo?: string; repo?: string };
  featured: boolean;
  date: string;
};

export const projects: Project[] = [
  {
    id: 'atlas-ops',
    title: 'Atlas Ops Dashboard',
    description:
      'Suite de monitoreo en tiempo real para equipos de operaciones con alertas inteligentes y paneles custom.',
    tech: ['React', 'TypeScript', 'Vite', 'WebSockets'],
    type: 'web',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80&sat=-100',
    links: { demo: 'https://ops.atlas.app', repo: 'https://github.com/example/atlas-ops' },
    featured: true,
    date: '2024-09-02',
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation Kit',
    description:
      'Pipelines de automatización con orquestación de microservicios y dashboards de auditoría.',
    tech: ['Node.js', 'TypeScript', 'Redis', 'Docker'],
    type: 'automation',
    image:
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80&sat=-100',
    links: { repo: 'https://github.com/example/workflow-kit' },
    featured: true,
    date: '2024-06-14',
  },
  {
    id: 'folio-421',
    title: 'Portfolio 4.21',
    description:
      'Experiencia editorial en modo oscuro inspirada en 421.news con microinteracciones sutiles y scroll suave.',
    tech: ['React', 'Framer Motion', 'GSAP'],
    type: 'design',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80&sat=-100',
    links: { demo: 'https://folio421.app', repo: 'https://github.com/example/folio-421' },
    featured: true,
    date: '2023-12-01',
  },
  {
    id: 'api-gateway',
    title: 'API Gateway Minimal',
    description:
      'Gateway de APIs con rate limiting, caching y tracing distribuido. Pensado para despliegues rápidos.',
    tech: ['Go', 'OpenTelemetry', 'PostgreSQL'],
    type: 'backend',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80&sat=-100',
    links: { repo: 'https://github.com/example/api-gateway' },
    featured: false,
    date: '2024-02-20',
  },
  {
    id: 'design-kit',
    title: 'Design Kit Noir',
    description:
      'Sistema de diseño minimalista con componentes oscuros, tokens y guías de composición editorial.',
    tech: ['Figma', 'Design Tokens', 'Storybook'],
    type: 'design',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80&sat=-100',
    links: { demo: 'https://designkit.noir', repo: 'https://github.com/example/noir-kit' },
    featured: false,
    date: '2024-08-05',
  },
  {
    id: 'data-notes',
    title: 'Data Notes',
    description:
      'Bloc de notas para análisis de datos con plantillas reutilizables, snippets y gráficos en vivo.',
    tech: ['React', 'TypeScript', 'D3.js'],
    type: 'web',
    image:
      'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1200&q=80&sat=-100',
    links: { demo: 'https://data-notes.app' },
    featured: false,
    date: '2024-04-16',
  },
];
