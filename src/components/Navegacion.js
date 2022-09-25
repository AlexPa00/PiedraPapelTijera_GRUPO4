import React from "react";
import '../Navegacion.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Jugar from "./Jugar";
import Desarrolladores from "./Desarrolladores";
import Inicio from "./Inicio";

class Navegacion extends React.Component{
    render(){
    return(
        <>
     <BrowserRouter>
        <div className="PaginaPrincipal">
            <h1 className="Titulo">Piedra Papel o Tijera</h1>
            <nav>  
            <Link to ='/inicio' className = "Boton" >Inicio</Link>
            <Link to ='/jugar' className = "Boton" >Jugar</Link>
            <Link to ='/desarrolladores' className = "Boton" >Desarrolladores</Link>
            </nav>
        </div>

        <Routes>
            <Route path = "inicio" element= {<Inicio/>}/>
            <Route path = "jugar" element= {<Jugar/>}/>
            <Route path = "desarrolladores" element= {<Desarrolladores/>}/>
        </Routes>

        <footer>Pie de Pagina</footer>
     </BrowserRouter>
     </>
    )
}
}
export default Navegacion;
