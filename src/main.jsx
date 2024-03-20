import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutesApp from './Routes/RoutesApp'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <RoutesApp />
  </BrowserRouter>,
)
