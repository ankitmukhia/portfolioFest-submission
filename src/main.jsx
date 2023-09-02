import React from 'react'
import ReactDOM from 'react-dom/client';
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import App from './App.jsx'
import './index.css'

const options = {
  positions: positions.TOP_CENTER,
  timeout: 5000
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider template={AlertTemplate} {...options}>
      <App />
    </Provider>
  </React.StrictMode>,
)