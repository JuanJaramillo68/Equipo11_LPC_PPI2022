import React from "react";
import logo from '../Imagenes/LOGO.png';

function Iniciosesion() {
    return (
       <div className="container">
        <div className="row">
            <img src={logo} alt="LOGO" className="mx-auto" style={{maxWidth: "500px"}}/>
  
            <div className="container pb-3">
                <div className="mx-auto" style={{maxWidth: "500px"}}>
                 
                    <div class="card">
                        <div class="card-header">
                            Iniciar sesión
                    </div>
                    <div class="card-body">
                    <form action="/HomeL" method="get">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Usuario o correo electrónico</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" class="form-text">Escriba su nombre de usuario o correo electrónico</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Recordarme</label>
                        </div>
                        <button type="submit" class="btn btn-warning">Iniciar sesión</button>
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