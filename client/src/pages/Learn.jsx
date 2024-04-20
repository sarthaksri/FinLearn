import NavBar from "../components/NavBar"
import "../pages/Learn.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

const Learn=()=>{
    return(
        <div>
        <NavBar></NavBar>
            <div className="maincontainer">
                <h1>Learn Stocks with Us</h1>
            </div>
            <div>
                <div className="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/GFn2cDV8bVw?si=nRuQ0qVDs0OD1Fi5" title="YouTube video" allowfullscreen></iframe>
                </div>
            </div>
        
        </div>
    )
}
export default Learn