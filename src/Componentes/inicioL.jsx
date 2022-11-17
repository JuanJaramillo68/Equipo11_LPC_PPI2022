import React from "react";
import { Link } from 'react-router-dom';
//estilos
import '../Estilos/index.css';
//imagenes
import curso from '../Imagenes/curso.jpg';
import IA from '../Imagenes/IA.webp';
import fullstack from '../Imagenes/fullstack.png';
//Iconos
import { GoFileSubmodule } from 'react-icons/go';
import { BiTimeFive } from 'react-icons/bi';
import { FaLaptopCode } from 'react-icons/fa';

function InicioL() {
    return (
        
        <div className="row">

            <div className="container" style={{backgroundColor: "#EBF3FF"}}>
                <div className="p-3">
                    <h1 className="encabezado text fw-bold">Bienvenido Nuevamente</h1>
                    <div className="card">
                        <div className="card-header encabezado">
                            <small>
                                Profesional | Harvart University
                            </small>
                        
                        </div>
                        <div className="card-body encabezado">
                            <h5 className="card-title">Maestria en Ingenieria de software</h5>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "35%"}}>35%</div>
                            </div>
                            <p className="card-text pt-3">Avance General</p>
                            <hr />
                            <Link href="#" className="btn btn-primary">Continuar</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-5">
                <h2 className="encabezado pt-3 pb-4 px-3"><strong>Cursos destacados</strong></h2>
            </div>

            <div className="container" id="cursos">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="card">
                                <img src={curso} className="card-img-top img-fluid cards" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Curso de programación</h5>
                                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti fuga assumenda nesciunt, voluptatem temporibus amet ut. Perferendis inventore sapiente saepe voluptatibus. Ipsa nihil, nemo eaque modi nesciunt ullam ut perferendis.</p>
                                    <div className="row pb-3">
                                        <div className="col"> <b> <GoFileSubmodule/>12 modulos</b> </div>
                                        <div className="col"> <b> <BiTimeFive/>185 horas</b> </div>
                                        <div className="col"> <b><FaLaptopCode/>100% online</b> </div>
                                    </div>
                                    <section className="text-center py-3">
                                        <Link to="" className="btn btn-primary">Conocer más</Link>
                                    </section>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card">
                                <img src={IA} className="card-img-top img-fluid cards" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Curso en inteligencia artificial</h5>
                                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti fuga assumenda nesciunt, voluptatem temporibus amet ut. Perferendis inventore sapiente saepe voluptatibus. Ipsa nihil, nemo eaque modi nesciunt ullam ut perferendis.</p>
                                    <div className="row pb-3">
                                        <div className="col"> <b> <GoFileSubmodule/>18 modulos</b> </div>
                                        <div className="col"> <b> <BiTimeFive/>108 horas</b> </div>
                                        <div className="col"> <b><FaLaptopCode/>100% online</b> </div>
                                    </div>
                                    <section className="text-center py-3">
                                        <Link to="" className="btn btn-primary">Conocer más</Link>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card">
                                <img src={fullstack} className="card-img-top img-fluid cards" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Full-Stack</h5>
                                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti fuga assumenda nesciunt, voluptatem temporibus amet ut. Perferendis inventore sapiente saepe voluptatibus. Ipsa nihil, nemo eaque modi nesciunt ullam ut perferendis.</p>
                                    <div className="row pb-3">
                                        <div className="col"> <b> <GoFileSubmodule/>10 modulos</b> </div>
                                        <div className="col"> <b> <BiTimeFive/>75 horas</b> </div>
                                        <div className="col"> <b><FaLaptopCode/>100% online</b> </div>
                                    </div>
                                    <section className="text-center py-3">
                                        <Link to="" className="btn btn-primary">Conocer más</Link>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="container pt-5">
                <h2 className="encabezado pt-3 pb-4 px-3"><strong>Cursos destacados</strong></h2>
            </div>

            <div className="container" id="cursos">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="card">
                                <img src={curso} className="card-img-top img-fluid cards" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Curso de programación</h5>
                                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti fuga assumenda nesciunt, voluptatem temporibus amet ut. Perferendis inventore sapiente saepe voluptatibus. Ipsa nihil, nemo eaque modi nesciunt ullam ut perferendis.</p>
                                    <div className="row pb-3">
                                        <div className="col"> <b> <GoFileSubmodule/>12 modulos</b> </div>
                                        <div className="col"> <b> <BiTimeFive/>185 horas</b> </div>
                                        <div className="col"> <b><FaLaptopCode/>100% online</b> </div>
                                    </div>
                                    <section className="text-center py-3">
                                        <Link to="" className="btn btn-primary">Conocer más</Link>
                                    </section>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card">
                                <img src={IA} className="card-img-top img-fluid cards" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Curso en inteligencia artificial</h5>
                                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti fuga assumenda nesciunt, voluptatem temporibus amet ut. Perferendis inventore sapiente saepe voluptatibus. Ipsa nihil, nemo eaque modi nesciunt ullam ut perferendis.</p>
                                    <div className="row pb-3">
                                        <div className="col"> <b> <GoFileSubmodule/>18 modulos</b> </div>
                                        <div className="col"> <b> <BiTimeFive/>108 horas</b> </div>
                                        <div className="col"> <b><FaLaptopCode/>100% online</b> </div>
                                    </div>
                                    <section className="text-center py-3">
                                        <Link to="" className="btn btn-primary">Conocer más</Link>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card">
                                <img src={fullstack} className="card-img-top img-fluid cards" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Full-Stack</h5>
                                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti fuga assumenda nesciunt, voluptatem temporibus amet ut. Perferendis inventore sapiente saepe voluptatibus. Ipsa nihil, nemo eaque modi nesciunt ullam ut perferendis.</p>
                                    <div className="row pb-3">
                                        <div className="col"> <b> <GoFileSubmodule/>10 modulos</b> </div>
                                        <div className="col"> <b> <BiTimeFive/>75 horas</b> </div>
                                        <div className="col"> <b><FaLaptopCode/>100% online</b> </div>
                                    </div>
                                    <section className="text-center py-3">
                                        <Link to="" className="btn btn-primary">Conocer más</Link>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            
            <div className="container pt-5">
                <h2 className="encabezado pt-3 pb-4 px-3"><strong>Cursos destacados</strong></h2>
            </div>

            <div className="container" id="cursos">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="card">
                                <img src={curso} className="card-img-top img-fluid cards" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Curso de programación</h5>
                                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti fuga assumenda nesciunt, voluptatem temporibus amet ut. Perferendis inventore sapiente saepe voluptatibus. Ipsa nihil, nemo eaque modi nesciunt ullam ut perferendis.</p>
                                    <div className="row pb-3">
                                        <div className="col"> <b> <GoFileSubmodule/>12 modulos</b> </div>
                                        <div className="col"> <b> <BiTimeFive/>185 horas</b> </div>
                                        <div className="col"> <b><FaLaptopCode/>100% online</b> </div>
                                    </div>
                                    <section className="text-center py-3">
                                        <Link to="" className="btn btn-primary">Conocer más</Link>
                                    </section>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card">
                                <img src={IA} className="card-img-top img-fluid cards" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Curso en inteligencia artificial</h5>
                                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti fuga assumenda nesciunt, voluptatem temporibus amet ut. Perferendis inventore sapiente saepe voluptatibus. Ipsa nihil, nemo eaque modi nesciunt ullam ut perferendis.</p>
                                    <div className="row pb-3">
                                        <div className="col"> <b> <GoFileSubmodule/>18 modulos</b> </div>
                                        <div className="col"> <b> <BiTimeFive/>108 horas</b> </div>
                                        <div className="col"> <b><FaLaptopCode/>100% online</b> </div>
                                    </div>
                                    <section className="text-center py-3">
                                        <Link to="" className="btn btn-primary">Conocer más</Link>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card">
                                <img src={fullstack} className="card-img-top img-fluid cards" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Full-Stack</h5>
                                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti fuga assumenda nesciunt, voluptatem temporibus amet ut. Perferendis inventore sapiente saepe voluptatibus. Ipsa nihil, nemo eaque modi nesciunt ullam ut perferendis.</p>
                                    <div className="row pb-3">
                                        <div className="col"> <b> <GoFileSubmodule/>10 modulos</b> </div>
                                        <div className="col"> <b> <BiTimeFive/>75 horas</b> </div>
                                        <div className="col"> <b><FaLaptopCode/>100% online</b> </div>
                                    </div>
                                    <section className="text-center py-3">
                                        <Link to="" className="btn btn-primary">Conocer más</Link>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            
            
        </div>
        
        
        
            
            

        
    );
}
export default InicioL;