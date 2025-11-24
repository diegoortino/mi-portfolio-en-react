export type Post = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  cover?: string;
  content: string;
};

export const posts: Post[] = [
  {
    id: 'designing-dark',
    title: 'Diseñar en dark mode sin perder contraste',
    excerpt:
      'Tips rápidos para balancear acentos saturados, grises suaves y microdetalles que elevan un layout oscuro.',
    date: '2024-10-21',
    tags: ['UI', 'Design Systems', 'Accesibilidad'],
    cover:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80&sat=-100',
    content:
      'Una paleta oscura funciona cuando los acentos son medidos y el texto respira. Combinar grises cálidos con amarillos mostaza reduce el contraste extremo y crea jerarquías claras. Mantener 1-2 acentos, reforzar el estado hover con bordes sutiles y usar textura (halftone, grain) para dar profundidad sin cargar el UI.',
  },
  {
    id: 'shipping-faster',
    title: 'Shipping rápido sin sacrificar claridad',
    excerpt: 'Checklist personal para lanzar features en días: scope, diseño low-fi, validación y QA.',
    date: '2024-09-12',
    tags: ['Product', 'Procesos'],
    content:
      'Trabajo en iteraciones cortas: defino el outcome, armo un doc breve con riesgos y límites, maqueto low-fi y codifico con componentes reutilizables. Las PRs incluyen grabación corta y notas de test. Esta rutina redujo retrabajo y hace que los stakeholders sepan qué esperar.',
  },
  {
    id: 'edge-react',
    title: 'Renderizar en el edge con React',
    excerpt: 'Experimentos con SSR y streaming para dashboards en vivo.',
    date: '2024-07-05',
    tags: ['React', 'Edge', 'Rendimiento'],
    cover:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80&sat=-100',
    content:
      'SSR en el edge reduce TTFB, pero hay que cuidar caché y data-fetching. Usar loaders ligeros, invalidar por path y evitar dependencias pesadas en el servidor es clave. También separo assets críticos (CSS, fuentes) y activo streaming para que el hero aparezca inmediato.',
  },
  {
    id: 'composable-ui',
    title: 'UI componible con tokens',
    excerpt: 'Cómo los design tokens aceleran handoff entre diseño y dev.',
    date: '2024-05-18',
    tags: ['Design Tokens', 'Frontend'],
    content:
      'Centralizar color, tipografías y espaciados en tokens mantiene coherencia y reduce tiempo de QA visual. En proyectos React uso un archivo tokens.css y componentes pequeños (Button, Tag, Card). Cambiar un valor afecta toda la UI; esto habilita themes rápidos para clientes.',
  },
];
