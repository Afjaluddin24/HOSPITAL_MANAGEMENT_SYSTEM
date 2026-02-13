import React, { useEffect, useState } from 'react'
import { getData } from '../APIConfig/ConfigAPI'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { jwtDecode } from 'jwt-decode'

function Doctorslists() {

    // Search text
    const [searchDoctors, setSearchDoctors] = useState("")

    // Original doctors list
    const [Doctorslist, setDoctorslist] = useState([])

    // Filtered list for DataTable
    const [filteredDoctors, setFilteredDoctors] = useState([])

    // Date filters
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    const [MyID, setMyID] = useState(0)

    // Get doctors from API
    const DisplayDoctors = async (Id) => {
        const Apiresponse = await getData("Doctorapi/getDoctors/" + Id)

        if (Apiresponse.status === "Ok") {
            setDoctorslist(Apiresponse.result)      // store original data
            setFilteredDoctors(Apiresponse.result) // show all initially
        }
    }

    // Search handler
    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase()
        setSearchDoctors(value)

        const result = Doctorslist.filter(item =>
            item.fullname?.toLowerCase().includes(value)
        )

        setFilteredDoctors(result)
    }

    // Date filter button
    const filterByDate = () => {
        const result = Doctorslist.filter(item => {
            const d = new Date(item.created_at)

            return (
                (!startDate || d >= new Date(startDate)) &&
                (!endDate || d <= new Date(endDate))
            )
        })

        setFilteredDoctors(result)
    }

    // Load data on page load
    useEffect(() => {
        const decodedToken = jwtDecode(localStorage.getItem("Tokena"))
        setMyID(decodedToken.AdminId)
        DisplayDoctors(decodedToken.AdminId)
    }, [])

    return (
        <div className="container-fluid mt-4">
            <div className="card shadow mt-5">
                <div className="card-header text-white" style={{ background: "#0d6efd" }}>
                    Doctors Details
                </div>

                <div className="card-body table-responsive">

                    {/* Search + Date Filter */}
                    <div className="row mb-3">
                        <div className="col-md-3 mb-3">
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Doctors"
                                    onKeyUp={handleSearch}
                                />
                            </div>
                        </div>

                        <div className="col-md-3  mb-3">
                            <input
                                type="date"
                                className="form-control"
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>

                        <div className="col-md-3  mb-3">
                            <input
                                type="date"
                                className="form-control"
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>

                        <div className="col-md-3  mb-3">
                            <button
                                className="btn btn-primary w-100"
                                onClick={filterByDate}   // date filter button
                            >
                                Filter
                            </button>
                        </div>
                    </div>

                    {/* DataTable */}
                    <DataTable
                        value={filteredDoctors}
                        paginator
                        rows={5}
                        rowsPerPageOptions={[5, 10, 25, 50]}
                    >
                        <Column
                            header="Details"
                            body={(data) => (
                                <>
                                    <h5>{data.fullname}</h5>
                                    <h6>{data.email}</h6>
                                    <b>
                                        <i className="fa-solid fa-phone" style={{ color: "#0d6efd" }}></i>
                                        &nbsp;{data.phone}
                                    </b>
                                </>
                            )}
                        />

                        <Column field="specialization" sortable header="Specialization" />
                        <Column field="qualification" sortable header="Qualification" />
                        <Column field="post" sortable header="Post" />
                        <Column field="available_time" sortable header="Sheef Time" />
                        <Column
                            header="Created Date"
                            body={(rowData) => {
                                const date = new Date(rowData.created_at)
                                return date.toLocaleDateString("en-GB")
                            }}
                        />
                    </DataTable>

                </div>
            </div>
        </div>
    )
}

export default Doctorslists
