import LogoutButton from './LogoutButton'
import './Navbar.css'
import {useNavigate} from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <div className="navbar">
        <img className="logo" src="src\assets\logo.png" alt="logo.png" />
        <div className="buttons">
            <button className='Nbuttons' onClick={() => {navigate("/learn")}}>Learn</button>
            <button className='Nbuttons' onClick={() => {navigate("/news")}}>News</button>
            <button className='Nbuttons' onClick={() => {navigate("/stocks")}}>Stocks</button>
            <button className='Nbuttons' onClick={() => {navigate("/expenses")}}>Expense Tracker</button>
            <LogoutButton className='Nbuttons'/>
        </div>
    </div>
  )
}

export default NavBar