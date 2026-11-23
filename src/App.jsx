import './App.css'
import ListaProductos from './Componentes/ListaProductos'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react'
import RegisterModal from "./Componentes/RegisterModal"
import Login from './Pages/Login'


function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

const abrirFormulario = () => {
    setMostrarFormulario(true);
};

  

  return (
   <div>
     

   
    <Routes>
      <Route path='login' element={ <Login />} />
      <Route path='/register' element={<RegisterModal />} />
      <Route path='/productos' element={<ListaProductos
       mostrarFormulario={mostrarFormulario}
       setMostrarFormulario={setMostrarFormulario}
       abrirFormulario={abrirFormulario}
            cerrarFormulario={() => setMostrarFormulario(false)}/>} />

    </Routes>


   </div>
  )
}

export default App;
