import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ProductContextProvider } from './common/ProductContext';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </React.StrictMode>,
)
