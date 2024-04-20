import "./HomePage.css"

const HomePage = () => {
  return (
    <div className="container">
        <div className="navbar">
            <img className="logo" src="src\assets\logo.png" alt="logo.png" />
            <button>Login</button>
        </div>
        <div className="body">
            <div className="text">
                <span>A STEP TOWARDS FINANCIAL FREEDOM</span>
                <h2>Learn Finances</h2>
                <p>Finlearn helps inculcate the knowledge of day to day trading in new world teens. With the use of real-time trading data and preparing them for future financial decisions and improves their financial knowledge with real-life problems.</p>
            </div>
            <img src="src/assets/graph.jpg" alt="graph.jpg" />
        </div>
        <div className="features">
            <div className="card">
                <img className="flogo" src="src/assets/1.png" alt="" />
                <h3 className="flogo">Analysis</h3>
                <p>Finlearn provides data track for your present-day financial activities with the help of fampay. Is make changes in your virtual money to keep it in track of your present day  wallet balance.</p>
            </div>
            <div className="card">
                <img className="flogo" src="src/assets/2.png" alt="" />
                <h3 className="flogo">Analysis</h3>
                <p>Helps the teens to track their weekly/monthly budgets and plan out their finances accordingly.</p>
            </div>
            <div className="card">
                <img className="flogo" src="src/assets/3.png" alt="" />
                <h3 className="flogo">Analysis</h3>
                <p>Along with all the perks of FinLearn. It also provides valuable resources for teens to learn about the stock market, Financial management and upcoming events and important life lessons along with access to present-day business      newspaper.</p>
            </div>
        </div>
    </div>
  )
}

export default HomePage