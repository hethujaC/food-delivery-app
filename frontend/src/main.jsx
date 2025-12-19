import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <App />
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/order' element={<PlaceOrder/>} />
   </Routes>
  </BrowserRouter>
   
  
)
