 import React from "react";
 import imagen from "../img/piedra-papel-tijera.gif";
 import "./estilos.css";

 class Home extends React.Component{
     render(){
     return(
        <main> 

  
    <h1 className= "titulo" >Piedra Papel Tijera</h1>
    <img src=  {imagen} alt="" className="imagen"/>

    <button role="button" className ="boton">Jugar</button>
    <button role="button" className="boton">Desarrolladores</button>
    
     </main>
      );
   }
 }

 export default Home;