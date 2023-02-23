import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="app">
      <Outlet />
      <Footer />
    </div>
  )
}
export default App
