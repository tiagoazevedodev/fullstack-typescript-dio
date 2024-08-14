import { Routes, Route } from "react-router-dom";
import { Account } from "../pages/Account/Account";
import { AccountInfo } from "../pages/AccountInfo/AccountInfo";
import { Home } from "../pages/Home/Home";
import { useContext } from "react";
import { AppContext } from "../components/AppContext/AppContext";

export const MainRoutes = () => {

  const { isLogged } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={isLogged ? <Account /> : <Home />} />
      <Route path="/account/:id" element={isLogged ? <Account /> : <Home/>} />
      <Route path="/accountInfo" element={isLogged ? <AccountInfo /> : <Home/>} />
    </Routes>
  );
}