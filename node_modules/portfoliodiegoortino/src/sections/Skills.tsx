import { skills as skillData } from '../data/skills';
import { Section } from '../components/layout/Section';
import { Tag } from '../components/ui/Tag';

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools',
  design: 'Design',
};

const levelLabel: Record<string, string> = {
  advanced: 'Avanzado',
  intermediate: 'Intermedio',
  basic: 'Básico',
};

export function Skills() {
  const grouped = skillData.reduce<Record<string, typeof skillData>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Habilidades"
      subtitle="Stack que uso a diario para desarrollar productos y mantenerlos vivos."
      background="soft"
    >
      <div className="skills-grid">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="skill-column glass">
            <div className="skill-header">
              <Tag tone="accent">{categoryLabels[category]}</Tag>
            </div>
            <div className="skill-list">
              {items.map((skill) => (
                <div key={skill.id} className="skill-item">
                  <span>{skill.name}</span>
                  <div className={`skill-level level-${skill.level}`}>
                    <span>{levelLabel[skill.level]}</span>
                    <div className="level-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
