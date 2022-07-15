import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { makeServer } from './services/mirage'

makeServer()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
