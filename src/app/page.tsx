import {ArrowRight, Copy, Mail } from 'lucide-react';
import {Button} from "@/components/button";
import {IconButton} from "@/components/icon-botton";
import { InputField, InputIcon, InputRoot } from '@/components/input';


export default function Home() {
  return (
    <main>
      <Button type='submit'>
        Enviar
        <ArrowRight/>
      </Button>

      <IconButton>
        <Copy/>
      </IconButton>

      <div>
        <InputRoot>
        <InputField/>
          
          <InputIcon>
            <Mail className="size-5"/>            
          </InputIcon>
          
        </InputRoot>
      </div>
    </main>
  );
}
