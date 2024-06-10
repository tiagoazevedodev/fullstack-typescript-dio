import { Button } from "@chakra-ui/react";

interface SubmitButtonProps {
  children: string;
  onClick: () => void;
}


export const SubmitButton = ({children, onClick}:SubmitButtonProps) => {
  
  return (
    <Button onClick={onClick} width="100%" size="sm">
      {children}
    </Button>
  );
}