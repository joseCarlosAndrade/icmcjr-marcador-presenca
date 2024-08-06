import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage, 
  Login, 
  Cadastro,
  Limbo, 
  CadastroReuniao, 
  AceiteJustificativa, 
  PermitirLogin, 
  EscolherCargos, 
  ProfilePage,
  Justificativa, 
  ConsultaPresenca, 
  PresencaData, 
  PresencaIndividual,
  CadastrarPresenca,
  CadastrarJustificativa,
  ConsultarReunioes

} from './pages'


function App() {

  const vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='cadastro' element={<Cadastro/>}></Route>
        <Route path='limbo' element={<Limbo/>}></Route>
  
        <Route path='Justificativa' element={<Justificativa/>}></Route>
        <Route path='consultaPresenca' element={<ConsultaPresenca/>}></Route>
        <Route path='PresencaData' element={<PresencaData/>}></Route>
        <Route path='cadastroReuniao' element={<CadastroReuniao/>}></Route>
        <Route path='aceiteJustificativa' element={<AceiteJustificativa/>}></Route>
        <Route path='permitirLogin' element={<PermitirLogin/>}></Route>
        <Route path='escolherCargos' element={<EscolherCargos/>}></Route>
        
        <Route path='PresencaIndividual' element={<PresencaIndividual/>}></Route>

        <Route path='perfil' element={<ProfilePage/>}></Route> 
        <Route path='cadastrarPresenca' element={<CadastrarPresenca/>}></Route>
        <Route path='cadastrarJustificativa' element={ <CadastrarJustificativa/> }></Route>
        <Route path='consultaReuniao' element={<ConsultarReunioes/>}></Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
