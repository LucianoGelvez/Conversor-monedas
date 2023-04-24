import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import MenuUsuario from './Pages/MenuUsuario'
import RegistroDeReservas from './Pages/RegistroDeReservas'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/menu-usuario" element={<MenuUsuario/>}/>
        <Route path="/registroDeReserva" element={<RegistroDeReservas />}/>
        <Route path="/busqueda" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
