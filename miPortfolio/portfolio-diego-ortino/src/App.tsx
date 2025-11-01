import { Header } from './components/header'
import { BrowserRouter } from "react-router-dom";
import Background from './components/Background';
import './App.css'
import MisProyectos from './components/MisProyectos';
import Contacto from './components/contacto';
import SobreMi from './components/SobreMi';

function App() {
  return (
    <>
      {/* Fondo global con Three */}
      <Background /> 
      
      {/* Contenido por encima */}
      <main style={{ position: "relative", zIndex: 1 }}>
        <BrowserRouter>
          <Header />
          <SobreMi />
          <MisProyectos />
          <Contacto />
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
