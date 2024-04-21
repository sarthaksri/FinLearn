import Dashboard from '../components/Dashboard'
import NavBar from '../components/NavBar'

import './Expenses.css'

const Expenses = () => {
  return (
    <div className='Econtainer'>
        <NavBar/>
        <Dashboard/>
        <div className='center'>
        <div className='tranc'>
            <div className='expenseP'>
              <div className='names'>
                <span>Credit</span>
                <span>From mom</span>
              </div>
              <span>+500</span>
            </div>
            <div className='expenseL'>
              <div className='names'>
                <span>Debit</span>
                <span>To merchant</span>
              </div>
              <span>-100</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Expenses