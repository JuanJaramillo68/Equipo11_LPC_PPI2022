import React from "react";
import { Link } from 'react-router-dom';
import '../Estilos/index.css';

function Vender() {
    return (
        <div className="container p-3">
            <form class="row g-3">
<div class="col-md-6">
  <label for="inputEmail4" class="form-label">Marca</label>
  <input type="text" class="form-control" id="inputEmail4"/>
</div>
<div class="col-md-6">
  <label for="inputtext" class="form-label">Modelo</label>
  <input type="text" class="form-control" id="inputtext"/>
</div>
<div class="col-md-6">
  <label for="inputState" class="form-label">Elige que vehiculo quieres vender</label>
  <select id="inputState" class="form-select">
    <option selected>Elige...</option>
    <option>Automovil</option>
    <option>Motocicleta</option>
  </select>
</div>
<div class="col-6">
  <label for="inputAddress2" class="form-label">¿Cuantos Kilometros tiene?</label>
  <input type="text" class="form-control" id="inputAddress2" placeholder="Ej,:40.000"/>
</div>
<div class="col-md-6">
  <label for="inputState" class="form-label">¿De que color es tu vehiculo?</label>
  <select id="inputState" class="form-select">
    <option selected>Elige el color</option>
    <option>Negro</option>
    <option>Blanco</option>
    <option>Rojo</option>
    <option>Azul</option>
    <option>Verde</option>
  </select>
  </div>
  <section className="text py-3">
                        <Link to="/cursos" className="btn btn-warning">Publicar</Link>
                    </section>
</form>
        </div>
        
        

    );
}
export default Vender;