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
      'Plataforma pensada para que los colaboradores de una organizacion puedan gestionar sus ausencias y tareas pendientes. Utiliza Google Spreadsheets implmentado API mediante Apps Script para el backend, esto permite una facil gestion y mantenimiento de la informacion para el personal administrativo. Puede probarse con el usuario de prueba user_test@gmail.com y la contraseña Test1234.',
    tech: ['React', 'TypeScript', 'Vite', 'SpreadSheets', 'AppScripts'],
    type: 'web',
    image:
      'proyects-images/gestionInterna.png',
    links: { demo: 'https://gestiondelpersonal-diegoortino.netlify.app', repo: 'https://github.com/diegoortino/gestion-del-personal' },
    featured: true,
    date: '2025-09-02',
  },
  {
    id: 'gestion-gastos',
    title: 'App de gestion de gastos personales',
    description:
      'App pensada para la gestión de presupuesto mensual y gastos. Utiliza como backEnd tablas de Google Spreadsheets implementada como appWeb mediante Google Appscripts. el FrontEnd está realizado en React. Se utilizaron herramientas como ChatGPT Codex 5.1 Max para la codificacion del proyecto en react.',
    tech: ['React', 'TypeScript', 'Vite', 'SpreadSheets', 'AppScripts', 'Vercel'],
    type: 'web',
    image:
      'proyects-images/gestionInterna.png',
    links: { demo: 'https://app-gestion-gastos-diegoortino.vercel.app', repo: 'https://github.com/diegoortino/appGastos'},
    featured: true,
    date: '2024-11-15',
  }
];
