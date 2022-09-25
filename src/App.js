import React from 'react';
//import './App.css';
import Header from './Header'
import styled from 'styled-components'; 
import Wrapper from './wrapper';
import Game from './game';
import Rules from './rules';

const AppStyled = styled.main`
@import url('https://fonts.googleapis.com/css2?family=Rubik+Dirt&display=swap');
background: radial-gradient(ellipse, rgba(82,64,152,1) 35%, rgba(8,10,18,1) 91%);


body{
  font-family: 'Rubik Dirt', cursive;
}

.content-app
{
  box-sizing:border-box;
  min-height: 100vh; 
  padding:2em;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
  `
function App() {
  return(
    <AppStyled>
      <Wrapper>
        <div className="content-app">
          <Header />
          <Game />
          <Rules/>
        </div>
       </Wrapper>
    </AppStyled>
  )
}

export default App;
