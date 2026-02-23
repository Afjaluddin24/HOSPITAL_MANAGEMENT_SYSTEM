import React from 'react'

 function Invoicerec() {
  return (
    <div className="container mt-4">
      <div className="card shadow mt-5">

        <div className="card-header bg-success text-white">
          <div className="row align-items-center">

            {/* Left Side - Logo + Title */}
            <div className="col-md-4 d-flex align-items-center">
            <img
                src="../Myimage/invoice.png"
                width={35}
                alt="Invoice Logo"
                className="me-2"
            />
            <h5 className="mb-0">Invoice</h5>
            </div>

            {/* Middle Empty */}
            <div className="col-md-4"></div>

            {/* Right Side - Plus Icon */}
            <div className="col-md-4 text-end">
               <button type="button" className='btn btn-info'><span className='text-white'><i className="fa-solid fa-plus fa-lg"></i> Patients</span></button>
            </div>

         </div>
        </div>


        <div className="card-body table-responsive">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <b>Invois No</b>
                        <input type='number' id='invois' name='invois'  className='form-control'/>
                    </div>
                    <div className="col-md-4 mb-2"></div>
                    <div className="col-md-4 mb-2">
                        <b>Date</b>
                        <input type='date' id='date' name='date'  className='form-control'/>
                    </div>
                     <div className="col-md-6 mb-2">
                        <b>Pasent Name</b>
                       <input type='text' id='Pasent' name='Pasent'  className='form-control'/>
                    </div>
                    <div className="col-md-6 mb-2">
                        <b>Phone No</b>
                        <input type='number' id='phone' name='phone'  className='form-control'/>
                    </div>

                    <div className="col-md-12 mt-2 mb-2">
                       <div className="row">
                          <div className="col-md-2">
                            <button type="submit" className='btn btn-success w-100'>Save</button>
                          </div>
                          <div className="col-md-2">
                             <button type="button" className='btn btn-danger w-100'>Clear</button>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Invoicerec;