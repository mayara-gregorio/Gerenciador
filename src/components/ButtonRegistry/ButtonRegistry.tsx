import { Button} from "../../style"
import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string
}
export default function ButtonToRegistry({title, ...rest}:ButtonProps){
    return(
        <Button {...rest}>{title}</Button>
    )
}