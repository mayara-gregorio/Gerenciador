import styled, {css} from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
`
export const ContainerInps = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`
export const ContainerInp = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`
export const Input = styled.input`
    ${({theme})=> css`
        border: none;
        border-radius: 2px;
        height: 40px;
        width: 50%;
    `}
`
export const Title = styled.h1`
    ${({theme})=> css`
        color: ${theme.colors.text_btn_text_1}; 
    `}
`
export const TextInput = styled.p`
    ${({theme})=> css`
        color: ${theme.colors.text_btn_text_1}; 
    `}
`

export const Button = styled.button`
    ${({theme}) => css`
        background-color: ${theme.colors.background_button};
        height: 40px;
        border: none;
        padding: 0 10px;
        color: ${theme.colors.text_btn_text_1};
        border-radius: 8px;
   `}
`
export const Header = styled.header`
    ${({theme}) => css`
        display: flex;
        margin: 40px;
        width: 100%;
        border: 2px solid ${theme.colors.line};
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `}
`

export const Main = styled.main`
    ${({theme}) => css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 20px;
    `}
`

export const ButtonDiv = styled.div`
    ${({theme}) => css`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        padding: 3px 20px;
        background-color: ${theme.colors.background_button};
        color: ${theme.colors.text_btn_text_1};
        border-radius: 8px;
    `}
`

export const ButtonDivInLeft = styled.div`
    ${({theme}) => css`
        display: flex;
        flex-direction: column;
    `}
`


export const ButtonDivInHight = styled.div`
    ${({theme}) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
`
export const ContainerButton = styled.div`
    ${({theme}) => css`
        display: flex;
        flex-direction: row;
        gap: 20px;
    `}
`

export const ContainerPasts = styled.div`
    ${({theme}) => css`
            display: flex;
            flex-direction: column;
            gap: 20px;
            justify-content: center;
            padding: 20px;
            width: 80%;
        `}
`
export const ContainerPast = styled.div`
    ${({theme}) => css`
            display: flex;
            flex-direction: row;
            gap: 20px;
            padding: 20px;
            border-radius: 9px;
            justify-content: space-around;
            background-color: ${theme.colors.line};
        `}
`
export const ContainerPastLeft = styled.div`
    ${({theme}) => css`
            display: flex;
            flex-direction: row;
            gap: 20px;
        `}
`
export const ContainerPastHight = styled.div`
    ${({theme}) => css`
            display: flex;
            flex-direction: row;
            gap: 10px;
        `}
`

