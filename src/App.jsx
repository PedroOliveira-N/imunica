import { Route, Routes } from 'react-router-dom'
import './App.css'
import AnalisadorPage from './pages/AnalisadorPage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/homepage' element={<HomePage/>}/>
        <Route path='/analisador' element={<AnalisadorPage/>}/>
      </Routes>
    </div>
  )
}

export default App
