import React from 'react'

function Header() {
  return (
    <header className="bg-primary text-white py-3">
        <div className="container">
            <div className="row align-items-center text-center text-md-start">
            {/* Logo */}
            <div className="col-12 col-md-2 mb-3 mb-md-0 text-center">
                <i className="fas fa-hospital fa-3x" />
            </div>
            {/* Hospital Name */}
            <div className="col-12 col-md-6 mb-3 mb-md-0">
                <h2 className="m-0 fs-4 fs-md-3">City Care Hospital</h2>
                <small>Trusted Healthcare Services</small>
            </div>
            {/* Hospital Building Image */}
            <div className="col-12 col-md-4 text-center">
                <img
                src="../Myimage/Mylogo.png"
                alt="Hospital Building"
                className="img-fluid rounded shadow"
                style={{ maxHeight: 100 }}
                />
            </div>
            </div>
        </div>
    </header>
  )
}
export default Header;