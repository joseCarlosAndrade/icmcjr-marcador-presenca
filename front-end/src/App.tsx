import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage, OtherPage, Login, Cadastro, Limbo } from './pages'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='otherpage' element={<OtherPage/>}></Route>
        <Route path='Login' element={<Login/>}></Route>
        <Route path='Cadastro' element={<Cadastro/>}></Route>
        <Route path='Limbo' element={<Limbo/>}></Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
