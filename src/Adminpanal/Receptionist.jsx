import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { ReceptionistSchema } from '../schemas';
import { errorAlert, successAlert } from '../Message/SweetAlert';
import { getData, postData } from '../APIConfig/ConfigAPI';
import { jwtDecode } from 'jwt-decode';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

 function Receptionist() {

    const [ Buttonvalues, setButtonvalues ] = useState("Save");
    const [ReceptionistDetails, setReceptionistDetails ] = useState([]);
    const [AdminId, setAdminId] = useState(0);
    const initialValues ={
        username:"",
        email:"",
        phone:"",
        shift_time:"",
        address:"",
        AdminId:0,
    }


    const {values,errors,handleChange,handleBlur,handleSubmit,touched} = useFormik({
        initialValues:initialValues,
        validationSchema:ReceptionistSchema,
        onSubmit:async (values) =>{
           var requestData ={
              AdminId:AdminId,
              username:values.username,
              email:values.email,
              phone:String(values.phone),
              shift_time:values.shift_time,
              address:values.address
           }
           console.log("Request Data",requestData);
           setButtonvalues("Please Wait...");
           try {
                const Apiresponse = await postData("Receptionistapi/AddReceptionist",requestData);
                if(Apiresponse.status === "Ok")
                {
                    successAlert(Apiresponse.result);
                    setButtonvalues("Save");
                    ReceptionsList();
                }
                else{
                    errorAlert(Apiresponse.result);
                    setButtonvalues("Save");
                }
           } catch (error) {
             errorAlert("Error occured",error);
             setButtonvalues("Save");
           }
        },

    })


    const ReceptionsList = async () =>{
        var responseAPI =await getData(`Receptionistapi/Receptionist/${AdminId}`);
        try {
            if(responseAPI.status === "Ok")
            {
                const data = responseAPI.result;
                console.log("Receptionist List",data);
                setReceptionistDetails(data.result);
            }
            else{
                errorAlert(responseAPI.result);
            }
        } catch (error) {
            errorAlert("Error occured",error.result);
        }
    }


    useEffect(() => {
    var Token = jwtDecode(localStorage.getItem("Token"));
    var AdminId = Token.AdminId;
    setAdminId(AdminId);

    ReceptionsList(); 
}, []);

  return (
    <div className="container-fluid mt-4">
            <div className="card shadow mt-5">
                <div className="card-header text-white" style={{ background: "#0d6efd" }}>
                 <img src="../Myimage/receptionist.png"  width={35} alt="Not Found" /> New Reception
                </div>
                <div className="card-body table-responsive">
                 <form onSubmit={handleSubmit} method="post">
                     <table className="table table-striped align-middle">
                    <tr>
                        <th></th>
                        <td>
                           <div className='row'>
                              <div className='col-md-4 mt-2'>
                                <b>User Name <small className="text-danger">{errors.username && touched.username ? errors.username : null}</small></b>
                                   <input type="text" id='username' name='username' value={values.username} onChange={handleChange} onBlur={handleBlur} className='form-control' placeholder='Receptionist Name'/>
                               </div>
    
                               <div className='col-md-4 mt-2'>
                                 <b>Email <small className='text-danger'>{errors.email && touched.email ? errors.email : null}</small></b>
                                   <input type="text" id='email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} className='form-control' placeholder='Receptionist Email'/>
                                </div>
                                <div className='col-md-4 mt-2'>
                                   <b>Phone No <small className='text-danger'>{errors.phone && touched.phone ? errors.phone : null}</small></b>
                                   <input type="text" id='phone' name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} className='form-control' placeholder='Receptionist Phone'/>
                                </div>
                                <div className="col-md-4 mt-2">
                                 <b>Shift Time <small className="text-danger">{errors.shift_time && touched.shift_time ? errors.shift_time : null}</small></b>
                                    <select id="shift_time" name="shift_time" value={values.shift_time} onChange={handleChange} onBlur={handleBlur} className="form-select">
                                        <option value="">-- Select Shift Time --</option>
                                        <option value="Morning">Morning</option>
                                        <option value="Evening">Evening</option>
                                        <option value="Night">Night</option>
                                    </select>
                                </div>
    
                                <div className='col-md-4 mt-2'>
                                 <b>Address <small className="text-danger">{errors.address && touched.address ? errors.address : null}</small></b>
                                   <textarea
                                        id="address"
                                        name="address"
                                        rows={1}
                                        value={values.address}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="form-control"
                                        placeholder="Receptionist Address">
                                    </textarea>
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
                     
                     <DataTable value={ReceptionistDetails} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                                    <Column field="receptionist_id" header="#" />
                                    <Column field="fullname" header="Full Name" />
                                    <Column field="gender" header="Gender" />
                                    <Column field="shift_time" header="Shift Time" />
                                    <Column field="specialization" header="Specialization" />
                                    <Column field="address" header="Address" />
                                    <Column field="post" header="Post" />
                                    {/* Date column with dd/mm/yyyy format */}
                                    <Column
                                        header="Created Date"
                                        body={(rowData) => {
                                        const date = new Date(rowData.created_at);
                                        return date.toLocaleDateString("en-GB"); // dd/mm/yyyy
                                        }}
                                    />
                    </DataTable>
                </div>
            </div>
        </div>
  )
}
export default Receptionist