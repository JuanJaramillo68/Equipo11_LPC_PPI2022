import React from "react";


function Register() {
    return (
        <div className="container">
            <div className="row">

                <div className="mx-auto text-center py-4" >
                    <h1>Registrate</h1>
                    <p>Aprende a tu propio ritmo en las principales universidades y negocios.</p>
                </div>
                
                <div className="container pb-3">
                    <div className="mx-auto" style={{maxWidth: "500px"}}>
                        
                    <form className="row g-3" action="homeL" method="get">
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label"> <strong>Correo</strong> </label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="ejemplo@ejemplo.com"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label"> <b>Contraseña</b> </label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Ingresa tu contraseña"/>
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label"><b>Dirección</b></label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div className="col-12">
                            <label for="inputAddress2" className="form-label"><b>Complemento</b></label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartmento, casa, piso.."/>
                        </div>
                        
                        <div className="col-md-4">
                            <label for="inputState" className="form-label"><b>Departamento</b> </label>
                            <select id="inputState" className="form-select">
                            <option selected>Antioquia</option>
                            <option>Magdalena</option>
                            <option>Cundinamarca</option>
                            <option>Santander</option>
                            <option>Atlantico</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label"><b>Ciudad</b></label>
                            <input type="text" className="form-control" id="inputCity" placeholder="Medellín"/>
                        </div>
                        <div className="col-md-2">
                            <label for="input" className="form-label"><b>Ocupación</b></label>
                            <input type="text" className="form-control" id="input"/>
                        </div>
                        
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Registrarme</button>
                        </div>
                        </form>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default Register;