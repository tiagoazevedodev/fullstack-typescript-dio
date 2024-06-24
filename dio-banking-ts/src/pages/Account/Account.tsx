import { SimpleGrid, Center, Spinner } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"
import { InfoCard } from "../../components/InfoCard/InfoCard"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../components/AppContext/AppContext"
import { api } from "../../api"


interface UserData {
  login: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}


export const Account = () => {
  const [userData, setUserData] = useState<null | UserData>();
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLogged } = useContext(AppContext);

  !isLogged && navigate("/");

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      console.log(data);
      setUserData(data);
    }
    getData()
  }, []);

  if (userData && userData.id !== id) {
    navigate("/");
  }

  return (
    <div className="bg-zinc-900 flex flex-col h-screen">
      <Center>
          {userData === null || userData?.name === undefined ? <Spinner marginTop={16} className="text-zinc-200 text-center" size="xl" /> :
            <SimpleGrid className="w-2/4" columns={2} spacing={8} paddingTop={16}>
                <InfoCard title="Informação da conta" value={userData?.name} />
                <InfoCard title="Saldo da Conta" value={`R$ ${userData?.balance.toFixed(2)}`.replace(".", ",")} />
            </SimpleGrid>
          }
        
      </Center>
    </div>
  )
}