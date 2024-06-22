import { Box, Center, Input } from "@chakra-ui/react";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { useState, useEffect } from "react";
import { submitLogin } from "../../services/submitLogin";
import { api } from "../../api";

interface UserData {
  login: string;
  password: string;
  name: string;
}

export const LoginCard = ({ children }) => {
  return (
    <Box minHeight="100vh" className="flex flex-col bg-zinc-900">
      {children}
    </Box>
  );
};
