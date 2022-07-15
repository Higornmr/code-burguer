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
width: 330px;
height: 230px;
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

export const InputPedido = styled.p`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.408px;


color: #EEEEEE;

margin-left: 25px;
`;

export const Input = styled.input`
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;

border: none;
outline: none;

width: 342px;
height: 53px;
padding-left: 15px;

font-style: normal;
font-weight: 300;
font-size: 23px;
line-height: 21px;
margin-bottom: 32px;

color: #FFFFFF;
`;

export const Button = styled.button`
width: 342px;
height: 60px;

background: #D93856;

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









