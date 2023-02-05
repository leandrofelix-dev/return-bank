import { Home } from './screens/Home'
import { getSaudacao, saudacao } from './lib/dayJs'

function App() {
  getSaudacao()

  return (
    <Home msg={`Olá! ${saudacao}`} />
  )
}
export default App
