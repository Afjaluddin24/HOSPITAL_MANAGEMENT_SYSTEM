import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Admin/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// User View
import Header from './Admin/Header.jsx'
import Navbar from './Admin/Navbar.jsx'
import Login from './Admin/Login.jsx'
import Footer from './Admin/Footer.jsx'
import Contact from './Admin/Contact.jsx'
import Otpvarification from './Admin/Otpvarification.jsx'
import Navigation from './Admin/Navigation.jsx'

// Admin View
import Navbaraddmin from './Adminpanal/Navbaraddmin.jsx'
import Dashboard from './Adminpanal/Dashboard.jsx'
import Footeradmin from './Adminpanal/Footeradmin.jsx'
import Doctorstaff from './Adminpanal/Doctorstaff.jsx'
import Doctorslists from './Adminpanal/Doctorslists.jsx'
import Receptionist from './Adminpanal/Receptionist.jsx'
import AvailableDoctor from './Adminpanal/AvailableDoctor.jsx'


// Reception view

import Navbarres from './Reception/Navbarres.jsx'
import Dashboardrec from './Reception/Dashboardrec.jsx'
import Footerrec from './Reception/Footerrec.jsx'
import Invoicerec from './Reception/Invoicerec.jsx'
import Patientrec from './Reception/Patientrec.jsx'

import "primereact/resources/themes/lara-light-cyan/theme.css";



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
            {/* User View  */}
            <Route path="/" element={<Home />} />
            <Route path='/Contact' element={<><Header/><Navbar/><Contact/><Footer/></>} />
            <Route path='/Login' element={<><Header/><Navbar/><Login/><Footer/></>} />
            <Route path='/Verification' element={<><Otpvarification/></>} />

            {/* Admin View  */}

            <Route path='/Admin/Dashboard' element={<><Navbaraddmin/><Dashboard/><Footeradmin/></>} />
            <Route path='/Admin/Doctor' element={<><Navbaraddmin/><Doctorstaff/><Footeradmin/></>} />
            <Route path='/Admin/Doctors' element={<><Navbaraddmin/><Doctorslists/><Footeradmin/></>} />
            <Route path='/Admin/AvailableDoctors' element={<><Navbaraddmin/><AvailableDoctor/><Footeradmin/></>} />
            <Route path='/Admin/Receptionist' element={<><Navbaraddmin/><Receptionist/><Footeradmin/></>} />

            {/* Reception View  */}
            
            <Route path="/Reception/Home" element={<><Navbarres/><Dashboardrec/><Footerrec/></>} />
            <Route path="/Reception/Patients" element={<><Navbarres/><Patientrec/><Footerrec/></>} />


            <Route path="/Reception/Invoice" element={<><Navbarres/><Invoicerec/><Footerrec/></>} />

      </Routes>
  </BrowserRouter>
)
