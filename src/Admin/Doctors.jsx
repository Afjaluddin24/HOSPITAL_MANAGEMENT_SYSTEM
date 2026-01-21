import React from 'react'

function Doctors() {
  return (
    <div className="container my-5">
    <h2 className="text-center mb-4">Our Expert Doctors</h2>
    <div className="row text-center">
      <div className="col-12 col-md-4 mb-4">
        <div className="card h-100 shadow">
          <img
            src="https://images.unsplash.com/photo-1606813902784-3c3a7b4d9d3c"
            className="card-img-top"
            style={{ height: 250, objectFit: "cover" }}
            alt="Doctor"
          />
          <div className="card-body">
            <h5 className="card-title">Dr. Amit Sharma</h5>
            <p className="text-muted mb-1">Cardiologist</p>
            <p className="mb-1">
              <i className="fa fa-clock me-1" /> 10:00 AM – 5:00 PM
            </p>
            <p>
              <i className="fa fa-phone me-1" /> +91 98765 43210
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 mb-4">
        <div className="card h-100 shadow">
          <img
            src="https://images.unsplash.com/photo-1550831107-1553da8c8464"
            className="card-img-top"
            style={{ height: 250, objectFit: "cover" }}
            alt="Doctor"
          />
          <div className="card-body">
            <h5 className="card-title">Dr. Neha Patel</h5>
            <p className="text-muted mb-1">Gynecologist</p>
            <p className="mb-1">
              <i className="fa fa-clock me-1" /> 9:00 AM – 3:00 PM
            </p>
            <p>
              <i className="fa fa-phone me-1" /> +91 91234 56789
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 mb-4">
        <div className="card h-100 shadow">
          <img
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d"
            className="card-img-top"
            style={{ height: 250, objectFit: "cover" }}
            alt="Doctor"
          />
          <div className="card-body">
            <h5 className="card-title">Dr. Raj Mehta</h5>
            <p className="text-muted mb-1">Orthopedic</p>
            <p className="mb-1">
              <i className="fa fa-clock me-1" /> 11:00 AM – 6:00 PM
            </p>
            <p>
              <i className="fa fa-phone me-1" /> +91 99887 66554
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Doctors; 