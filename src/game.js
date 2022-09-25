import React from "react";
import styled from "styled-components";
import Token from "./token";

const GameStyled = styled.div`
display:flex;
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