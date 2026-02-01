import React from 'react'

 function Dashboard() {
  return (
    <div className="container-fluid mt-4">
  <div className="row g-4">
    {/* Patients */}
    <div className="col-12 col-md-6 col-lg-3">
      <div
        className="card shadow text-center"
        style={{ transition: "0.3s" }}
        onmouseover="this.style.transform='translateY(-5px)'"
        onmouseout="this.style.transform='translateY(0)'"
      >
        <div className="card-body">
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: "#0d6efd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 26,
              margin: "auto",
              marginBottom: 12
            }}
          >
            <i className="fa fa-hospital-user" />
          </div>
          <h6>Total Patients</h6>
          <h3 className="fw-bold">1,245</h3>
          <span className="badge bg-success">+12 Today</span>
        </div>
      </div>
    </div>
    {/* Doctors */}
    <div className="col-12 col-md-6 col-lg-3">
      <div
        className="card shadow text-center"
        style={{ transition: "0.3s" }}
        onmouseover="this.style.transform='translateY(-5px)'"
        onmouseout="this.style.transform='translateY(0)'"
      >
        <div className="card-body">
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: "#198754",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 26,
              margin: "auto",
              marginBottom: 12
            }}
          >
            <i className="fa fa-user-doctor" />
          </div>
          <h6>Doctors</h6>
          <h3 className="fw-bold">42</h3>
          <span className="badge bg-info">On Duty</span>
        </div>
      </div>
    </div>
    {/* Reception */}
    <div className="col-12 col-md-6 col-lg-3">
      <div
        className="card shadow text-center"
        style={{ transition: "0.3s" }}
        onmouseover="this.style.transform='translateY(-5px)'"
        onmouseout="this.style.transform='translateY(0)'"
      >
        <div className="card-body">
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: "#ffc107",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 26,
              margin: "auto",
              marginBottom: 12
            }}
          >
            <i className="fa fa-user-nurse" />
          </div>
          <h6>Reception Staff</h6>
          <h3 className="fw-bold">18</h3>
          <span className="badge bg-dark">Active</span>
        </div>
      </div>
    </div>
    {/* Reports */}
    <div className="col-12 col-md-6 col-lg-3">
      <div
        className="card shadow text-center"
        style={{ transition: "0.3s" }}
        onmouseover="this.style.transform='translateY(-5px)'"
        onmouseout="this.style.transform='translateY(0)'"
      >
        <div className="card-body">
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: "#dc3545",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 26,
              margin: "auto",
              marginBottom: 12
            }}
          >
            <i className="fa fa-file-medical" />
          </div>
          <h6>Medical Reports</h6>
          <h3 className="fw-bold">320</h3>
          <span className="badge bg-danger">Critical: 5</span>
        </div>
      </div>
    </div>
  </div>
  {/* ================= TABLE ================= */}
  <div className="card shadow mt-5">
    <div className="card-header text-white" style={{ background: "#0d6efd" }}>
      <i className="fa fa-user-doctor" /> Doctor Details
    </div>
    <div className="card-body table-responsive">
      <table className="table table-striped align-middle">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Department</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dr. Amit Sharma</td>
            <td>Cardiology</td>
            <td>9876543210</td>
            <td>
              <span className="badge bg-success">Available</span>
            </td>
            <td>
              <button className="btn btn-sm btn-primary">
                <i className="fa fa-eye" />
              </button>
              <button className="btn btn-sm btn-warning">
                <i className="fa fa-edit" />
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Dr. Neha Patel</td>
            <td>Neurology</td>
            <td>9123456780</td>
            <td>
              <span className="badge bg-danger">Busy</span>
            </td>
            <td>
              <button className="btn btn-sm btn-primary">
                <i className="fa fa-eye" />
              </button>
              <button className="btn btn-sm btn-warning">
                <i className="fa fa-edit" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    </div>

  )
}
export default Dashboard;