import React from "react";
import { Link } from 'react-router-dom';
import '../Estilos/index.css';
import YZ from '../Imagenes/YZ.png';
import HILUX from '../Imagenes/HILUX.png';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

function Piedepagina() {
    return (
        <div className="container-fluid">
            <div className="row mx-auto">
                <div className="text-center col-lg-6 col-md-10 col-sm-12 mx-auto">
                    <h2 className="encabezado mt-5 pt-4">Compra un vehiculo</h2>
                    <img src={YZ} alt="" width={300} />
                    <h4 className="encabezado">¿Quieres comprar un vehiculo?, Encuentra a los mejores vehiculos del país.</h4>
                    <p className="px-3">Aqui encontraras vehiculos al mejor precio del mercado.</p>
                    <section className="text-center py-3">
                        <Link to="/cursos" className="btn btn-warning">Comprar</Link>
                    </section>
                </div>
                <div className="text-center col-lg-6 col-md-10 col-sm-12 mx-auto">
                    <h2 className="encabezado mt-5 pt-4">Vende tu vehiculo</h2>
                    <img src={HILUX} alt="" width={300} />
                    <h4 className="encabezado">¿Quieres vender tu vehiculo?, Encuentra los mejores compradores.</h4>
                    <p className="px-3">Aqui podras vender tu carro o tu moto facil y rapido.</p>
                    <section className="text-center py-3">
                        <Link to="/vender" className="btn btn-warning">Vender</Link>
                    </section>
                </div>
                <div className="text-center col-lg-6 col-md-10 col-sm-12 mx-auto">
                    <h2 className="encabezado mt-5 pt-4"> <span className="text-warning">WorldRacing!</span> </h2>
                    
                    
                    <p className="px-3">WorldRacing es tu mejor opcion para comprar y vender vehiculos en todo el país.</p>
                    <p className="px-3">¡Únete a nuestra comunidad de compra y venta de vehiculos</p>
                    <section className="text-center py-3">
                        <button to="" className="btn btn-success">Instalar WorldRacing</button>
                    </section>
                    <div id="copyright">
                        <p><small>WorldRacing <AiOutlineCopyrightCircle/> 2022 Todos los derechos reservados.</small></p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default Piedepagina;