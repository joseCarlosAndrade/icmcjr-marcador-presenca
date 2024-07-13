import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { OtherPage, TemplatePage } from './pages'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TemplatePage/>}></Route>
        <Route path='otherpage' element={<OtherPage/>}></Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
