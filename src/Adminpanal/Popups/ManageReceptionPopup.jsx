import { useFormik } from 'formik'
import React from 'react'
import { RepMeangeSchema } from '../../schemas';

 function ManageReceptionPopup(props) {

   
  const {values,errors,handleBlur,handleChange,handleSubmit,touched} = useFormik({
    enableReinitialize:true,
    initialValues:props.initialValues,
    validationSchema:RepMeangeSchema,
    onSubmit:async(values) =>{
       var requestData ={
          receptionist_id:props.respId,
          shift_time:values.shift_time,
          department:values.department
       }
       console.log("Data is",requestData);
    }
  })
  return (
     <>
        {/* Modal */}
        <div className={props.show ? "modal show" : "modal"} style={props.show ? { display: "block" } : null} id="SupplieraddModal">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-between align-items-center">
                    <h5 className="modal-title">Reception Shift</h5>
                    <i className="fa-solid fa-xmark" style={{ fontSize: 20, cursor: "pointer" }} onClick={() => props.setShow(false)}></i>
                    </div>

                    {/* Modal Body */}
                    <div className="modal-body">
                      <div className="col-md-12">
                         <form  onSubmit={handleSubmit} className="row">
                             <div className="col-md-4 mt-2">
                                <b>Full name<span className='text-danger'></span></b>
                                <input type="text" name="username" id="username" className='form-control' readOnly value={values.username} onBlur={handleBlur} onChange={handleChange}  />
                             </div>
                             <div className="col-md-4 mt-2"></div>
                             <div className="col-md-4 mt-2">
                                 <b>Join Date<span className='text-danger'></span></b>
                                 <input type="text" name="created_at" id="created_at" className='form-control' readOnly value={values.created_at} onBlur={handleBlur} onChange={handleChange} />
                             </div>
                             <div className="col-md-6 mt-2">
                                <b>Shift Time <small className="text-danger">{errors.shift_time && touched.shift_time ? errors.shift_time : null}</small></b>
                                    <select id="shift_time" name="shift_time" value={values.shift_time} onChange={handleChange} onBlur={handleBlur} className="form-select">
                                        <option value="Morning">Morning</option>
                                        <option value="Evening">Evening</option>
                                        <option value="Night">Night</option>
                                    </select>
                             </div>
                             <div className="col-md-6 mt-2">
                                <b>Reception Post<small className='text-danger'> {errors.department && touched.department ? errors.department : null}</small></b>
                                    <select 
                                        name="department" 
                                        id='department'
                                        className="form-select"
                                        value={values.department}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        <option value="Lab Receptionist">Lab Receptionist</option>
                                        <option value="OPD Receptionist">OPD Receptionist</option>
                                        <option value="Emergency Receptionist">Emergency Receptionist</option>
                                        <option value="Front Desk Executive">Front Desk Executive</option>
                                        <option value="Billing Receptionist">Billing Receptionist</option>
                                        <option value="Admission Desk">Admission Desk</option>
                                    </select>
                             </div>
                             <div className="col-md-2 mt-3 mb-3">
                                <button type="submit" className='btn btn-primary w-100'>Save</button>
                             </div>
                         </form>
                      </div>
                    </div>

                </div>
            </div>
        </div>
        {props.show ? <div className="modal-backdrop show"></div> : null}
    </>

  )
}
export default ManageReceptionPopup