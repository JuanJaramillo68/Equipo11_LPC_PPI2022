import React from "react";
import { Link } from 'react-router-dom';
import cursos from '../Imagenes/MT09.jpg';
import YZ from '../Imagenes/YZ.png';
import HILUX from '../Imagenes/HILUX.png';
import PRADO from '../Imagenes/PRADO.png';
import { RiEBikeLine } from 'react-icons/ri';


function CursosH() {
    return (
        <div className="container pt-5">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card">
                        <img src={cursos} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p><small> <RiEBikeLine/> Medellín, Antioquia</small></p>
                            <h5 class="card-title"> <strong> Yamaha MT-09</strong> </h5>
                            <p class="card-text"> <strong>Cilindraje</strong> <small>890 cc</small></p>
                            <p class="card-text"> <strong>Potencia</strong> <small>117.3 Hp a 10000 rpm</small></p>
                            <p class="card-text"> <strong>Motor</strong> <small>4 Tiempos DOHC, refrigerado por líquido</small></p>
                            <section className="text py-3">
                        <button to="" className="btn btn-warning">Comprar</button>
                    </section>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img src={YZ} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <p><small> <RiEBikeLine/> Bogotá D.C</small></p>
                            <h5 class="card-title"> <strong> Yamaha YZ-125</strong> </h5>
                            <p class="card-text"> <strong>Cilindraje</strong> <small>890 cc</small></p>
                            <p class="card-text"> <strong>Potencia</strong> <small>-</small></p>
                            <p class="card-text"> <strong>Motor</strong> <small>2 Tiempos, refrigerado por liquido</small></p>    
                            <section className="text py-3">
                        <button to="" className="btn btn-warning">Comprar</button>
                    </section>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img src={HILUX} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <p><small> <RiEBikeLine/> Medellín, Antioquia</small></p>
                            <h5 class="card-title"> <strong> TOYOTA HILUX 2022</strong> </h5>
                            <p class="card-text"> <strong>Cilindraje</strong> <small>2.393</small></p>
                            <p class="card-text"> <strong>Potencia</strong> <small>148 / 3.400</small></p>
                            <p class="card-text"> <strong>Motor</strong> <small>4 CILINDROS EN LÍNEA + 16 VÁLVULAS + DOHC + TRANSMISIÓN POR CADENA + COMMON RAIL + INTERCOOLER + TURBO DE GEOMETRÍA VARIABLE
                            </small></p>
                            <section className="text py-3">
                        <button to="" className="btn btn-warning">Comprar</button>
                    </section>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img src={PRADO} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <p><small> <RiEBikeLine/> Cali, Valle del cauca</small></p>
                            <h5 class="card-title"> <strong> TOYOTA TXL 2022</strong> </h5>
                            <p class="card-text"> <strong>Cilindraje</strong> <small>3.956</small></p>
                            <p class="card-text"> <strong>Potencia</strong> <small>271/ 5.600</small></p>
                            <p class="card-text"> <strong>Motor</strong> <small>6 CILINDROS EN LÍNEA EN V + 24 VÁLVULAS + DOHC + TRANSMISIÓN POR CADENA +
                            VVT-i (DUAL) + SFI
                            </small></p>
                            <section className="text py-3">
                        <button to="" className="btn btn-warning">Comprar</button>
                    </section>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
    );
}
export default CursosH;