import { SimpleGrid, Center } from "@chakra-ui/react"
import { InfoCard } from "../../components/InfoCard/InfoCard"
import { Header } from "../../components/Header/Header"

export const Account = () => {
  
  
  return(
    <div className="bg-zinc-900 flex flex-col h-screen">
      <Header/>
      <Center>
        <SimpleGrid className="w-2/4" columns={2} spacing={8} paddingTop={16}>
          <InfoCard title="Saldo" value="R$ 1.000,00" />
          <InfoCard title="Fatura Cartão de Crédito" value="R$ 2.000,00" />
        </SimpleGrid>
      </Center>
    </div>
  )
}