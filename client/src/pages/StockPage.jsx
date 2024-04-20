import NavBar from "../components/NavBar"
import './StockPage.css'
import Chart from "../components/Chart"

const StockPage = () => {
  return (
    <div className="container">
        <NavBar/>
        <div className="infobox">
          
        </div>
        <Chart/>
    </div>
  )
}

export default StockPage