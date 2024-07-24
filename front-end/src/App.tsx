import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage, OtherPage, CadastroReuniao } from './pages'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='otherpage' element={<OtherPage/>}></Route>
        <Route path='cadastroReuniao' element={<CadastroReuniao/>}></Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
