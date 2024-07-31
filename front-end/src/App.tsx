import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
import { Homepage, 
  OtherPage, 
  Login, 
  Cadastro,
  Limbo, 
  CadastroReuniao, 
  AceiteJustificativa, 
  PermitirLogin, 
  EscolherCargos, 
  ProfilePage 
} from './pages'
=======
import { Homepage, OtherPage, Login, Cadastro, Limbo, Justificativa, Presenca, PresencaData, CadastroReuniao, AceiteJustificativa, PermitirLogin, EscolherCargos, PresencaIndividual} from './pages'
>>>>>>> 55d7d9f1b4902b6e3836f992d1a95228b014900c

function App() {

  const vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='otherpage' element={<OtherPage/>}></Route>
<<<<<<< HEAD
        <Route path='login' element={<Login/>}></Route>
        <Route path='cadastro' element={<Cadastro/>}></Route>
        <Route path='limbo' element={<Limbo/>}></Route>
=======
        <Route path='Login' element={<Login/>}></Route>
        <Route path='Cadastro' element={<Cadastro/>}></Route>
        <Route path='Limbo' element={<Limbo/>}></Route>
        <Route path='Justificativa' element={<Justificativa/>}></Route>
        <Route path='Presenca' element={<Presenca/>}></Route>
        <Route path='PresencaData' element={<PresencaData/>}></Route>
>>>>>>> 55d7d9f1b4902b6e3836f992d1a95228b014900c
        <Route path='cadastroReuniao' element={<CadastroReuniao/>}></Route>
        <Route path='aceiteJustificativa' element={<AceiteJustificativa/>}></Route>
        <Route path='permitirLogin' element={<PermitirLogin/>}></Route>
        <Route path='escolherCargos' element={<EscolherCargos/>}></Route>
<<<<<<< HEAD
        <Route path='perfil' element={<ProfilePage/>}></Route> 
=======
        <Route path='PresencaIndividual' element={<PresencaIndividual/>}></Route>
>>>>>>> 55d7d9f1b4902b6e3836f992d1a95228b014900c
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
