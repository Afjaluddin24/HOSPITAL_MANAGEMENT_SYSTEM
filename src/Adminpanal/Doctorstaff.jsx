import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { DoctorSchema } from '../schemas';
import { errorAlert, successAlert } from '../Message/SweetAlert';
import { postData } from '../APIConfig/ConfigAPI';
import { jwtDecode } from 'jwt-decode';

 function Doctorstaff() {
    const [ Buttonvalues, setButtonvalues ] = useState("Save");
    const [ MyId, setMyId ] = useState(0);
    
    const initialValues ={
        name:"",
        department:"",
        specialization:"",
        qualification:"",
        email:"",
        phone:""
    };

    const {values,errors,handleBlur,handleChange,handleSubmit,touched} = useFormik({
        initialValues:initialValues,
        validationSchema:DoctorSchema,
        onSubmit : async(values) =>{
         var requestData ={
            AdminId:MyId,
            username:values.name,
            deprtment:values.department,
            specialization:values.specialization,
            qualification:values.qualification,
            Email:values.email,
            phone:String(values.phone)
          }
          setButtonvalues("Please Wait...");
          console.log("Request Data",requestData);
          try {
             const Apiresponse =await postData("Doctorapi/newDoctor",requestData);
             if(Apiresponse.status === "Ok")
             {
                 successAlert(Apiresponse.result);
                 setButtonvalues("Save");
             }
             else{
                errorAlert(Apiresponse.result);
                setButtonvalues("Save");
             }
          } catch (error) {
            errorAlert("Error occured",error);
            setButtonvalues("Save");
          }
        }
    })

    useEffect(() => {
       var Token = jwtDecode(localStorage.getItem("Token"));
       var AdminId = Token.AdminId;
       setMyId(AdminId);
    }, []);

  return (
    <div className="container-fluid mt-4">
        <div className="card shadow mt-5">
            <div className="card-header text-white" style={{ background: "#0d6efd" }}>
            <i className="fa fa-user-doctor" /> New Doctor
            </div>
            <div className="card-body table-responsive">
             <form onSubmit={handleSubmit} method="post">
                 <table className="table table-striped align-middle">
                <tr>
                    <th></th>
                    <td>
                       <div className='row'>
                          <div className='col-md-4 mt-2'>
                            <b>User Name <small className="text-danger">{errors.name && touched.name ? errors.name : null}</small></b>
                               <input type="text" id='name' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} className='form-control' placeholder='Doctor Name'/>
                           </div>

                           <div className='col-md-4 mt-2'>
                             <b>Department <small className='text-danger'>{errors.department && touched.department ? errors.department : null}</small></b>
                               <input type="text" id='department' name='department' value={values.department} onChange={handleChange} onBlur={handleBlur} className='form-control' placeholder='Doctor Department'/>
                            </div>

                            <div className="col-md-4 mt-2">
                             <b>Specialization <small className="text-danger">{errors.specialization && touched.specialization ? errors.specialization : null}</small></b>
                                <select id="specialization" name="specialization" value={values.specialization} onChange={handleChange} onBlur={handleBlur} className="form-control">
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
                             <b>Qualification <small className="text-danger">{errors.qualification && touched.qualification ? errors.qualification : null}</small></b>
                               <input type="text" id='qualification' name='qualification' value={values.qualification} onChange={handleChange} onBlur={handleBlur} className='form-control' placeholder='Doctor Qualification'/>
                            </div>

                            <div className='col-md-4 mt-2'>
                             <b>Email <small className="text-danger">{errors.email && touched.email ? errors.email : null}</small></b>
                               <input type="text" id='email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} className='form-control' placeholder='Doctor Email'/>
                            </div>

                            <div className='col-md-4 mt-2'>
                             <b>Phone <small className="text-danger">{errors.phone && touched.phone ? errors.phone : null}</small></b>
                               <input type="number" id='phone' name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} className='form-control' placeholder='Doctor Phone'/>
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
             </form>
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