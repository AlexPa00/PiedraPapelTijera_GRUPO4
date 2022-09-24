import React from "react";
import '../Home.css';
import Principal from '../img/Principal.jpg';
import {BrowserRouter,Link} from 'react-router-dom';

class Home extends React.Component{
    render(){
    return(
     <BrowserRouter>
        <div className="PaginaPrincipal">
            <h1 className="Titulo">Piedra Papel o Tijera</h1>
            <nav>
            <Link to ='./Juego' className = "Boton">Jugar</Link>
            <Link to ='./Desarrolladores' className = "Boton">Desarrolladores</Link>
            </nav>
        </div>
        <img src={Principal} alt="" className="Icono"/>
     </BrowserRouter>
    )
}
}
export default Home;
