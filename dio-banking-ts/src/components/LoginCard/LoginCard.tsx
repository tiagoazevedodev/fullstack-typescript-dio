import { Box, Center, Input } from "@chakra-ui/react";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { useState } from "react";
import { Header } from "../Header/Header";

export const LoginCard = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    alert(`Login: ${login} Password: ${password}`);
  };

  return (
    <Box minHeight="100vh" className="flex flex-col bg-zinc-900">
      <Header />
      <Box className="m-auto w-96 gap-2 flex flex-col content-center p-8 bg-zinc-800 rounded-2xl">
        <Center>
          <h1 className="text-white text-3xl pb-2">Faça o Login</h1>
        </Center>
        <Input
          className="text-gray-300"
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Login"
        />
        <Input
          className="text-gray-300"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <Center>
          <SubmitButton onClick={handleSubmit}>Login</SubmitButton>
        </Center>
      </Box>
    </Box>
  );
};
