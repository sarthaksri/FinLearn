import Dashboard from '../components/Dashboard'
import NavBar from '../components/NavBar'

import './Expenses.css'

const Expenses = () => {
  return (
    <div className='Econtainer'>
        <NavBar/>
        <Dashboard/>
        <div className='tranc'>
            <div className='expenseP'>

            </div>
            <div className='expenseL'>
                
            </div>
        </div>
    </div>
  )
}

export default Expenses