import { Route, Routes } from 'react-router-dom'
import './App.css'
import AnalisadorPage from './pages/AnalisadorPage'
import HomePage from './pages/HomePage'
import Header from './components/Header'

function App() {

  return (
    <div>
     <Header/> 

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/analisador' element={<AnalisadorPage/>}/>
      </Routes>
    </div>
  )
}

export default App
