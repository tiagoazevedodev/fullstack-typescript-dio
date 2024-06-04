import { Layout } from "./components/Layout/Layout";
import styled from "styled-components";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const Box = styled.div`
    background-color: orange;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
  `;

  return (
    <>
      <Layout>
        <Box>
          <h1>Faça o login</h1>
        </Box>
        <label htmlFor="emailInput">Email</label>
        <input id="emailInput" type="email" />
        <label htmlFor="passwordInput">Senha</label>
        <input id="passwordIput" type="password" />
        <button>Entrar</button>
      </Layout>
    </>
  );
}

export default App;
