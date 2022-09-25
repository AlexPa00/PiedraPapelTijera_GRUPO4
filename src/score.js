import React from "react";
import styled from "styled-components";

const ScoreStyled = styled.div`
background: #ffffff;
text-align:center;
padding:10px 0;
border-radius: 10px;
width: 80px;

small{
    color:#2A45C2;
    text-transform: uppercase;
    font-size: 10px;
}

p{
    color: red;
    font-size:50px;
    margin:0;
    font-family: Arial;
    letter-spacing: -5px;
    position:relative;
    left:-2.5px;
}

 `
function Score(){
    return(
        <ScoreStyled>
            <small>score</small>
            <p>12</p>
            
        </ScoreStyled>
    )
}
        export default Score