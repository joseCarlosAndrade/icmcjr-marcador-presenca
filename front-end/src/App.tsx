import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage, OtherPage, Login, Cadastro, Limbo, Justificativa, Presenca } from './pages'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='otherpage' element={<OtherPage/>}></Route>
        <Route path='Login' element={<Login/>}></Route>
        <Route path='Cadastro' element={<Cadastro/>}></Route>
        <Route path='Limbo' element={<Limbo/>}></Route>
        <Route path='Justificativa' element={<Justificativa/>}></Route>
        <Route path='Presenca' element={<Presenca/>}></Route>

      </Routes>
    </BrowserRouter>
   
  )
}

export default App
