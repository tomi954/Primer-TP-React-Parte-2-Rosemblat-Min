import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './assets/Componentes/Formulario.jsx'
import Listado from './assets/Componentes/Listado.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
       <div className='row'>
      <div className='container'>
          <h1>ADMINISTRADOR DE PACIENTES</h1>
          <Formulario/>
          <Listado/>
      </div>
    </div>
  )
}

export default App
