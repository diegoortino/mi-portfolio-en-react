import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { Header } from './components/header';
import { Footer} from './components/footer';
import MisProyectos from './components/myProyects/MisProyectos';
import Contacto from './components/contact/Contacto';
import SobreMi from './components/aboutMe/SobreMi';

function App() {
  return (
    <>
      <main>
        <BrowserRouter>

          <Header />

          {/* Rutas */}
          <Routes>
            <Route path="/"/>
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/mis-proyectos" element={<MisProyectos />} />
            <Route path="/contacto" element={<Contacto />} />
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          <Footer />

        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
