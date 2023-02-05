import './styles/global.css';
import logoImage from './assets/logo.svg'
import card from './assets/card.svg'
import { Blur } from './components/Blur';

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center z-0">

      <Blur/>
      
        <div className="w-full max-w-3xl mx-auto flex items-center justify-center flex-col gap-10 z-10">

        <img className="pt-2" src={logoImage} alt="Logo" />

        <div>
          <h1 className="font-poppins text-8xl text-slate-100 ">
            Seja Bem Vindo!
          </h1>
        </div>
  
        <button
          type="button"
          className=""
        >
          <img src={card} alt="card" />
        </button>

        <div className="font-bold  text-3xl text-slate-100">
          Insira o seu cartão
        </div>
        </div>
      </div>
    //A Div ocupa toda espaço da tela
  )
}
export default App
