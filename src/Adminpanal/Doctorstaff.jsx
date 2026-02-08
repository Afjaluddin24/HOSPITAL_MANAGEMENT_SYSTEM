import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { DoctorSchema } from '../schemas';
import { errorAlert, successAlert } from '../Message/SweetAlert';
import { getData, postData } from '../APIConfig/ConfigAPI';
import { jwtDecode } from 'jwt-decode';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

 function Doctorstaff() {
    const [ Buttonvalues, setButtonvalues ] = useState("Save");
    const [ MyId, setMyId ] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [DoctorDetails, setDoctorDetails ] = useState([]);
    
    const initialValues ={
        name:"",
        department:"",
        specialization:"",
        qualification:"",
        email:"",
        phone:""
    };

    const {values,errors,handleBlur,handleChange,handleSubmit,touched,resetForm} = useFormik({
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
                 getDoctorDetails();
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

   const getDoctorDetails = async (Id) =>{
     const respons = await getData(`Doctorapi/getDoctors/${Id}`);
     try {
        if(respons.status === "Ok")
        {
            console.log("data is",respons.result);
            setDoctorDetails(respons.result);
        }
        else{
            console.log("error",respons.result);
        }
     } catch (error) {
        console.log("error is");
     }
   }

   const sendWhatsAppMessage = (phone) => {
        const message =
                  "City Hospital:\nPlease update your profile details in your account.\nThank you.";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
  };

  const Chearhendel = (e) =>{
     setSearchText(e.target.value);
  }

  const filteredDoctors = DoctorDetails.filter((item) =>
          item.fullname?.toLowerCase().includes(searchText.toLowerCase())
  );


    useEffect(() => {
       const decodedToken = jwtDecode(localStorage.getItem("Token"));
       console.log(decodedToken);
       setMyId(decodedToken.AdminId);

       getDoctorDetails(decodedToken.AdminId);
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
                                 </button>&nbsp;&nbsp;
                                 <button type='button' onClick={() => resetForm()} className='btn btn-danger'>Clear</button>
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
             <div className=" col-md-5 mb-3">
                <div className="input-group">
                    <span className="input-group-text">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Doctor"
                        onKeyUp={(e) => Chearhendel(e)}
                    />
                </div>
            </div>

             <DataTable value={filteredDoctors} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column  header="Details" body={(data) =>
                    <>
                       <h5>{data.fullname}</h5>
                       <h6>{data.email}</h6>
                       <b><i className="fa-solid fa-phone" style={{color: "#0d6efd"}}></i>&nbsp;{data.phone}</b>
                    </>
                } />
                <Column field="specialization" sortable header="Specialization" />
                <Column field="qualification" sortable header="Qualification" />
                <Column field="post" sortable header="Post" />
                 <Column field="available_time" sortable header="Sheef Time" />
                {/* Date column with dd/mm/yyyy format */}
                <Column
                    header="Created Date"
                    body={(rowData) => {
                    const date = new Date(rowData.created_at);
                    return date.toLocaleDateString("en-GB"); // dd/mm/yyyy
                    }}
                />
                <Column
                    header="Message"
                    body={(rowData) => (
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <i
                                className="fa-brands fa-whatsapp"
                                style={{
                                    fontSize: "1.5rem",
                                    color: "#25D366",
                                    cursor: "pointer"
                                }}
                                onClick={() => sendWhatsAppMessage(rowData.phone)}
                            />
                        </div>
                   )}
                />
                <Column header="Action" body={(rowData) => (
                  <i class="fa-solid fa-pen-to-square fa-xl"></i>
                )} />
             </DataTable>
            </div>
        </div>
    </div>
  )
}
export default Doctorstaff;