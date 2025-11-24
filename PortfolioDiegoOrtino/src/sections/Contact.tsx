import { type FormEvent } from 'react';
import { contact } from '../data/contact';
import { Section } from '../components/layout/Section';
import { Button } from '../components/ui/Button';
import { Tag } from '../components/ui/Tag';

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') || 'Contacto';
    const email = formData.get('email') || '';
    const message = formData.get('message') || '';
    const subject = encodeURIComponent(`Hola Diego — ${name}`);
    const body = encodeURIComponent(`Soy ${name} (${email}).\n\n${message}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section
      id="contact"
      eyebrow="Contacto"
      title="Hablemos"
      subtitle="Proyectos, consultorías o mejoras en productos en vivo."
      background="accent"
      align="center"
    >
      <div className="contact-shell">
        <div className="contact-card glass">
          <div className="contact-info">
            <h3>{contact.email}</h3>
            <p>Respondo en menos de 24hs. Compartí contexto y timeline.</p>
            <div className="contact-tags">
              <Tag tone="accent">{contact.location}</Tag>
              <Tag>{contact.availability}</Tag>
            </div>
            <div className="contact-links">
              <Button href={`mailto:${contact.email}`}>Escribir</Button>
              <Button href={contact.linkedin} variant="ghost" target="_blank">
                LinkedIn
              </Button>
              <Button href={contact.github} variant="ghost" target="_blank">
                GitHub
              </Button>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Nombre
              <input name="name" placeholder="¿Quién eres?" />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="tu@email.com" />
            </label>
            <label>
              Mensaje
              <textarea name="message" rows={4} placeholder="Idea, scope, deadlines..." />
            </label>
            <Button variant="secondary">Enviar</Button>
          </form>
        </div>
      </div>
    </Section>
  );
}
