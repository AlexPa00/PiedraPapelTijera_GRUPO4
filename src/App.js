import React from 'react';
//import './App.css';
import Header from './Header'
import styled from 'styled-components'; 
import Wrapper from './wrapper';
import Game from './game';

const AppStyled = styled.main`
@import url('https://fonts.googleapis.com/css2?family=Rubik+Dirt&display=swap');
background: radial-gradient(ellipse, rgba(82,64,152,1) 35%, rgba(8,10,18,1) 91%);
min-height: 100vh; 
padding: 4em 0;
body{
  font-family: 'Rubik Dirt', cursive;
}
`

function App() {
  return(
    <AppStyled>
      <Wrapper>
      <Header />
      <Game />
      </Wrapper>
    </AppStyled>
  )
}

export default App;
