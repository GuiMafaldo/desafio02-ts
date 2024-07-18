import { Center, Box, Input } from "@chakra-ui/react"
import { ButtonPage } from "./Button"
import { Layout } from "./Layout"


export const Card = () => {


  return(
    <Center>
          <Layout>
              <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' marginTop="10%" width="30vw">
              <Center marginBottom="20px" fontFamily='mono' fontWeight="700" fontSize="14px">
                <h1>Faça o login</h1>
              </Center>
              <Input placeholder="email"/>
              <Input placeholder="password" />
              <Center>
               <ButtonPage />
              </Center>
            </Box>
          </Layout>
        </Center>
  )
}