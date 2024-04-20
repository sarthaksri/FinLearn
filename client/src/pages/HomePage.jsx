import "./HomePage.css"

const HomePage = () => {
  return (
    <div className="container">
        <div className="navbar">
            <img src="src\assets\logo.png" alt="logo.png" />
            <button>Login</button>
        </div>
        <div className="body">
            <div className="text">
                <span>A STEP TOWARDS FINANCIAL FREEDOM</span>
                <h2>Learn Finances</h2>
                Finlearn helps inculcate the knowledge of day to day trading in new world teens. With the use of real-time trading data and preparing them for future financial decisions and improves their financial knowledge with real-life problems.
            </div>
        </div>
    </div>
  )
}

export default HomePage