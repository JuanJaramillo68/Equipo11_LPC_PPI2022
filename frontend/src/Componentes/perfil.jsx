import React from "react";
import { Link } from 'react-router-dom';
import '../Estilos/index.css';
//Iconos
//import { RiGlobalFill } from 'react-icons/ri';
//import { BsGithub } from 'react-icons/bs';
//import { IoLogoTwitter } from 'react-icons/io';
//import { BsInstagram }  from 'react-icons/bs';
//import { BsFacebook } from 'react-icons/bs';

function Profile() {
    return (
        <section style={{backgroundColor: "#FFE83A"}}>
            <div class="container py-5">
                <div class="row">
                    <div class="col">
                        
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4">
                        <div class="card mb-4">
                        <div class="card-body text-center">
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar"
                            class="rounded-circle img-fluid" style={{width: "150px"}}/>
                            <h5 class="my-3">Juan Usme</h5>
                            <p class="text-muted mb-1">Comprador</p>
                            <p class="text-muted mb-4">Medellin, Antioquia</p>
                            <div class="d-flex justify-content-center mb-2">
                            <button type="button" class="btn btn-warning">Editar mi perfil</button>
                            
                            </div>
                    </div>
                    </div>
                    
                </div>
                <div class="col-lg-8">
                    <div class="card mb-4">
                    <div class="card-body">
                        <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Nombre Completo</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">Juan Usme</p>
                        </div>
                        </div>
                        <hr/>
                        <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Email</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">juanusme009@gmail.com</p>
                        </div>
                        </div>
                        <hr/>
                        <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Celular</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">3005679237</p>
                        </div>
                        </div>
                        
                        <hr/>
                        <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Dirección</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">Calle 54 #103c 223 Medellin, Antioquia</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-6">
                        <div class="card mb-4 mb-md-0">
                        <div class="card-body">
                            <p class="mb-4"><span class="text-primary font-italic me-1">Historial</span> de compra
                            </p>
                            <p class="mb-1" style={{dontSize: "0.77rem"}}>Toyota Hilux 2015</p>
                            <div class="progress rounded" style={{height: "5px"}}>
                            <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80"
                                aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p class="mt-4 mb-1" style={{dontSize: "0.77rem"}}>YZ-125 2021</p>
                            <div class="progress rounded" style={{height: "5px"}}>
                            <div class="progress-bar" role="progressbar" style={{width: "72%"}}aria-valuenow="72"
                                aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p class="mt-4 mb-1" style={{dontSize: "0.77rem"}}>MT-09</p>
                            <div class="progress rounded" style={{height: "5px"}}>
                            <div class="progress-bar" role="progressbar" style={{width: "89%"}} aria-valuenow="89"
                                aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          
                        </div>
                        </div>
                    </div>
                   
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}
export default Profile;