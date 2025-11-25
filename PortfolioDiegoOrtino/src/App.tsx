import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Blog, PostModal } from './sections/Blog';
import { Contact } from './sections/Contact';
import { posts } from './data/posts';

function Page() {
  const navigate = useNavigate();
  const { postId } = useParams<{ postId?: string }>();
  const selectedPost = posts.find((post) => post.id === postId);

  const handleOpenPost = (id: string) => navigate(`/blog/${id}`);
  const handleClosePost = () => navigate('/', { replace: true });

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Blog onOpenPost={handleOpenPost} />
        <Contact />
      </main>
      <Footer />
      {selectedPost ? <PostModal post={selectedPost} onClose={handleClosePost} /> : null}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/blog/:postId" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
