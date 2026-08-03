import { Route, Routes } from 'react-router-dom'
import './App.css'
import AnalisadorPage from './pages/AnalisadorPage'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import EducativaPage from './pages/EducativaPage'
import SobrePage from './pages/SobrePage'
import CatalogoJogos from './pages/EducativaPage/CatalogoJogos'
import CatalogoLeitura from './pages/EducativaPage/CatalogoLeitura'

function App() {

  return (
    <div>
     <Header/> 
      <div className='pages'>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/analisador' element={<AnalisadorPage/>}/>
          <Route path='/area-educativa' element={<EducativaPage/>}/>
          <Route path='/sobre' element={<SobrePage/>}/>

          <Route path='/area-educativa/catalogo-jogos' element={<CatalogoJogos/>}/>
          <Route path='/area-educativa/catalogo-leitura' element={<CatalogoLeitura/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
