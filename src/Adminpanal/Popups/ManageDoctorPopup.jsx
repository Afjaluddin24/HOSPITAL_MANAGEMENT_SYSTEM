import { useFormik } from 'formik'
import React from 'react'
import { ShifSchema } from '../../schemas'

 function ManageDoctorPopup(props) {

   const initialValues ={
      deprtment:"",
      post:"",
      Shift_time:""
   };

   const {values,errors,handleBlur,handleChange,handleReset,handleSubmit,touched} = useFormik({
       enableReinitialize:true,
       initialValues:initialValues,
       validationSchema:ShifSchema,
       onSubmit:(values) =>{
          var requestdata ={
             doctor_id:props.DoctorId,
             deprtment:values.deprtment,
             post:values.post,
             Shift_time:values.Shift_time
          } 
          console.log("data is",requestdata);
       }

   })
  return (
       <>
  {/* Modal */}
  <div className={props.show ? "modal show" : "modal"} style={props.show ? { display: "block" } : null} id="SupplieraddModal">
    <div className="modal-dialog modal-lg">
        <div className="modal-content">
            <div className="modal-header d-flex justify-content-between align-items-center">
               <h5 className="modal-title">Doctor Shift Times</h5>
               <i className="fa-solid fa-xmark" style={{ fontSize: 20, cursor: "pointer" }} onClick={() => props.setShow(false)}></i>
            </div>
                
            <form onSubmit={handleSubmit} className="modal-body">
                <div className='col-md-12'>
                    <div className="row">
                        <div className="col-md-12 mb-2">
                            <b>Fullname <label htmlFor="" className='text-daner'></label></b>
                             <input type="text" className='form-control' name="fullname" value={props.name} id="fullname" />
                        </div>
                         <div className="col-md-4 mb-2">
                            <b>Deprtment <label htmlFor="" className='text-danger'>{errors.deprtment && touched.deprtment ? errors.deprtment : null}</label></b>
                             <input type="text" className='form-control' name="deprtment" id="deprtment" value={values.deprtment} onBlur={handleBlur} onChange={handleChange} />
                        </div>
                         <div className="col-md-4 mb-2">
                            <b>Post <label htmlFor="" className='text-danger'>{errors.post && touched.post ? errors.post : null}</label></b>
                             <input type="text" className='form-control' name="post" id="post" value={values.post} onBlur={handleBlur} onChange={handleChange}   />
                        </div>
                        <div className="col-md-4 mb-2">
                            <b>Shift Time <label htmlFor="" className='text-danger'>{errors.Shift_time && touched.Shift_time ? errors.Shift_time : null}</label></b>
                            <select name="Shift_time" id="Shift_time" value={values.Shift_time} onBlur={handleBlur} onChange={handleChange}  className='form-select'>
                                <option value="">---select Shift Time---</option>
                                <option value="Day">Day Shift</option>
                                <option value="Night">Night Shift</option>
                            </select>
                        </div>
                        <div className='col-md-2 mb-2 mt-3'>
                            <button type="submit" className='btn btn-primary w-100'>Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  </div>
  {props.show ? <div className="modal-backdrop show"></div> : null}
</>
  )
}
export default ManageDoctorPopup