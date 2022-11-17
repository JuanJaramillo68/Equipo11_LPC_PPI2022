import React from "react";
import MenuL from '../Componentes/menuL';
import InicioL from '../Componentes/inicioL';
import Piedepagina from '../Componentes/piedepagina';


function HomeL() {
    return (
        <div className="InicioL">
            <MenuL/>
            <InicioL/>
            <Piedepagina/> 
        </div>
    );
}

export default HomeL;