import React from "react";
import Menu from '../Componentes/menu';
import Iniciosesion from "../Componentes/login";

function Login() {
    return (
        <div className="Login">
            <Menu/>
            <Iniciosesion/>
        </div>
    );
}

export default Login;