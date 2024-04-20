import NavBar from "../components/NavBar"
import Dashboard from "../components/Dashboard"
import "./Learn.css"


const Learn=()=>{
    return(
        <div>
            <NavBar/>
            <Dashboard />
            <div className="maincontainer">
                <h1 className="Lh1">Learn Stocks with Us</h1>
                <iframe src="https://www.youtube.com/embed/GFn2cDV8bVw?si=nRuQ0qVDs0OD1Fi5" title="YouTube video" allowfullscreen></iframe>
            </div>
        
        </div>
    )
}
export default Learn