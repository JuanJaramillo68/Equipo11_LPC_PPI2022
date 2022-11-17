import React from "react";
import logo from '../Imagenes/logo.png';
import { Link } from 'react-router-dom';

function Portada() {
    return (
        <div className="container">
            <div className="row">
                <img src={logo} alt="logo" className="mx-auto" style={{maxWidth: "500px"}}/>

                <div className="container">
                    <div className="mx-auto">
                        <p className="text-center">Comienza, transforma o impulsa tu carrera profesional con más de 5000 cursos, certificados profesionales y títulos de grado de universidades y empresas de nivel mundial.</p>
                    </div>
                </div>
                <Link to="/login">
                    <div className="d-grid gap-2 col-6 mx-auto pb-1">
                        <button className="btn btn-primary btn-primary-outline-success" type="button"> Iniciar Sesión
                        </button>
                    </div>
                </Link>
                
                <Link to="/registro">
                    <div className="d-grid gap-2 col-6 mx-auto pb-3">
                        <button className="btn btn-primary" type="button">Registrarme</button>
                    </div>
                </Link>
                
                
            </div>
            
        </div>
    );
}
export default Portada;