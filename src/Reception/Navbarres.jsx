import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

 function Navbarres() {
  const Tocens = localStorage.getItem("Tokenrr");
  const [username,setUsername] = useState("");

  useEffect(()=>{
    if(Tocens)
    {
      const dcodetoacn = jwtDecode(Tocens);
      console.log("Data is Toacn Res",dcodetoacn);
     setUsername(dcodetoacn.sub);
     // auto logout time over 

     const expiryTime = dcodetoacn.exp * 1000;
        const currentTime = Date.now();
        const remainingMs = expiryTime - currentTime;
        const remainingMinutes = Math.floor(remainingMs / 60000);
        const remainingSeconds = Math.floor((remainingMs % 60000) / 1000);
        //  console.log(`Token expires in ${remainingMinutes} min ${remainingSeconds} sec`);
        
        setTimeout(() => {
          warningAlert("Session expired. Please login again.");
          localStorage.removeItem("Tokenrr");
          window.location.href = "/Login";
        }, remainingMs);
    }
  },[]);
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    {/* Logo */}
    <a className="navbar-brand fw-bold" href="#">
      <img
        src="../Myimage/Resption.png"
        width={55}
        alt="Hospital Logo"
        style={{ marginRight: 8 }}
      />
      City Care Hospital
    </a>
    {/* ✅ Mobile Toggle Button */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarMenu"
    >
      <span className="navbar-toggler-icon" />
    </button>
    {/* Menu */}
    <div className="collapse navbar-collapse" id="navbarMenu">
      <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            <i className="fa fa-chart-line" /> Dashboard
          </a>
        </li>
       <li className="nav-item dropdown">
        <a
            className="nav-link dropdown-toggle text-white"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
        >
            <i className="fa fa-user-injured me-1"></i>Patients
        </a>

        <ul className="dropdown-menu dropdown-menu-end">
           <li>
            <Link to="/Reception/Patients" className="dropdown-item" >
                <img src="../Myimage/patients.png" alt="" width={25}  />&nbsp;
                New Patients
            </Link>
            </li>
             <li>
            <hr className="dropdown-divider" />
            </li>
            <li>
            <a className="dropdown-item" href="#">
                <i className="fa fa-user-check me-2 text-primary"></i>
                Active Patients
            </a>
            </li>

            <li>
            <hr className="dropdown-divider" />
            </li>

            <li>
            <a className="dropdown-item" href="#">
                <i className="fa fa-users me-2 text-dark"></i>
                All Patients
            </a>
            </li>

        </ul>
        </li>

        <li className="nav-item dropdown">
        <a
            className="nav-link dropdown-toggle text-white"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
        >
            <i className="fa fa-user-doctor me-1"></i>Doctors
        </a>

        <ul className="dropdown-menu dropdown-menu-end">

            <li>
            <a className="dropdown-item" href="#">
                <i className="fa fa-users me-2 text-primary"></i>
                All Doctors
            </a>
            </li>

        </ul>
        </li>
        
        <li className="nav-item dropdown">
            <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
            >
                <i className="fa fa-file-medical me-1"></i>Medical
            </a>

            <ul className="dropdown-menu dropdown-menu-end">

                <li>
                <a className="dropdown-item" href="#">
                    <i className="fa fa-file-lines me-2 text-primary"></i>
                    All Reports
                </a>
                </li>

            </ul>
        </li>

        <li className="nav-item dropdown">
            `<a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
            >
                <i className="fa fa-file-invoice-dollar me-1"></i>Invoice
            </a>

            <ul className="dropdown-menu dropdown-menu-end">

                <li>
                <Link className="dropdown-item" to="/Reception/Invoice">
                    <i className="fa fa-plus-circle me-2 text-success"></i>
                    Create Invoice
                </Link>
                </li>

                <li>
                <hr className="dropdown-divider" />
                </li>

                <li>
                <a className="dropdown-item" href="#">
                    <i className="fa fa-file-lines me-2 text-primary"></i>
                    All Invoices
                </a>
                </li>

            </ul>`
        </li>



        <li className="nav-item">
          <span className="nav-link text-warning fw-bold">
            <i className="fa fa-user" /> Welcome, {username}
          </span>
        </li>
        <li className="nav-item">
          <a className="btn btn-danger btn-sm mt-2 mt-lg-0" href="#">
            <i className="fa fa-right-from-bracket" /> Logout
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
export default Navbarres;