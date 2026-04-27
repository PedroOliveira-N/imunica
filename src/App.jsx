import { Route, Routes } from 'react-router-dom'
import './App.css'
import AnalisadorPage from './pages/AnalisadorPage'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import EducativaPage from './pages/EducativaPage'
import SobrePage from './pages/SobrePage'

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
        </Routes>
      </div>
    </div>
  )
}

export default App
