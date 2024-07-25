import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage, OtherPage, CadastroReuniao, AceiteJustificativa, PermitirLogin, EscolherCargos } from './pages'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='otherpage' element={<OtherPage/>}></Route>
        <Route path='cadastroReuniao' element={<CadastroReuniao/>}></Route>
        <Route path='aceiteJustificativa' element={<AceiteJustificativa/>}></Route>
        <Route path='permitirLogin' element={<PermitirLogin/>}></Route>
        <Route path='escolherCargos' element={<EscolherCargos/>}></Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
