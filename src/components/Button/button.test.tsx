import { pressButton } from './index'

describe('Deve realizar o test de click do botao', () =>{

    const mockAlert = jest.fn()
    window.alert = mockAlert
    
    it('Deve mostrar uma mensagem de boas vindas ao clicar no botao', () =>{
        pressButton()
        expect(mockAlert).toHaveBeenCalledWith('Seja bem vindo')
    })
})