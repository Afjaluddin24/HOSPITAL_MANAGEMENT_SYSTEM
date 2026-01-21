import { useFormik } from 'formik'
import React from 'react'
import { ContactSchema } from '../schemas'

const initialValues ={
  Fname:"",
  Phone:"",
  Email:"",
  Address:""
}

function Contact() {
 
  const {values,errors,handleBlur,handleChange,handleSubmit,touched} = useFormik({
    initialValues:initialValues,
    validationSchema:ContactSchema,
    onSubmit:(values) =>{
       console.log(values);
    }
  })

  return (
   <div className="container mt-5">
  {/* Heading */}
  <div className="text-center mb-4">
    <h2 className=" ">Contact</h2>
  </div>
  <div className="row">
    {/* Form Card */}
    <div className="col-md-6 mb-3">
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title text-success mb-3">Contact Form</h5>
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="mb-3">
              <label className="form-label">Full Name  <b className='text-danger' style={{fontSize:"20px"}}>{errors.Fname && touched.Fname ? errors.Fname:null}</b></label>
              <input
                type="text"
                id="Fname"
                name="Fname"
                value={values.Fname}
                onBlur={handleBlur}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter full name"
              />
            </div>
            {/* Phone Number */}
            <div className="mb-3">
              <label className="form-label">Phone Number  <b className='text-danger' style={{fontSize:"20px"}}>{errors.Phone && touched.Phone ? errors.Phone:null}</b></label>
              <input
                type="number"
                id="Phone"
                name="Phone"
                value={values.Phone}
                onBlur={handleBlur}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter phone number"
              />
            </div>
            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email <b className='text-danger' style={{fontSize:"20px"}}>{errors.Email && touched.Email ? errors.Email:null}</b></label>
              <input
                type="email"
                id="Email"
                name="Email"
                value={values.Email}
                onBlur={handleBlur}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            {/* Address */}
            <div className="mb-3">
              <label className="form-label">Address <b className='text-danger' style={{fontSize:"20px"}}>{errors.Address && touched.Address ? errors.Address:null}</b></label>
              <textarea
                className="form-control"
                rows={3}
                id="Address"
                name="Address"
                value={values.Address}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter address"
                defaultValue={""}
              />
            </div>
            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    {/* Google Map */}
    <div className="col-md-6 mb-3">
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title text-danger">Kervada Location Map</h5>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps?q=Kervada,Gujarat,India&output=embed"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}
export default Contact