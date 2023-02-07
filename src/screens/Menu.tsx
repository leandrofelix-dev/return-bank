import '../styles/global.css'
import { Blur } from '../components/Blur'
import logoImage from '../assets/logo2.svg'
import { SwitchDemo } from '../components/Switch';


export function Menu() {
  return (
    <div className="w-screen h-screen flex ">
      <Blur />

      <div className="mt-24 ml-36  z-10">
        <img className="" src={logoImage} alt='logo' />
        <p className=" text-white text-left">
          Hello World!
        </p>
      </div>
        <SwitchDemo/>
    </div>
  )
} 