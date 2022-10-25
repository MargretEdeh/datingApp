import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
 <ErrorBoundary>
   <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
 </ErrorBoundary>
)
