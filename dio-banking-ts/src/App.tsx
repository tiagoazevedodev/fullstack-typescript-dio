import { Layout } from "./components/Layout/Layout";
import styled from "styled-components";
import { 
  ChakraProvider,
  Input,
  Center
 } from '@chakra-ui/react'

function App() {
  return (
    <>
      <ChakraProvider>
        <Center>
          <h1>Faça o login</h1>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
        </Center>
      </ChakraProvider>
    </>
  );
}

export default App;
