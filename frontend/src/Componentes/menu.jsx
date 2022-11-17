import React from "react";
import { Link } from 'react-router-dom';
import '../Estilos/index.css';

function Menu() {
    return (
        <div className="header">
        <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <i>
                        WorldRacing
                        </i>   

                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link active" to="/login">Iniciar Sesión</Link>
                        </li>
                        
                        <li className="nav-item">
                        <Link className="nav-link active" to="/registro">Registrarme</Link>
                        </li>
                    </ul>
                </div>
            </div>
         </nav>
         <div className="container p-2">
         <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="¿Que vehiculo estas buscando?" aria-label="Search"/>
                 <button className="btn btn-warning btn-primary-outline-warning" type="submit">Buscar</button>
        </form>
         </div>
         <div classNameName="container" style={{backgroundColor: "#FFED35"}}>
            <div className="p-3">
                <h1 className="encabezado text fw-bold">Encuentra tu vehiculo ideal al mejor precio.</h1>
               
               
            </div>
         </div>

        </div>
    );
}
export default Menu;