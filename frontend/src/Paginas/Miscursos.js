import React from "react";
import MenuL from '../Componentes/menuL';
import MisCursos from '../Componentes/miscursos';
import Piedepagina from '../Componentes/piedepagina';


function Miscursos() {
    return (
        <div className="Miscursos">
            <MenuL/>
            <MisCursos/>
            <Piedepagina/> 
        </div>
    );
}

export default Miscursos;