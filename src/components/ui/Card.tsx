import { type ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  image?: string;
  alt?: string;
  badge?: ReactNode;
  tone?: 'default' | 'soft';
};

export function Card({ children, image, alt, badge, tone = 'default' }: CardProps) {
  return (
    <article className={`card card-${tone}`}>
      {image ? (
        <div className="card-media">
          <img src={image} alt={alt ?? ''} loading="lazy" />
          {badge && <div className="card-badge">{badge}</div>}
        </div>
      ) : null}
      <div className="card-body">{children}</div>
    </article>
  );
}
