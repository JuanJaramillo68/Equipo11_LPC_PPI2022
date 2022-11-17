import React from "react";
import LOGO from '../Imagenes/LOGO.png'


function Register() {
    return (
      
    
        <div className="container">
            <div className="row">

                    <div className="mx-auto text-center py-4" >          
                    </div>

                <div className="container pb-3">
                    <div className="mx-auto" style={{maxWidth: "500px"}}>

                        <form class="row g-3" action="homeL" method="get">
                        <div class="col-md-6">
                        <div class="col-md-6">
                            <label for="inputZip" class="form-label"><b>Nombre</b></label>
                            <input type="text" class="form-control" id="input" placeholder="Ingresa tu nombre"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputZip" class="form-label"><b>Apellido</b></label>
                            <input type="text" class="form-control" id="input" placeholder="Ingresa tu Apellido"/>
                        </div>
                            <label for="inputEmail4" class="form-label"><b>Correo electronico</b></label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="ejemplo@ejemplo.com"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label"><b>Contraseña</b></label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder="Ingresa tu contraseña"/>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label"><b>Dirección</b></label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label"><b>Complemento</b></label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartamento, casa, piso"/>
                        </div>
                        
                        <div class="col-md-4">
                            <label for="inputState" class="form-label"><b>Departamento</b></label>
                            <select id="inputState" class="form-select">
                            <option selected>Antioquia</option>
                            <option>Magdalena</option>
                            <option>Cundinamarca</option>
                            <option>Santander</option>
                            <option>Atlantico</option>
                            
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label"><b>Ciudad</b></label>
                            <input type="text" class="form-control" id="inputCity" placeholder="Medellín"/>
                        </div>
                        <div class="col-md-4">
                            <label for="inputZip" class="form-label"><b>Ocupación</b></label>
                            <input type="text" class="form-control" id="input"/>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-warning">Registrarme</button>
                        </div>
                        </form>
                                        

                    </div>
                 </div>
            </div>
        </div>
            
    );
}
export default Register;