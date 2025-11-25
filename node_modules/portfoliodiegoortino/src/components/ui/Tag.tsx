import { type ReactNode } from 'react';

type TagTone = 'default' | 'accent' | 'muted';

type TagProps = {
  children: ReactNode;
  tone?: TagTone;
};

export function Tag({ children, tone = 'default' }: TagProps) {
  return <span className={`tag tag-${tone}`}>{children}</span>;
}
