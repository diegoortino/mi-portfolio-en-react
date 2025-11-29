export type Skill = {
  id: string;
  name: string;
  level: 'advanced' | 'intermediate' | 'basic';
  category: 'frontend' | 'backend' | 'tools' | 'design';
  icon?: string;
};

export const skills: Skill[] = [
  { id: 'react', name: 'React / Vite', level: 'intermediate', category: 'frontend' },

  { id: 'ts', name: 'TypeScript', level: 'advanced', category: 'frontend' },

  { id: 'html', name: 'HTML5', level: 'advanced', category: 'frontend' },

  { id: 'css', name: 'CSS', level: 'intermediate', category: 'frontend' },

  { id: 'JS', name: 'JavaScript', level: 'advanced', category: 'frontend' },

  { id: 'nest', name: 'NestJS', level: 'intermediate', category: 'backend' },

  { id: 'db', name: 'MySql', level: 'intermediate', category: 'backend' },

  { id: 'python', name: 'Python', level: 'intermediate', category: 'backend' },

  { id: 'poo', name: 'Programación Orientada a Objetos', level: 'advanced', category: 'backend' },

  { id: 'appScripts', name: 'Google AppScripts', level: 'advanced', category: 'tools' },

  { id: 'spreadsheets', name: 'Google Sheets', level: 'advanced', category: 'tools' },

  { id: 'codex', name: 'OpenAI Codex', level: 'intermediate', category: 'tools' },

  { id: 'ia', name: 'Inteligencia Artificial', level: 'advanced', category: 'tools' },

  { id: 'git', name: 'Git / GitHub Actions', level: 'advanced', category: 'tools' },

  { id: 'design', name: 'Design Systems', level: 'intermediate', category: 'design' },

  { id: 'bootstrap', name: 'Bootstrap', level: 'intermediate', category: 'design' },
];
