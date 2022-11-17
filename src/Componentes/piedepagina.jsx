import React from "react";
import { Link } from 'react-router-dom';
import '../Estilos/index.css';
import eresdocente from '../Imagenes/eresdocente.png';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

function Piedepagina() {
    return (
        <div className="container-fluid">
            <div className="row mx-auto">
                <div className="text-center col-lg-6 col-md-10 col-sm-12 mx-auto">
                    <h2 className="encabezado mt-5 pt-4">Trabaja con Ensigna</h2>
                    <img src={eresdocente} alt="" width={300} />
                    <h4 className="encabezado">¿Eres docente?, prepara a los estudiantes en habilidades con demanda</h4>
                    <p className="px-3">Proporcione aprendizaje en línea de clase mundial y relevante para el trabajo para estudiantes, profesores y personal con Coursera for Campus.</p>
                    <section className="text-center py-3">
                        <Link to="" className="btn btn-primary">Conocer más</Link>
                    </section>
                </div>
                <div className="text-center col-lg-6 col-md-10 col-sm-12 mx-auto">
                    <h2 className="encabezado mt-5 pt-4">Trabaja con Ensigna</h2>
                    <img src={eresdocente} alt="" width={300} />
                    <h4 className="encabezado">¿Eres docente?, prepara a los estudiantes en habilidades con demanda</h4>
                    <p className="px-3">Proporcione aprendizaje en línea de clase mundial y relevante para el trabajo para estudiantes, profesores y personal con Coursera for Campus.</p>
                    <section className="text-center py-3">
                        <Link to="" className="btn btn-primary">Conocer más</Link>
                    </section>
                </div>
                <div className="text-center col-lg-6 col-md-10 col-sm-12 mx-auto">
                    <h2 className="encabezado mt-5 pt-4"> <span className="text-primary">¡Ensigna</span>  te acompaña a todos lados!</h2>
                    
                    
                    <p className="px-3">Visualizamos un mundo donde cualquier persona, en cualquier lugar, tiene el poder de transformar su vida a través del aprendizaje.</p>
                    <p className="px-3">¡Únase a nuestra comunidad global de creadores de progreso y comience a aprender hoy!</p>
                    <section className="text-center py-3">
                        <button to="" className="btn btn-success">Instalar Ensigna</button>
                    </section>
                    <div id="copyright">
                        <p><small>Ensigna <AiOutlineCopyrightCircle/> 2022 Todos los derechos reservados.</small></p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default Piedepagina;