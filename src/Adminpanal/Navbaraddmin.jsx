import React from 'react'

function Navbaraddmin() {
  return (
    <>
       <nav
  className="navbar navbar-expand-lg navbar-dark shadow"
  style={{ background: "linear-gradient(90deg,#0d6efd,#0dcaf0)" }}
>
  <div className="container-fluid">
    <a className="navbar-brand d-flex align-items-center" href="#">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2967/2967350.png"
        width={42}
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
          <a className="nav-link active" href="#">
            <i className="fa fa-chart-line" /> Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fa fa-user-doctor" /> Doctors
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fa fa-user-nurse" /> Reception
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fa fa-file-medical" /> Reports
          </a>
        </li>
        {/* USER DROPDOWN */}
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-warning"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
          >
            <i className="fa fa-user" /> Welcome, Admin
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
              <a className="dropdown-item text-danger" href="#">
                <i className="fa fa-right-from-bracket me-2" /> Logout
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