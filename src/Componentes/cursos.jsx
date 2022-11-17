import React from "react";
// import { Link } from 'react-router-dom';
import curso from '../Imagenes/curso.jpg';
import { FaUniversity } from 'react-icons/fa';


function CursosH() {
    return (
        <div className="container pt-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                    <img src={curso} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p><small> <FaUniversity/> Harvard University</small></p>
                        <h6 className="card-title"> <strong>Curso full-stack en desarrollo de software</strong> </h6>
                        <p className="card-text"> <small><strong>Habilidades que obtendras:</strong> Software Engineering, Computer Programming, Software Architecture, Theoretical Computer Science, Computer Programming Tools,..</small></p>
                        <p>
                            <small>
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FAE832" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                4.8 (3.5k reseñas) 
                            </small>
                            
                        </p>
                        
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src={curso} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h6 className="card-title">Card title</h6>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src={curso} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h6 className="card-title">Card title</h6>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src={curso} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h6 className="card-title">Card title</h6>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
}
export default CursosH;