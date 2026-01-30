import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Admin/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Admin/Header.jsx'
import Navbar from './Admin/Navbar.jsx'
import Login from './Admin/Login.jsx'
import Footer from './Admin/Footer.jsx'
import Contact from './Admin/Contact.jsx'
import Otpvarification from './Admin/Otpvarification.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/Contact' element={<><Header/><Navbar/><Contact/><Footer/></>} />
            <Route path='/Login' element={<><Header/><Navbar/><Login/><Footer/></>} />
            <Route path='/Verification' element={<><Otpvarification/></>} />
      </Routes>
  </BrowserRouter>
)
