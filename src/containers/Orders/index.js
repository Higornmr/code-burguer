import React, { useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import BurguerDois from "../../assets/burger2.svg";
import Trash from "../../assets/trash.svg";
import {
  H2,
  Container,
  H1,
  Image,
  ContainerItens,
  Button,
  Client,
  Pedido,
 
} from "./styles";

function Orders() {
  const [client, setClient] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchClient(){
      const {data: costumeOrder} = await axios.get("http://localhost:3001/client");
      setClient(costumeOrder)
    }
    fetchClient();
  },[]);

  async function deleteClient(clientId) {
    await axios.delete(`http://localhost:3001/client/${clientId}`)
    const newClient = client.filter((client) => client.id !== clientId)
    setClient(newClient);
  }

  function goBackPage(){
    navigate("/");
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={BurguerDois} />
      <ContainerItens>
        <H1>Pedidos</H1>  
        
        <ul>
          {
            client.map(value => (
              <Client key={value.id}>
                <Pedido>
                  <p>{value.inputPedido}</p> <H2>{value.inputNome}</H2>
                </Pedido>
                <button onClick={() => deleteClient(value.id)}>
                  <img src={Trash} alt="lata-de-lixo" />
                </button>
              </Client>
            ))
          }
        </ul>
        <Button onClick={goBackPage}>Voltar</Button>
      </ContainerItens>
    </Container>);
}

export default Orders;