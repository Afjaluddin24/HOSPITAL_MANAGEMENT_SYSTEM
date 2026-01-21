import React from 'react'

function Services() {
  return (
    <div className="container my-5">
    <h2 className="text-center mb-4">Our Services</h2>
    <div className="row text-center">
      <div className="col-12 col-md-4 mb-4">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Emergency Care</h5>
            <p className="card-text">
              24/7 emergency services with experienced medical staff.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 mb-4">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Qualified Doctors</h5>
            <p className="card-text">
              Specialized doctors providing quality healthcare.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 mb-4">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Online Appointment</h5>
            <p className="card-text">
              Easy and fast appointment booking anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Services;