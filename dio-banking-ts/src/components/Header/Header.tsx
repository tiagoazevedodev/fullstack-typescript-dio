import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import { useNavigate } from "react-router-dom";
import { updateLocalStorage } from "../../services/storage";
export const Header = () => {
  const navigate = useNavigate();  
  const { setIsLogged, isLogged, name } = useContext(AppContext);

  const logout = () => {
    setIsLogged(false);
    updateLocalStorage({login: false});
    navigate("/");
  }

  return (
    <div className="bg-zinc-800 sticky flex flex-row top-0 w-full p-6 items-center">
      <h1 className="text-white text-3xl flex-grow text-center">DIO Banking</h1>
        {
        isLogged &&
        <div className="flex flex-row m-auto gap-3">
            <h2 className="text-white text-2xl ml-auto">Olá, {name}</h2>
            <button
            onClick={logout}
            className="bg-red-500 text-white rounded-lg px-3 py-1 hover:opacity-70"
            >
              Sair
            </button>
        </div>
        }
    </div>
  );  
};
