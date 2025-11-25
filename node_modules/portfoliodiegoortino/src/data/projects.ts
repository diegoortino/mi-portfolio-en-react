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
    id: 'vibra-music',
    title: 'Vibra Music Platform',
    description:
      'Plataforma de streaming de música con recomendaciones personalizadas e imagenes con IA en tiempo real.',
    tech: ['React', 'TypeScript', 'Vite', 'MongoDB', 'MySQL', 'NestJS'],
    type: 'web',
    image:
      'proyects-images/vibra.png',
    links: { demo: 'url no disponible', },
    featured: true,
    date: '2025-12-02',
  },
  {
    id: 'gestion-interna',
    title: 'App interna para la gestion del personal',
    description:
      'Plataforma pensada para que los colaboradores de una organizacion puedan gestionar sus ausencias y tareas pendientes. Utiliza Google Spreadsheets implmentado API mediante Apps Script para el backend, esto permite una facil gestion y mantenimiento de la informacion para el personal administrativo.',
    tech: ['React', 'TypeScript', 'Vite', 'SpreadSheets', 'AppScripts'],
    type: 'web',
    image:
      'proyects-images/gestionInterna.png',
    links: { demo: 'url no disponible', },
    featured: true,
    date: '2025-09-02',
  },
];
