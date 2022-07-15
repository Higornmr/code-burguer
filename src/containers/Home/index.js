import React, { useState, useRef } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Burguer from "../../assets/burger1.svg";
import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputPedido,
  Input,
  Button,
} from "./styles";

function App() {
  const [client, setClient] = useState([]);
  const navigate = useNavigate();
  const inputPedido = useRef();
  const inputNome = useRef();

  async function addNewRequest() {
    const { data: costumeOrder } = await axios.post("http://localhost:3001/client", {
      inputPedido: inputPedido.current.value,
      inputNome: inputNome.current.value
    });
    setClient([... client, costumeOrder]);

    navigate("/client");
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Burguer} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>
        <InputPedido>Pedido</InputPedido>
        <Input ref={inputPedido} placeholder="Seu pedido !" />
        <InputPedido>Nome do cliente</InputPedido>
        <Input ref={inputNome} placeholder="Nome" />
        <Button onClick={addNewRequest}>Novo Pedido</Button>
      </ContainerItens>
    </Container>);
}

export default App;