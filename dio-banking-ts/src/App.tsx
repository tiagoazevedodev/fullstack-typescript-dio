import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/Header/Header";
import { MainRoutes } from "./routes/routes";
import { AppContextProvider } from "./components/AppContext/AppContext";
import { createLocalStorage, getAllLocalStorage } from "./services/storage";

function App() {

  !getAllLocalStorage() && createLocalStorage() 

  return (
    <ChakraProvider>
      <AppContextProvider>
        <BrowserRouter>
          <Header />
          <MainRoutes />
        </BrowserRouter>
      </AppContextProvider>
    </ChakraProvider>
  );
}

export default App;
