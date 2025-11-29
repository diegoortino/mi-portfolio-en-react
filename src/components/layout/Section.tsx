import { type ReactNode } from 'react';
import { Divider } from '../ui/Divider';

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  background?: 'dark' | 'soft' | 'accent';
  align?: 'left' | 'center';
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  background = 'dark',
  align = 'left',
  children,
}: SectionProps) {
  const sectionClass = `section-block section-${background}`;
  const headerClass = `section-header ${align === 'center' ? 'center' : ''}`;

  return (
    <section id={id} className={sectionClass}>
      <div className="container">
        <div className={headerClass}>
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : <Divider />}
          <div className="section-titles">
            <h2>{title}</h2>
            {subtitle ? <p>{subtitle}</p> : null}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
