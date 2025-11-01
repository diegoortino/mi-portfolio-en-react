import { Header } from './components/header';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Background from './components/Background';
import './App.css';
import MisProyectos from './components/MisProyectos';
import Contacto from './components/Contacto';
import SobreMi from './components/SobreMi';

function App() {
  return (
    <>
      <Background />
      <main style={{ position: "relative", zIndex: 1 }}>
        <BrowserRouter>
          {/* Header fijo en todas las páginas */}
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
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
