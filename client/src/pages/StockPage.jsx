import NavBar from "../components/NavBar"
import Dashboard from "../components/Dashboard"
import Chart from "../components/Chart"
import CandleGraph from "../components/CandleGraph"
import './StockPage.css'

const StockPage = () => {
  return (
    <div className="container">
        <NavBar/>
        <Dashboard/>
        <div className="infobox">
          
        </div>
        <Chart/>
    </div>
  )
}

export default StockPage