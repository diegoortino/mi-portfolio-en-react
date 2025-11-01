import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Background from "./components/Background";
import "./App.css";
import Contacto from "./components/Contacto";
import MisProyectos from "./components/MisProyectos";
import SobreMi from "./components/SobreMi";
import { Header } from "./components/header";

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Background variant={isHome ? "full" : "sidebar"} />
      <main className={`app-shell ${isHome ? "app-shell--home" : "app-shell--section"}`}>
        <Header />
        <div className="app-shell__content">
          <Routes>
            <Route path="/" element={<div className="app-shell__placeholder" />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/mis-proyectos" element={<MisProyectos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
