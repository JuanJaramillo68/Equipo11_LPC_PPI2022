import React from "react";
import logo from '../Imagenes/logo.png';


function Iniciosesion() {
    return (
        <div className="container">
            <div className="row">
                <img src={logo} alt="logo" className="mx-auto" style={{maxWidth: "500px"}}/>
                
                <div className="container pb-3">
                    <div className="mx-auto" style={{maxWidth: "500px"}}>
                        
                        <div className="card">
                            <div className="card-header">
                                Iniciar sesión
                            </div>
                            <div className="card-body">
                            <form action="/homeL" method="get">
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Correo electrónico</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">Escriba su correo electrónico.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1">Recordarme</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                                </form>
                            </div>
                            </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default Iniciosesion;