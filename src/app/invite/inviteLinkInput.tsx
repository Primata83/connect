import { IconButton } from "@/components/icon-botton"
import { InputRoot, InputIcon, InputField } from "@/components/input"
import { Link, Copy } from "lucide-react"

export function InviteLinkInput () {
    return (
        <InputRoot>
        <InputIcon>
            <Link className='size-5'/>
        </InputIcon>
        <InputField 
            readOnly  
            defaultValue="http://localhost:3000/invite/cigarroaceso" />                          
        
        <IconButton className='-mr-2'>
            <Copy className='size-5'/>
        </IconButton>
    </InputRoot>
    )
}

export default InviteLinkInput