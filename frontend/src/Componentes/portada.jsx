import React from "react";
import { Link } from 'react-router-dom';
import YZ from '../Imagenes/YZ.png';
import HILUX from '../Imagenes/HILUX.png';
import PRADO from '../Imagenes/PRADO.png';

function Portada() {
    return (
       <div className="container">
        <div className="row">
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={YZ} class="d-block w-100" alt=""/>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={HILUX} class="d-block w-100" alt=""/>
      <div class="carousel-caption d-none d-md-block"/>
      </div>
    </div>
    <div class="carousel-item">
      <img src={PRADO} class="d-block w-100" alt=""/>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

            <div className="container">
                <div className="mx-auto">
                    <p className="text-center">Compra o vende tu vehiculo facilmente. </p>
                </div>
            </div>
           <Link to="/login">
                <div class="d-grid gap-2 col-6 mx-auto pb-1">
                    <button class="btn btn-warning btn-primary-outline-success" type="button"> Iniciar Sesión </button>
                    
                </div>
           </Link>

            <Link to="/registro">
            <div class="d-grid gap-8 col-6 mx-auto pb-3">
                <button class="btn btn-warning" type="button"> Registrarme </button>
            </div>
            </Link>
                      
        </div>
            
       
    );
}
export default Portada;