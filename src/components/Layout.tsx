import { Box, Center } from "@chakra-ui/react"
import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"


export const Layout = ({ children }: any) => {
  return(
    <>
      <Box>
          <Header />
          { children }
          <Center>
            <Footer />
          </Center>
      </Box>
    </>
  )
}
