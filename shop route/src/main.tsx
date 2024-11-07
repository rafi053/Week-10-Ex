import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  ProductProvider } from './context/ProductContext'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <ProductProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </ProductProvider>,
)
