 import React from "react";
 import imagen from "../img/pa.png";
 import imagen1 from "../img/pi.png";
 import imagen2 from "../img/ti.png";
 import "./estilos.css";

 class Home extends React.Component{
     render(){
     return(
     
        <main> 
      <div className="box-app"> 
      <div className="box-title"> 
      <h1 className="titulo">Piedra Papel o Tijera</h1>
    </div>

    <div className="contenedor"> 
    <img src=  {imagen} alt="" className="imagen"/>
    <img src=  {imagen1} alt="" className="imagen"/>
    <img src=  {imagen2} alt="" className="imagen"/>
    </div>

    <button role="button" className ="boton">Jugar</button>
    <button role="button" className="boton">Desarrolladores</button>
    </div>
     </main>
      );
   }
 }

 export default Home;