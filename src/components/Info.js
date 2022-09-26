import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './style.css';
import Desarrollador from './Desarrollador';
import desarolladores from "./json/desarollares.json";
import { Button } from 'bootstrap';
class Info extends React.Component {
    render() {
        return ( <>
            <header>             
                <div class="container">
                    {desarolladores.map(des =>
                        <Desarrollador
                            foto={des.foto}
                            nombre={des.nombre}
                            legajo={des.legajo}
                            correo={des.correo}
                            github={des.github}
                        ></Desarrollador>)}
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <Link class="btn btn-primary" to="/" type="button">Volver Al Menu</Link>
                    </div>
                </div>
            </header></>
        );
    }
}

export default Info;
