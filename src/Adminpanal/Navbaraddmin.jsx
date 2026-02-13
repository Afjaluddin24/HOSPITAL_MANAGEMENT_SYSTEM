import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { warningAlert } from '../Message/SweetAlert';

function Navbaraddmin() {

  const [userName,setUserName] = useState("");  
  const Tocken =  localStorage.getItem("Tokena");
  const logOut =  async() => {
    const warningMessage = await warningAlert("Are you sure to logout?");
    if(warningMessage)
    {
        localStorage.removeItem("Token");
        window.location.href = "/Login";
    }
  }

  useEffect(()=>{
     
     if(Tocken)
     {
        const decodedToken = jwtDecode(Tocken);
        console.log(decodedToken);
        setUserName(decodedToken.sub);

       const expiryTime = decodedToken.exp * 1000;
           const currentTime = Date.now();
           const remainingMs = expiryTime - currentTime;
           const remainingMinutes = Math.floor(remainingMs / 60000);
           const remainingSeconds = Math.floor((remainingMs % 60000) / 1000);
          //  console.log(`Token expires in ${remainingMinutes} min ${remainingSeconds} sec`);
          
           setTimeout(() => {
             warningAlert("Session expired. Please login again.");
             localStorage.removeItem("Token");
             window.location.href = "/Login";
           }, remainingMs);
     }
  },[])
  return (
    <>
       <nav
  className="navbar navbar-expand-lg navbar-dark shadow bg-primary"
>
  <div className="container-fluid">
    <a className="navbar-brand d-flex align-items-center" href="#">
      <img
        src="../Myimage/AdminLogo.png"
        width={55}
        alt="Hospital Logo"
        style={{ marginRight: 8 }}
      />
      <strong>City Care Hospital</strong>
    </a>
    <button
      className="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#menu"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="menu">
      <ul className="navbar-nav ms-auto align-items-lg-center">
        <li className="nav-item">
          <Link  to="/Admin/Dashboard" className="nav-link active">
            <i className="fa fa-chart-line" /> Dashboard
          </Link>
        </li>
        <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
        >
          <i className="fa fa-user-doctor" /> Doctors
        </a>

        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <Link className="dropdown-item" to="/Admin/AvailableDoctors">
              <i className="fa-solid fa-user-group me-2"></i> Available Doctor
            </Link>
          </li>
           <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to="/Admin/Doctors">
              <i className="fa fa-user-doctor me-2" /> Doctors
            </Link>
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <Link className="dropdown-item" to="/Admin/Doctor">
              <i className="fa fa-user-plus me-2" /> Add Doctor
            </Link>
          </li>
        </ul>
      </li>

        <li className="nav-item">
          <Link to="/Admin/Receptionist" className="nav-link">
            <i className="fa fa-user-nurse" /> Reception
          </Link>
        </li>
        <li className="nav-item">
          <Link  to="/Admin/" className="nav-link">
            <i className="fa fa-file-medical" /> Reports
          </Link>
        </li>
        {/* USER DROPDOWN */}
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-warning"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
          >
            <i className="fa fa-user" /> Welcome, {userName}
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a className="dropdown-item" href="#">
                <i className="fa fa-user-circle me-2" /> Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item text-danger" href="#" onClick={() =>logOut()}>
                <i className="fa fa-right-from-bracket me-2"/> Logout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
export default Navbaraddmin;