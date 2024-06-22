import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
export const AccountInfo = () => {
  return (
    <div>
      <Text fontWeight={"bold"} fontSize={40}>Informações da Conta</Text>
      <Link to="/account/7">
        <Text>
          Conta
        </Text>
      </Link>
    </div>
  )
}