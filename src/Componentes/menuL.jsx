import React from "react";
import { Link } from 'react-router-dom';
import '../Estilos/index.css';

function MenuL() {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/homeL">
                        <i>
                            Ensigna
                        </i>
                    
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/homeL">Inicio</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to="/perfil">Perfil</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to="/cursosL">Cursos</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to="/miscursos">Mis cursos</Link>
                            </li>
                            
                            <li className="nav-item">
                            <Link className="nav-link active" to="/">Cerrar Sesión</Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
            <div className="container p-3">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="¿Que quieres aprender?" aria-label="Search"/>
                    <button className="btn btn-primary btn-primary-outline-success" type="submit">Buscar</button>
                </form>
            </div>
            

        </div>
    );
}
export default MenuL;