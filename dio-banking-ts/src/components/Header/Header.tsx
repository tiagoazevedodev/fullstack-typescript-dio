import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
export const Header = () => {
  
  const context = useContext(AppContext);

  console.log(context.user)
  return (
    <div className="bg-zinc-800 sticky top-0 w-full p-6">
      <h1 className="text-white text-center text-3xl">DIO Banking</h1>
    </div>
  );
};
