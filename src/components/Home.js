import React from "react";
import Principal from '../img/mario.webp';
import {BrowserRouter,Link} from 'react-router-dom';

function Home(){
    return(
        <BrowserRouter className="pagPrin">   
            <h1>Piedra papel o tijera</h1>
        <img src={Principal} alt="" className="Imagen"/>
        <Link to= '/juego' className = "Boton">Jugar</Link>
        <Link to= '/desarrolladores' className = "Boton">desarrolladores</Link>
        </BrowserRouter>
        )

}
export default Home;