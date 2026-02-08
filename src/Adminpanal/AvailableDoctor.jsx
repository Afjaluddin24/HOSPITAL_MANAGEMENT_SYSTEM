import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useEffect, useState } from 'react'
import { getData } from '../APIConfig/ConfigAPI';
import { jwtDecode } from 'jwt-decode';

 function AvailableDoctor() {
    const [avlibaleDoctors, setAvlibaleDoctors] = useState([]);
    const [Myid, setMyid] = useState(0);

    const getListDoctors = async (Id) => {
        const response = await getData("Doctorapi/avlibalDoctors/" + Id);
        try {
            if (response.status === "Ok") {
                setAvlibaleDoctors(response.result);
                console.log("Doctors fetched successfully:", response.result);
            } else {
                console.log("Error fetching doctors:", response.message);
            }
        } catch (error) {
            console.log("Error fetching doctors:", error);
        }
    }


    useEffect(()=>{
        const Tocane = jwtDecode(localStorage.getItem("Token"));
        setMyid(Tocane.AdminId);
        getListDoctors(Tocane.AdminId);
    },[])
    return (
        <div className="card shadow mt-5">
            <div className="card-header text-white" style={{ background: "#0d6efd" }}>
                 <i className="fa fa-user-doctor" /> Available Doctors
             </div>
             <div className="card-body table-responsive">
                  <DataTable value={avlibaleDoctors} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
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
                       <Column  body={<>
                                           <b className='badge bg-success'>Available</b>
                                     </>} 
                       header="On Deaty" />
                   </DataTable>
           </div>
    </div>
    )
}

export default AvailableDoctor