import { Button, Center } from "@chakra-ui/react"

export const pressButton = () =>{
    alert('Seja bem vindo')
}

export const ButtonPage = () => {
    const btn = pressButton
    return (

        <Center 
            color="orange.300" 
            fontWeight="bold" 
            fontFamily="Helvetica"
            borderRadius="8px"
            height="30px"
            marginTop="15px"
        >

            <Button id="btn" onClick={() => btn()}
                backgroundColor="black" 
                width="100px" 
                height="32px">
                    Entrar
            </Button>
        </Center>
    )
}
