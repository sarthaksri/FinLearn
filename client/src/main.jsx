import React from 'react'
import ReactDOM from 'react-dom/client'
// import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
// import HomePage from './pages/HomePage.jsx'
// import StockPage from './pages/StockPage.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<HomePage/>
//   },
//   {
//     path:'/stocks',
//     element:<StockPage/>
//   }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-eaqhz7rg8ijvik4f.us.auth0.com"
    clientId="fYgG00PwcNR34LW8QtZR6tLYB6IexMcf"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  > 
    <App/>
    </Auth0Provider>
  </React.StrictMode>,
)
