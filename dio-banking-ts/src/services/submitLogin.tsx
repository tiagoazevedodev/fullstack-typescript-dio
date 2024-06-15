import { api } from "../api";

export const submitLogin = async (login: string, password: string):Promise<void> => {
  const data:any = await api;
  if (login === data?.login && password === data?.password) {
    alert("Login efetuado com sucesso!");
  } else{
    alert("Credenciais inválidas!")
  }
};

