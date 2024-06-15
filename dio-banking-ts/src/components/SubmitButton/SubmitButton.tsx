import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface SubmitButtonProps {
  children: string;
  onClick: MouseEventHandler;
}


export const SubmitButton = ({children, onClick}:SubmitButtonProps) => {
  
  return (
    <Button onClick={onClick} width="100%" size="sm">
      {children}
    </Button>
  );
}