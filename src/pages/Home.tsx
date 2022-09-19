import { Form } from "../components/Form";
import Logo from '../assets/Logo.svg'

export function Home() {
  return (
    <>  
      <img src={Logo} alt="" width={100} height={100}/> 
      <Form />
    </>
  )
}