import { useFormik } from 'formik';
import React, { useState } from 'react'
import { OtpSchema } from '../schemas';
import { postData } from '../APIConfig/ConfigAPI';
import { string } from 'yup';
import { Link } from 'react-router-dom';
import { errorAlert, successAlert, warningAlert } from '../Message/SweetAlert';



function Otpvarification() {

    const [Buttonvalue,setButtonvalue] = useState("Verify OTP");

    const [initialValues,setInitialValues] = useState({
      otp:""
    });
    const {values,errors,handleChange,handleBlur,handleSubmit,touched} = useFormik({
        initialValues:initialValues,
        validationSchema:OtpSchema,
        onSubmit: async(values)=>{
            var requestData = {
                Otp:String(values.otp)
            }
            const Apireponse = await postData("Authenticationapi/VerifyOtp",requestData);
            setButtonvalue("Please Wait...");
            try {
                if(Apireponse.status === "Ok")
                {
                    warningAlert(Apireponse.result,"User warking in 60 minutes session only, after that you need to login again.");
                    setInitialValues("Verify OTP");
                    console.log("Role is",Apireponse.role);

                    if(Apireponse.role === "Doctor")
                    {
                        localStorage.setItem("Tokenr",Apireponse.token);
                        setTimeout(() => {
                            window.location.href = "/Doctor/Dashboard";
                        },2000);
                    }
                    else if(Apireponse.role === "Receptionist")
                    {
                        localStorage.setItem("Tokenr",Apireponse.token);
                        setTimeout(() => {
                            window.location.href = "/Staff/Dashboard";
                        },2000);
                    }
                    else{
                         localStorage.setItem("Token",Apireponse.token);
                         setTimeout(() => {
                            window.location.href = "/Admin/Dashboard";
                        },2000);
                    }
                }
                else{
                   errorAlert(Apireponse.result);
                   setInitialValues("Verify OTP");
                }
            } catch (error) {
                errorAlert("Error occured",error);
                setInitialValues("Verify OTP");
            }
        }
    })
    
  return (
     <>
        <form className="col-md-4 mx-auto mt-5 p-3 border rounded" onSubmit={handleSubmit}>
            <h5 className="text-center mb-3">Admin Login OTP</h5><br/>
            <small className='text-center text-danger'>{errors.otp && touched.otp ? errors.otp : null}</small>
            
            <div className="d-flex justify-content-between mb-3">
                <input type="number" id='otp' name='otp' value={values.otp} onChange={handleChange} onBlur={handleBlur} className="form-control text-center" />
            </div>

            <button type='submit' disabled={Buttonvalue !== "Verify OTP"} className="btn btn-primary w-100">
               {Buttonvalue !== "Verify OTP" ? <i className="fa-solid fa-spinner fa-spin me-2"></i> : "Verify OTP"}
            </button>

            <div className='col-md-12 mt-3 text-center'>
                <h5>OTP is 60 Second valid&nbsp;<Link to="/">Back to Login</Link></h5>
            </div>
       </form>
     </>
  )
}
export default Otpvarification;