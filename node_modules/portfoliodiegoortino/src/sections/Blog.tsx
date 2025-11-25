import { posts, type Post } from '../data/posts';
import { Section } from '../components/layout/Section';
import { Card } from '../components/ui/Card';
import { Tag } from '../components/ui/Tag';
import { Button } from '../components/ui/Button';

type BlogProps = {
  onOpenPost: (id: string) => void;
};

export function Blog({ onOpenPost }: BlogProps) {
  const latest = posts.slice(0, 6);

  return (
    <Section
      id="blog"
      eyebrow="Reflexiones"
      title="Blog / Notas rápidas"
      subtitle="Reflexiones e ideas sobre crecicimiento profesional, desarollo y herramientas."
      background="dark"
    >
      <div className="card-grid blog-grid">
        {latest.map((post) => (
          <Card
            key={post.id}
            image={post.cover}
            alt={post.title}
            badge={<Tag tone="accent">{new Date(post.date).toLocaleDateString()}</Tag>}
            tone="soft"
          >
            <div className="card-headline">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>
            <div className="tech-row">
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <div className="card-actions">
              <Button variant="ghost" onClick={() => onOpenPost(post.id)}>
                Leer
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

type PostModalProps = {
  post: Post;
  onClose: () => void;
};

export function PostModal({ post, onClose }: PostModalProps) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal glass">
        <div className="modal-header">
          <Tag tone="accent">{new Date(post.date).toLocaleDateString()}</Tag>
          <button className="close" type="button" onClick={onClose} aria-label="Cerrar">
            ×
          </button>
        </div>
        <h3>{post.title}</h3>
        <p className="modal-subtitle">{post.tags.join(' · ')}</p>
        <div className="modal-content">
          {post.content.split('\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
        <div className="card-actions">
          <Button onClick={onClose}>Cerrar</Button>
        </div>
      </div>
    </div>
  );
}
