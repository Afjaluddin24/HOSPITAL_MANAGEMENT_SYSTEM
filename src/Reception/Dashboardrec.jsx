import React from 'react'

 function Dashboardrec() {
  return (
    <div className="container mt-4 text-center">

  {/* ================= CARDS ================= */}
  <div className="row g-4 justify-content-center">

    {/* Total Patients */}
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="card shadow">
        <div className="card-body">

          <div
            className="bg-primary text-white rounded-circle d-flex 
                       align-items-center justify-content-center mx-auto"
            style={{ width: 80, height: 80 }}
          >
            <i className="fa fa-user-injured fa-2x" />
          </div>

          <h5 className="mt-3">Total Patients</h5>
          <h2>1,245</h2>
          <span className="badge bg-success">+12 Today</span>

        </div>
      </div>
    </div>

    {/* Doctors */}
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="card shadow">
        <div className="card-body">

          <div
            className="bg-success text-white rounded-circle d-flex 
                       align-items-center justify-content-center mx-auto"
            style={{ width: 80, height: 80 }}
          >
            <i className="fa fa-user-doctor fa-2x" />
          </div>

          <h5 className="mt-3">Doctors</h5>
          <h2>42</h2>
          <span className="badge bg-info">On Duty</span>

        </div>
      </div>
    </div>

    {/* Medical Reports */}
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="card shadow">
        <div className="card-body">

          <div
            className="bg-danger text-white rounded-circle d-flex 
                       align-items-center justify-content-center mx-auto"
            style={{ width: 80, height: 80 }}
          >
            <i className="fa fa-file-medical fa-2x" />
          </div>

          <h5 className="mt-3">Medical Reports</h5>
          <h2>320</h2>
          <span className="badge bg-danger">Critical: 5</span>

        </div>
      </div>
    </div>

  </div>

  {/* ================= TABLE ================= */}
  <div className="card shadow mt-5">

    <div className="card-header bg-success text-white text-start">
      <i className="fa fa-user-doctor me-2"></i>
      On Duty Doctors
    </div>

    <div className="card-body table-responsive">

      <table className="table table-hover align-middle text-center">

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
              <button className="btn btn-sm btn-primary me-2">
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
export default Dashboardrec;