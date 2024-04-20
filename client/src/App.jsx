import './App.css'
import { useAuth0 } from '@auth0/auth0-react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Learn from './pages/Learn'
import StockPage from './pages/StockPage'
import Expenses from './pages/Expenses'
import News from './pages/News'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/learn' element={<Learn/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/stocks' element={<StockPage/>}/>
        <Route path='/expenses' element={<Expenses/>}/>
      </Routes>
    </Router>
  )
}

export default App
