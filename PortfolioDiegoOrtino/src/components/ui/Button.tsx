import { type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  onClick?: () => void;
  target?: string;
  className?: string;
};

export function Button({ children, href, variant = 'primary', onClick, target, className }: ButtonProps) {
  const classes = ['btn', `btn-${variant}`, className].filter(Boolean).join(' ');

  if (href) {
    return (
      <a className={classes} href={href} target={target} rel={target === '_blank' ? 'noreferrer' : undefined}>
        <span className="btn-label">{children}</span>
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      <span className="btn-label">{children}</span>
    </button>
  );
}
