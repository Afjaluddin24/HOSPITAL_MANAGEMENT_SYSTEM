import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Patientchema } from '../schemas';
import { string } from 'yup';

 function Patientrec() {
  const [Buttonvalue,setButtonvalue] = useState("Save");
  const [initialValues,setinitialValues] = useState({
     fullname:"",
     Email:"",
     phone:"",
     age:"",
     gender:"",
     Adress:""
  });

  const {values,errors,handleBlur,handleChange,touched,handleSubmit,resetForm}  =  useFormik({
     initialValues:initialValues,
     validationSchema:Patientchema,
     onSubmit:async(values) =>{
       var requestdata ={
         receptionist_id:6,
         fullname:values.fullname,
         address:values.Adress,
         Email:values.Email,
         phone:string(values.phone),
         age:values.age,
         gender:values.gender
       }
       console.log(requestdata);
       setButtonvalue("Paslis waite...")
     }
  })  

  useEffect(()=>{

  },[])
  return ( 
    <>
    <div className="container mt-4">
      <div className="card shadow mt-5">
        <div className="card-header bg-success text-white text-start">
           <img src="../Myimage/patients.png" alt="Imags not found" width={30} />&nbsp;
           Add Patients
        </div>
        <div className="card-body table-responsive">
            <form onSubmit={handleSubmit} className="col-md-12">
                <div className="row">
                    <div className="col-md-6 mt-2">
                        <b>fullname<label htmlFor="" className='text-danger'>{errors.fullname && touched.fullname ? errors.fullname :null}</label></b>
                        <input type="text" name="fullname" id="fullname" value={values.fullname} onBlur={handleBlur} onChange={handleChange} className='form-control' />
                    </div>
                    <div className="col-md-6 mt-2">
                        <b>Email<label htmlFor="" className='text-danger'> {errors.Email && touched.Email ? errors.Email :null}</label></b>
                        <input type="email" name="Email" id="Email" value={values.Email} onBlur={handleBlur} onChange={handleChange} className='form-control' />
                    </div>
                    <div className="col-md-4 mt-2">
                        <b>Phone<label htmlFor="" className='text-danger'>{errors.phone && touched.phone ? errors.phone :null}</label></b>
                        <input type="number" name="phone" id="phone" value={values.phone} onBlur={handleBlur} onChange={handleChange} className='form-control' />
                    </div>
                      <div className="col-md-4 mt-2">
                        <b>Age<label htmlFor="" className='text-danger'>{errors.age && touched.age ? errors.age :null}</label></b>
                        <input type="number" name="age" id="age" value={values.age} onBlur={handleBlur} onChange={handleChange} className='form-control' />
                    </div>
                    <div className="col-md-4 mt-2">
                        <b>Gender<label htmlFor="" className='text-danger'>{errors.gender && touched.gender ? errors.gender :null}</label></b>
                        <select name="gender" value={values.gender} onBlur={handleBlur} onChange={handleChange} id="gender" className='form-select'>
                            <option value="">---Select gender---</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                     <div className="col-md-4 mt-2">
                        <b>Adress<label htmlFor="" className='text-danger'>{errors.Adress && touched.Adress ? errors.Adress :null}</label></b>
                        <textarea name="Adress" id="Adress" value={values.Adress} onBlur={handleBlur} onChange={handleChange} className='form-control' role='2'></textarea>
                    </div>
                    <div className="col-md-12 mt-2 mb-2">
                       <div className="row">
                         <div className="col-md-2 mt-3 mb-2">
                          <button type="submit" disabled={Buttonvalue !== "Save"} className='btn btn-success w-100'>
                             {Buttonvalue !== "Save" ? <i className="fa-solid fa-spinner fa-spin me-2"></i> : "Save"}  
                          </button>&nbsp;&nbsp;
                       </div>
                       <div className="col-md-2 mt-3 mb-2">
                          <button type="button" className='btn btn-danger w-100' onClick={() => resetForm()}>clear</button>
                       </div>
                       </div>
                    </div>
                </div>
            </form>
        </div>
      </div>
    </div>
    </>
 )
}
export default Patientrec;