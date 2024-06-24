import { api } from "../api";


export const submitLogin = async (login: string, password: string):Promise<boolean> => {
  const data:any = await api;
  
  return login === data?.login && password === data?.password ? true : false;
};

