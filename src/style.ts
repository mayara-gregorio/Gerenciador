import styled, {css} from "styled-components"

export const Container = styled.div`
    ${({theme})=> css`
        display: ${theme.actions.display};
        flex-direction: ${theme.actions.directionCol};
        justify-content: ${theme.actions.justfyCen};
        align-items: ${theme.actions.alignCenter};
        gap: ${theme.spaces.gap3};  
    `}
`
export const ContainerInps = styled.div`
    ${({theme})=> css`
        display: ${theme.actions.display};
        flex-direction: ${theme.actions.directionCol};
        justify-content: ${theme.actions.justfyCen};
        gap: ${theme.spaces.gap2};  
        width: ${theme.dimension.widht};
    `}
`
export const ContainerInp = styled.div`
    ${({theme})=> css`
        display: ${theme.actions.display};
        flex-direction: ${theme.actions.directionCol};
        gap: ${theme.spaces.gap1};  
        width: ${theme.dimension.widht};
        align-items: ${theme.actions.alignCenter};

    `}
`
export const Input = styled.input`
    ${({theme})=> css`
        border: ${theme.border.none};
        border-radius: ${theme.border.radius3};
        height: ${theme.dimension.height};
        width: ${theme.dimension.widht1};
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
        height: ${theme.dimension.height};
        border: ${theme.border.none};
        padding: ${theme.spaces.padding1} ${theme.spaces.padding2};
        color: ${theme.colors.text_btn_text_1};
        border-radius: ${theme.border.radius1};
   `}
`
export const Header = styled.header`
    ${({theme})=> css`
        display: ${theme.actions.display};
        flex-direction: ${theme.actions.directionRow};
        justify-content: ${theme.actions.justfyBetween};
        margin: 40px;
        align-items: ${theme.actions.alignCenter};
        width: ${theme.dimension.widht};
        border: 2px solid ${theme.colors.line};
    `}
`
export const Main = styled.main`
    ${({theme}) => css`
        display: ${theme.actions.display};
        flex-direction: ${theme.actions.directionRow};
        justify-content: ${theme.actions.justfyBetween};
        gap: ${theme.spaces.gap2};  
    `}
`
export const ButtonDiv = styled.div`
    ${({theme}) => css`
        display: ${theme.actions.display};
        flex-direction: ${theme.actions.directionRow};
        align-items: ${theme.actions.alignCenter};
        gap: ${theme.spaces.gap1};  
        background-color: ${theme.colors.background_button};
        color: ${theme.colors.text_btn_text_1};
        border-radius: ${theme.border.radius1};
        padding: ${theme.border.radius3} ${theme.spaces.padding};
    `}
`

export const ButtonDivInLeft = styled.div`
    ${({theme}) => css`
        display: ${theme.actions.display};
        flex-direction: ${theme.actions.directionCol};
    `}
`
export const ButtonDivInHight = styled.div`
    ${({theme}) => css`
        display: ${theme.actions.display};
        flex-direction: ${theme.actions.directionCol};
        justify-content: ${theme.actions.justfyCen};
        align-items: ${theme.actions.alignCenter};
    `}
`
export const ContainerButton = styled.div`
    ${({theme}) => css`
        display: ${theme.actions.display};
        flex-direction: ${theme.actions.directionRow};
        gap: ${theme.spaces.gap2};  

    `}
`
export const ContainerPasts = styled.div`
    ${({theme}) => css`
        display: ${theme.actions.display};
        flex-direction: ${theme.actions.directionCol};
        gap: ${theme.spaces.gap2};  
        justify-content: ${theme.actions.justfyCen};
        padding: ${theme.spaces.padding};
        width: ${theme.dimension.widht2} ;
    `}
`
export const ContainerPast = styled.div`
    ${({theme}) => css`
        display: ${theme.actions.display};
        flex-direction: ${theme.actions.directionRow};
        gap: ${theme.spaces.gap2};  
        padding: ${theme.spaces.padding};
        border-radius: ${theme.border.radius4};
        justify-content: ${theme.actions.justfyAround};
        background-color: ${theme.colors.line};
    `}
`
export const ContainerPastLeft = styled.div`
    ${({theme}) => css`
    '   display: ${theme.actions.display};
        flex-direction: ${theme.actions.directionRow};
        gap: ${theme.spaces.gap2}
    `}
`
export const ContainerPastHight = styled.div`
    ${({theme}) => css`
        display: ${theme.actions.display};
        flex-direction: ${theme.actions.directionRow};
        gap: ${theme.spaces.gap1}
    `}
`