import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage, 
  OtherPage, 
  Login, 
  Cadastro,
  Limbo, 
  CadastroReuniao, 
  AceiteJustificativa, 
  PermitirLogin, 
  EscolherCargos, 
  ProfilePage,
  Justificativa, 
  Presenca, 
  PresencaData, 
  PresencaIndividual

} from './pages'


function App() {

  const vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='otherpage' element={<OtherPage/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='cadastro' element={<Cadastro/>}></Route>
        <Route path='limbo' element={<Limbo/>}></Route>
        <Route path='Login' element={<Login/>}></Route>
        <Route path='Cadastro' element={<Cadastro/>}></Route>
        <Route path='Limbo' element={<Limbo/>}></Route>
        <Route path='Justificativa' element={<Justificativa/>}></Route>
        <Route path='Presenca' element={<Presenca/>}></Route>
        <Route path='PresencaData' element={<PresencaData/>}></Route>
        <Route path='cadastroReuniao' element={<CadastroReuniao/>}></Route>
        <Route path='aceiteJustificativa' element={<AceiteJustificativa/>}></Route>
        <Route path='permitirLogin' element={<PermitirLogin/>}></Route>
        <Route path='escolherCargos' element={<EscolherCargos/>}></Route>
        <Route path='perfil' element={<ProfilePage/>}></Route> 
        <Route path='PresencaIndividual' element={<PresencaIndividual/>}></Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
