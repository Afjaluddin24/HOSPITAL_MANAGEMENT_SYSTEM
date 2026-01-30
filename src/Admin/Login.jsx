import { useFormik } from 'formik'
import React, { useState } from 'react'
import { LoginSchema } from '../schemas';
import axios from 'axios';
import { postData } from '../APIConfig/ConfigAPI';

const initialValues ={
   Role:"",
   username:"",
   password:""
};
function Login() {

  const [Buttonvalue,setButtonvalue] = useState("Login");

  const {values,errors,handleBlur,handleChange,handleSubmit,touched} = useFormik({
   initialValues:initialValues,
   validationSchema:LoginSchema,

   onSubmit: async(values) =>{
      if(values.Role == "Admin")
      {
        var requestData ={
          // Role:values.Role,
          username:values.username,
          password:values.password
        }
        setButtonvalue("Please Wait...");
        console.log('Data is',requestData);
        try {
          const Apiresponse = await postData("Adminapi/Authenticate",requestData)
          // console.log('Response is',Apiresponse);
          if(Apiresponse.status === "Ok")
          {
             alert(Apiresponse.result);
             setTimeout(() => {
                window.location.href = "/Verification"
             }, 2000);
             setButtonvalue("Login");
          }
          else{
            alert(Apiresponse.result);
            setButtonvalue("Login");
          }
        } catch (error) {
          console.log("Error occured",error);
          setButtonvalue("Login");
        }
        
      }
      else if(values.Role == "Doctor")
      {
        var requestData ={
          username:values.username,
          password:values.password
        }
        console.log('Data is',requestData);
      }
       else if(values.Role == "Receptionist")
      {
        var requestData ={
          username:values.username,
          password:values.password
        }
        console.log('Data is',requestData);
      }
   }
})

  return (
    <div
  className="vh-100 d-flex justify-content-center align-items-center"
  style={{
    backgroundImage:
      'url("https://images.unsplash.com/photo-1586773860418-d37222d8fce3")',
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
  {/* Login Form Container */}
  <div
    className="bg-white p-5 rounded shadow"
    style={{ maxWidth: 400, width: "100%" }}
  >
    <h2 className="text-center mb-4">Login</h2>
    <form onSubmit={handleSubmit} method="post">
      <div className="mb-3">
        <b htmlFor="loginRole" className="form-label">
          Select Role <label className='text-danger'>{errors.loginRole && touched.loginRole ? errors.loginRole:null}</label>
        </b>
        &nbsp;
        <label id="lblrole" className="text-danger" />
        <select className="form-select" 
          id="Role"
          name="Role" 
          value={values.Role}
          onBlur={handleBlur} 
          onChange={handleChange}>
            <option value="" selected="" disabled="">
              Select your role 
            </option>
            <option value="Admin">Admin</option>
            <option value="Doctor">Doctor</option>
            <option value="Receptionist">Receptionist</option>
        </select>
      </div>
      {/* Username */}
      <div className="mb-3">
        <b htmlFor="username" className="form-label">
          Username <label className='text-danger'>{errors.username && touched.username ? errors.username:null}</label>
        </b>
        &nbsp;
        <label id="lbluser" className="text-danger" />
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={values.username}
          onBlur={handleBlur} 
          onChange={handleChange}
          placeholder="Enter Username"
        />
      </div>
      {/* Password */}
      <div className="mb-3">
        <b htmlFor="password" className="form-label">
          Password <label className='text-danger'>{errors.password && touched.password ? errors.password :null}</label>
        </b>
        &nbsp;
        <label id="lblpassword" className="text-danger" />
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={values.password}
          onBlur={handleBlur} 
          onChange={handleChange}
          placeholder="Enter Password"
        />
      </div>
      {/* Login Button */}
      <div className="d-grid">
        <button type="submit" id="Login" disabled={Buttonvalue !== "Login"} className="btn btn-primary">
          {Buttonvalue !== "Login"? <i className="fa-solid fa-spinner fa-spin me-2"></i>:"Login"}
        </button>
      </div>
      {/* Optional Links */}
      <div className="mt-3 text-center">
        <a href="#">Forgot Password?</a>
      </div>
    </form>
  </div>
</div>

  )
}
export default Login 