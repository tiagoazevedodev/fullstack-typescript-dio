import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./pages/Home/Home";
import { Account } from "./pages/Account/Account";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/account" Component={Account} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
