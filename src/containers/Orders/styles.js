import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;

background: #0A0A10;

height: 100%;
min-height: 100vh;
`;

export const Image = styled.img`
margin-top: 11px;
width: 360px;
height: 270px;
`;

export const ContainerItens = styled.div`
background: #0A0A10;

display: flex;
flex-direction: column;

height: 100%;
`;

export const H1 = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 33px;
text-align: center;

color: #FFFFFF;

margin-bottom: 58px;
`;

export const Button = styled.button`
width: 342px;
height: 60px;

background: rgba(255, 255, 255, 0.14);

font-style: normal;
font-weight: 900;
font-size: 14px;
line-height: 2px;
margin-top: 30px;

color: #FFFFFF;

cursor: pointer;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.6;
}
`;

export const Client = styled.li`
border: 1px solid white;
display: flex ;
flex: row;
align-items: center;
justify-content: space-between;
margin-bottom: 16px; 

background: rgba(255, 255, 255, 0.25);
border-radius: 14px;

border: none;
outline: none;

width: 342px;
height: 101px;

button {
    margin-right: 30px;
    cursor: pointer;
    background: none;
    border: none;
}
`;

export const Pedido = styled.div`
display: flex;
flex-direction: column;
align-items: baseline;

gap: 40px;
margin-left: 27px;


p {
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 19px;

color: #FFFFFF;
}`;


export const H2 = styled.h2`
font-weight: 700;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
`;





