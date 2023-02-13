import { Rest } from './screens/Rest'
import { Menu } from './screens/Menu'
import { getSaudacao, saudacao } from './lib/dayJs'

export const audio = new Audio('/assets/sounds/beep.mp3')

function App() {
  getSaudacao()
  return (
    <>
      {/* <Rest msg={`Olá! ${saudacao}`} /> */}
      <Menu />
    </>
  )
}
export default App
