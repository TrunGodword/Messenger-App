import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Header from "./components/Header.jsx"
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Header />
        <App />
    </BrowserRouter>
)
