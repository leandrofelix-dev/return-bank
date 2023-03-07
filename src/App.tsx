import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer'
import { LogoutButtom } from './components/LogoutButtom'

function App() {
  return (
    <div className="app">
      <LogoutButtom />
      <Outlet />
      <Footer />
    </div>
  )
}
export default App
