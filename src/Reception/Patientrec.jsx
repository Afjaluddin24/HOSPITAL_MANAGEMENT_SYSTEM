import { useFormik } from 'formik';
import React from 'react'

 function Patientrec() {
  
  const {values,errors,handleBlur,handleChange,touched}  =  useFormik({

  })  
  return ( 
    <>
    <div className="container mt-4">
      <div className="card shadow mt-5">
        <div className="card-header bg-success text-white text-start">
        <i className="fa fa-user-doctor me-2"></i>
           Add Patients
        </div>
        <div className="card-body table-responsive">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-6 mt-2">
                        <b>fullname<label htmlFor="" className='text-danger'></label></b>
                        <input type="text" name="fullname" id="fullname" className='form-control' />
                    </div>
                    <div className="col-md-6 mt-2">
                        <b>Email<label htmlFor="" className='text-danger'></label></b>
                        <input type="email" name="Email" id="Email" className='form-control' />
                    </div>
                    <div className="col-md-4 mt-2">
                        <b>phone<label htmlFor="" className='text-danger'></label></b>
                        <input type="number" name="phone" id="phone" className='form-control' />
                    </div>
                      <div className="col-md-4 mt-2">
                        <b>age<label htmlFor="" className='text-danger'></label></b>
                        <input type="number" name="age" id="age" className='form-control' />
                    </div>
                    <div className="col-md-4 mt-2">
                        <b>gender<label htmlFor="" className='text-danger'></label></b>
                        <input type="text" name="gender" id="gender" className='form-control' />
                    </div>
                     <div className="col-md-4 mt-2">
                        <b>Adress<label htmlFor="" className='text-danger'></label></b>
                        <textarea name="Adress" id="Adress" className='form-control' role='2'></textarea>
                    </div>
                    <div className="col-md-12 mt-2 mb-2">
                       <div className="row">
                         <div className="col-md-2 mt-3 mb-2">
                          <button type="submit" className='btn btn-success w-100'>Save</button>&nbsp;&nbsp;
                       </div>
                       <div className="col-md-2 mt-3 mb-2">
                          <button type="button" className='btn btn-danger w-100'>clear</button>
                       </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
 )
}
export default Patientrec;