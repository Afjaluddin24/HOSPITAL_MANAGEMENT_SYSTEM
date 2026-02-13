import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useEffect, useState } from 'react'
import { getData } from '../APIConfig/ConfigAPI';
import { jwtDecode } from 'jwt-decode';

function AvailableDoctor() {

    // 🔹 Stores all doctors from API (original data)
    const [allDoctors, setAllDoctors] = useState([]);

    // 🔹 Stores doctors after filtering by specialization
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    // 🔹 Stores unique specialization list for dropdown
    const [specializations, setSpecializations] = useState([]);

    // 🔹 Stores selected specialization value
    const [selectedSpec, setSelectedSpec] = useState("");

    // 🔹 Stores Admin Id from JWT
    const [Myid, setMyid] = useState(0);

    // 🔹 Fetch doctors list from API
    const getListDoctors = async (Id) => {
        try {
            const responseApi = await getData("Doctorapi/avlibalDoctors/" + Id);

            if (responseApi.status === "Ok") {

                // Save doctors data
                setAllDoctors(responseApi.result);

                // Initially show all doctors
                setFilteredDoctors(responseApi.result);

                // Extract unique specializations
                const uniqueSpecs = [
                    ...new Set(responseApi.result.map(d => d.specialization))
                ];
                setSpecializations(uniqueSpecs);

            } else {
                console.log("Error fetching doctors");
            }
        } catch (error) {
            console.log("Error fetching doctors:", error);
        }
    };

    // 🔹 Filter doctors based on specialization
    const Seacrhspecialization = (e) => {
        const value = e.target.value;
        setSelectedSpec(value);

        // If no specialization selected → show all doctors
        if (value === "") {
            setFilteredDoctors(allDoctors);
        } else {
            // Filter doctors by selected specialization
            const filtered = allDoctors.filter(
                d => d.specialization === value
            );
            setFilteredDoctors(filtered);
        }
    };

    // 🔹 Run once when component loads
    useEffect(() => {
        const Token = jwtDecode(localStorage.getItem("Tokena"));
        setMyid(Token.AdminId);
        getListDoctors(Token.AdminId);
    }, []);

    return (
        <div className="card shadow mt-5">

            {/* Header */}
            <div className="card-header text-white" style={{ background: "#0d6efd" }}>
                <i className="fa fa-user-doctor" /> Available Doctors
            </div>

            <div className="card-body table-responsive">

                {/* Specialization Dropdown */}
                <div className='col-md-4 mt-2 mb-4'>
                    <div className='input-group'>
                        <span className='input-group-text'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span>

                        <select
                            className='form-select'
                            value={selectedSpec}
                            onChange={Seacrhspecialization}
                        >
                            <option value="">--- select specialization ---</option>
                            {specializations.map((spec, index) => (
                                <option key={index} value={spec}>
                                    {spec}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Doctors Table */}
                <DataTable
                    value={filteredDoctors}
                    paginator
                    rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{ minWidth: '50rem' }}
                >

                    {/* Doctor Details */}
                    <Column
                        header="Details"
                        body={(data) => (
                            <>
                                <h5>{data.fullname}</h5>
                                <h6>{data.email}</h6>
                                <b>
                                    <i className="fa-solid fa-phone" style={{ color: "#0d6efd" }} />
                                    &nbsp;{data.phone}
                                </b>
                            </>
                        )}
                    />

                    <Column field="specialization" sortable header="Specialization" />
                    <Column field="qualification" sortable header="Qualification" />
                    <Column field="post" sortable header="Post" />
                    <Column field="available_time" sortable header="Shift Time" />

                    {/* Status */}
                    <Column
                        header="On Duty"
                        body={() => <b className='badge bg-success'>Available</b>}
                    />

                </DataTable>
            </div>
        </div>
    );
}

export default AvailableDoctor;
