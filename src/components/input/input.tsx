import { Input } from "../../style"
import { InputHTMLAttributes } from "react"
type InputProps = InputHTMLAttributes<HTMLInputElement>
export function InputHome({...rest}:InputProps
    ){
    return(
        <Input {...rest}/>
    )
}