import logo from './logo.svg';
import './App.css';
import Home from "./components/Home.js"
import Game from "./components/Game.js"

function App() {
  return (
    <div className="App">
      <Home>
       <Game></Game>
      </Home>

    </div>
  );
}

export default App;
