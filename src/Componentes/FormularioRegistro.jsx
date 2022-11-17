import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class FormularioRegistro extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            datos: [],
            form: {
                Id: '',
                Correo: '',
                Contraseña: '',
                Nombre_U: '',
                Apellido: '',
                Departamento: '',
                Ciudad: '',
                Ocupacion: ''
            }
        }
    }

    peticionGet = () => {
        axios.get('http://localhost:4001/api/usuarios')
            .then((response) => {
                this.setState({
                    datos: response.data
                });
            }).catch(error => {
                console.log(error.message);
            })
    }

    peticionPost = async () => {
        delete this.state.form.id;
        await axios.post('http://localhost:4001/api/usuarios', this.state.form)
            .then(response => {
                alert(`Bienvenido`)

            }).catch(error => {
                console.log(error.message);
            })

    }


    handleChange = async (e) => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form)
    }



    render() {

        // const datosForm = this.state.form;
        const data = this.state.datos;
        console.log(data)

        return (

            <div className="bg-white col-md-8 order-md-1 container my-5">
                <h1 className="mb-3 text-center">Registro</h1>
                <form className="needs-validation" noValidate="">
                    <div className="row">
                        
                        <div className="col-md-6 mb-3">
                            <label >Nombres</label>
                            <input type="text" className="form-control" name="Nombre_U" id="Usuario" placeholder="Nombres" required="" onChange={this.handleChange} value={data.Nombre_U}></input>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Apellidos</label>
                            <input type="text" className="form-control" name="Apellido" id="Usuario" placeholder="Apellidos" required="" onChange={this.handleChange} value={data.Apellido}></input>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>Correo</label>
                        <input type="email" className="form-control" name="Correo" id="email" placeholder="you@example.com" onChange={this.handleChange} value={data.Correo}></input>
                    </div>
                    <div className="mb-3">
                        <label>Contraseña</label>
                        <input type="password" className="form-control" name="Contraseña" id="Contrasena" onChange={this.handleChange} value={data.Contraseña}></input>
                    </div>
                    
                    <div className="mb-3">
                        <label>Departamento</label>
                        <input type="text" className="form-control" name="Departamento" id="email" onChange={this.handleChange} value={data.Departamento}></input>
                    </div>
                    <div className="mb-3">
                        <label>Ciudad</label>
                        <input type="text" className="form-control" name="Ciudad" id="email" onChange={this.handleChange} value={data.Ciudad}></input>
                    </div>
                    <div className="mb-3">
                        <label>Ocupación</label>
                        <input type="text" className="form-control" name="Ocupacion" id="email" onChange={this.handleChange} value={data.Ocupacion}></input>
                    </div>
                    <hr className="mb-4"></hr>
                    <Link to="/homeL">
                        <button className="btn btn-outline-primary btn-lg btn-block" type="submit" onClick={() => this.peticionPost()} ><font style={{ marginRight: 'vertical-align: inherit' }} >Registrarme</font></button>
                    </Link>
                </form>
            </div>

        );
    }
}

export default FormularioRegistro;