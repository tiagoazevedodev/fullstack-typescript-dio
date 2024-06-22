import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./pages/Home/Home";
import { Account } from "./pages/Account/Account";
import { Header } from "./components/Header/Header";
import { AccountInfo } from "./pages/AccountInfo/AccountInfo";
import { AppContextProvider } from "./components/AppContext/AppContext";

function App() {


  return (
    <ChakraProvider>
      <AppContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/account/:id" Component={Account} />
            <Route path="/accountInfo" Component={AccountInfo} />
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </ChakraProvider>
  );
}

export default App;
