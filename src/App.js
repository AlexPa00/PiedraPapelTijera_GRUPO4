
import Desarrolladores from './components/Desarrolladores';
import Home from './components/Home';
import desarrolladores from './desarrolladores.json';

function App(){
return(
<div className="App">
<header className="App-header">
  
{desarrolladores.map(des=>
    <Desarrolladores
    img={des.img}
    nombre={des.nombre}
    lu={des.lu}
    descripcion={des.descripcion}
    />
   )}
</header>
</div>
)
}

export default App;
