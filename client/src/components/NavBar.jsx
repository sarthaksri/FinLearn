import LogoutButton from './LogoutButton'
import './Navbar.css'

const NavBar = () => {
  return (
    <div className="navbar">
        <img className="logo" src="src\assets\logo.png" alt="logo.png" />
        <div className="buttons">
            <button className='Nbuttons'>Learn</button>
            <button className='Nbuttons'>News</button>
            <button className='Nbuttons'>Stock</button>
            <button className='Nbuttons'>Expense Tracker</button>
            <LogoutButton className='Nbuttons'/>
        </div>
    </div>
  )
}

export default NavBar