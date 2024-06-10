import { ChakraProvider } from "@chakra-ui/react";
import { LoginCard } from "./components/LoginCard/LoginCard";

function App() {
  return (
    <>
      <ChakraProvider>
        <LoginCard />
      </ChakraProvider>
    </>
  );
}

export default App;
