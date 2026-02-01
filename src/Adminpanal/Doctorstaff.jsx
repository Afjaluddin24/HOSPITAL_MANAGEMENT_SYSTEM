import React, { useState } from 'react'

 function Doctorstaff() {
    const [ Buttonvalues, setButtonvalues ] = useState("Save");

    // password bacned code api inset time sne maile now 
  return (
    <div className="container-fluid mt-4">
        <div className="card shadow mt-5">
            <div className="card-header text-white" style={{ background: "#0d6efd" }}>
            <i className="fa fa-user-doctor" /> New Doctor
            </div>
            <div className="card-body table-responsive">
            <table className="table table-striped align-middle">
                <tr>
                    <th></th>
                    <td>
                       <div className='row'>
                          <div className='col-md-4 mt-2'>
                            <b>User Name</b>
                               <input type="text" id='name' name='name' className='form-control' placeholder='Doctor Name'/>
                           </div>

                           <div className='col-md-4 mt-2'>
                             <b>Department</b>
                               <input type="text" id='department' name='department' className='form-control' placeholder='Doctor Department'/>
                            </div>

                            <div className="col-md-4 mt-2">
                             <b>Specialization</b>
                                <select id="specialization" name="specialization" className="form-control">
                                    <option value="">-- Select Specialization --</option>
                                    <option value="Cardiology">Cardiology</option>
                                    <option value="Neurology">Neurology</option>
                                    <option value="Orthopedics">Orthopedics</option>
                                    <option value="Pediatrics">Pediatrics</option>
                                    <option value="Dermatology">Dermatology</option>
                                    <option value="Gynecology">Gynecology</option>
                                    <option value="Oncology">Oncology</option>
                                    <option value="Psychiatry">Psychiatry</option>
                                    <option value="Radiology">Radiology</option>
                                    <option value="ENT">ENT (Ear, Nose, Throat)</option>
                                    <option value="Ophthalmology">Ophthalmology</option>
                                    <option value="Urology">Urology</option>
                                    <option value="Nephrology">Nephrology</option>
                                    <option value="Gastroenterology">Gastroenterology</option>
                                    <option value="Pulmonology">Pulmonology</option>
                                    <option value="Anesthesiology">Anesthesiology</option>
                                    <option value="General Medicine">General Medicine</option>
                                    <option value="General Surgery">General Surgery</option>
                                </select>
                            </div>

                            <div className='col-md-4 mt-2'>
                             <b>Qualification</b>
                               <input type="text" id='qualification' name='qualification' className='form-control' placeholder='Doctor Specialization'/>
                            </div>

                            <div className='col-md-4 mt-2'>
                             <b>Email</b>
                               <input type="text" id='email' name='email' className='form-control' placeholder='Doctor Email'/>
                            </div>

                            <div className='col-md-4 mt-2'>
                             <b>Phone</b>
                               <input type="text" id='phone' name='phone' className='form-control' placeholder='Doctor Phone'/>
                            </div>

                            <div className='col-md-12 mt-3'>
                                <button type='submit' disabled={Buttonvalues !== "Save"} className='btn btn-primary'>
                                  {Buttonvalues !== "Save" ? <i className="fa fa-spinner fa-spin"></i> : "Save"}
                                 </button>
                            </div>
                        </div>
                    </td>
                    
                </tr>
            </table>
            </div>
        </div>
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
export default Doctorstaff;