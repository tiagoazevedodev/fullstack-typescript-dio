import { 
  ChakraProvider,
  Input,
  Box,
  Center,
  Button
 } from '@chakra-ui/react'
 

function App() {
  return (
    <>
      <ChakraProvider>
        <Box minHeight='100vh' className='p-4 bg-zinc-900' >
          <Box className='w-max-full flex-row content-center items-center p-8 bg-zinc-800 rounded-2xl'>
            <Center>
              <h1 className='text-white text-3xl pb-2'>Faça o Login</h1>
            </Center>
              <Input placeholder="Email" />
              <Input placeholder="Password" />
              <Center>
                <Button width="100%" size="sm">Enviar</Button>
              </Center>
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
