import { ThemeProvider } from "styled-components"
import { theme } from "./theme/theme";
import { ContainerPasts, Container, ContainerInp, ContainerInps, Header, TextInput, Main, Title, ContainerPast, ContainerPastLeft, ContainerPastHight } from "./style"
import {  ButtonDiv, ButtonDivInLeft, ButtonDivInHight } from "./style";
import { ContainerButton} from "./style";
import ButtonToRegistry from "./components/ButtonRegistry/ButtonRegistry";
import { useState } from "react";
import { InputHome } from "./components/input/input";
import { HandArrowDown, HandArrowUp, Equals } from "@phosphor-icons/react";

type Transaction = {
    description: string;
    value: number;
    type: "Entrada" | "Saída" ;
  }
  
  export default function Inicial() {
    const [value, setValue] = useState<number>(0);
    const [total, setTotal] = useState<number>(0)
    const [valueInput, setValueInput] = useState<number>(0)
    const [valueOutput, setValueOutput] = useState<number>(0)
    const [description, setDescription] = useState("");
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setValue(parseFloat(event.target.value))
    }

   function format(value: number){
        const formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
        })
        return formatter.format(value)
   }

    function valueIn(){
        if(value != 0 && description.trim() != ""){
            setTransactions([{description, value, type:"Entrada"}, ...transactions ])
            setDescription("")
            const newTotal = total + value
            setValueInput(newTotal)
            setTotal(newTotal)
            setValue(0)
        }
        else{
            alert("Digite um valor e uma descrição válidos")
        }
    }

    function valueOut(){
        if(value != 0 && description.trim() != ""){
            setTransactions([{description, value, type:"Saída"}, ...transactions ])
            setDescription("")
            const newTotal = total - value
            const newValueOutput = valueOutput + value
            setValueOutput(newValueOutput)
            setTotal(newTotal)
            console.log(newTotal)
            setValue(0)
        }
        else{
            alert("Digite um valor e uma descrição válidos")
        }
    }

  return(
    <ThemeProvider theme={theme}>
      <Container>
          <Title>Gerenciador de Finanças Pessoais</Title>
          <Header>
                <></>
            </Header> 
            
                    <ContainerInps>
                        <ContainerInp>
                            <TextInput>Valor</TextInput>
                                <InputHome
                                type="text"
                                value={value}
                                onChange={handleChange}
                                />
                        </ContainerInp>
                        <ContainerInp>
                            <TextInput>Descrição</TextInput>
                                <InputHome
                                type="text"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                                />
                        </ContainerInp>
                    </ContainerInps>

                    <ContainerButton> 
                        <ButtonToRegistry onClick={valueIn} title="ADICIONAR COMO ENTRADA"/>
                        <ButtonToRegistry onClick={valueOut} title="ADICIONAR COMO SAÍDA"/>
                    </ContainerButton>

                    <Main>
                        <ButtonDiv>
                            <ButtonDivInLeft>
                                <HandArrowDown color="#FFD000" size={27} />
                            </ButtonDivInLeft>
                            <ButtonDivInHight>
                                <p>{format(valueInput)}</p>
                                <p>Entradas</p>
                            </ButtonDivInHight>
                        </ButtonDiv>
                        <ButtonDiv>
                            <ButtonDivInLeft>
                                <HandArrowUp color="#FFD000" size={27} />
                            </ButtonDivInLeft>
                            <ButtonDivInHight>
                                <p>{format(valueOutput)}</p>
                                <p>Saídas</p>
                            </ButtonDivInHight>
                        </ButtonDiv>
                        <ButtonDiv>
                            <ButtonDivInLeft>
                                <Equals color="#FFD000" size={27} />
                            </ButtonDivInLeft>
                            <ButtonDivInHight>
                                <p>{format(total)}</p>
                                <p>Total</p>
                            </ButtonDivInHight>
                        </ButtonDiv>
                    </Main>
                <ContainerPasts>
                    {transactions.map(transaction => (
                        <ContainerPast>
                            <ContainerPastLeft>
                                {transaction.description}
                            </ContainerPastLeft>
                            <ContainerPastHight>
                                <p>
                                    {transaction.type}
                                </p>
                                <p>
                                    {format(transaction.value)}
                                </p>
                            </ContainerPastHight>
                        </ContainerPast>
                        
                    ))} 
                </ContainerPasts>
                
            </Container> 
    </ThemeProvider>
  )
}
