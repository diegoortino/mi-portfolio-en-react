import './SobreMi.css';
import { Link } from "react-router-dom";

export function SobreMi() {

    return (
        <div className="aboutMe-section-container">
            
            <div className='hero-tittle'>
                <p className='hero-tittle-text'>Sobre Mi</p>
            </div>
            <div className='hero-content'>
                <p className='hero-content-text'>Soy Diego, desarrollador web con experiencia en Front End y Backend. Me encanta crear aplicaciones web interactivas y funcionales.</p>
                <p className='hero-content-text'>Poseo experiencia en el desarrollo de automatizaciones y paginas web de gestion interna para organizaciones empresariales.</p>
                <p className='hero-content-text'>Me especializo en el uso de Google AppScripts en base a Google Sheets tanto para automatizar flujos de informacion como para su uso en desarrollo de dashboards y sistemas HTML cerrados.</p>
                <p className='hero-content-text'>¿Nececitas ayuda con tu proyecto y crees que puedo ayudarte?</p>
                <Link to="/contacto" className="link-clean">
                <button className='hero-button'>Hablemos</button>
                </Link>
            </div>

        </div>
    );

};

export default SobreMi;