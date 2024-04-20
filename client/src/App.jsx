import './App.css'
import { useAuth0 } from '@auth0/auth0-react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage'
import StockPage from './pages/StockPage'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/stocks' element={<StockPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
