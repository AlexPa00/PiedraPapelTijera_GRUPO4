import React from "react";
import styled from "styled-components";
import Token from "./token";

const GameStyled = styled.div`
display:grid;
grid-template-columns:130px 130px;
justify-items:center;
justify-content:center;
grid-gap:50px;
margin:2em 0;
cursor:pointer;




}

& div:nth-of-type(3){
 grid-column: span 2; 
}


`
function Game() {
  return (
    <GameStyled>
      <Token name="papel"/>
      <Token name="piedra"/>
      <Token name="tijera"/>
    </GameStyled>
    )
    }
export default Game