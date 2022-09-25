import React from "react";
import styled from "styled-components";

const TokenStyled = styled.div`
width: 130px;
height: 130px;
border: 15px solid ${({color}) => color.base};
box-sinzing: border-box;
border-radius:50%;
display: flex;
background:#ffffff;
box-shadow: 0 5px 0 ${({color}) => color.border};

cursor: pointer;
&:active{
    transform: scale(.9);
}

img{
    width:100px;
    border-radius:40px;
}

.box{
    box-shadow: 0 -5px 0 #bcc1d5;
    flex:1;
    align-self:stretch;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
}


`
const colors = {
    papel:{
        base:   '#516ef4',
        border: '#2543c3',

    },
    piedra:{
        base:   '#eca81e',
        border: '#c76c14',
    },
    tijera:{
        base:   '#de3a5a',
        border: '#980e31',
    }
}


function Token({name}){
    return(
        <TokenStyled color = {colors[name]}>
            <div className="box">
            <img src={`./images/${name}.ico`} alt="" />
            </div>     
        </TokenStyled>
    )
}

export default Token