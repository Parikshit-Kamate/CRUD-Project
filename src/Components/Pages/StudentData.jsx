import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const StudentData = () => {

    const [student, setStudent] = useState([])
    const [searchName, setSearchName] = useState('')
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/students')
            console.log(response)

            const result = response.data
            console.log(result)
            setStudent(result)
        } catch (error) {
            console.error('Error fetching student data:', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])



    const handleLogout = () => {
        navigate('/admin')

    }


    const searchHandler = (event) => {
        const search = event.target.value
        setSearchName(search)
    }

    const searchNameHandler = student.filter((value) => {
        return value.course.toLowerCase().includes(searchName.toLowerCase())
    })

    return (
        <div>
            <h1>Student Details</h1>
            <div className='mt-3 mb-3 w-50 mx-auto'>
                <input type="text"
                    className='form-control'
                    placeholder='Type Your Cousrse'
                    value={searchName}
                    onChange={searchHandler}
                />

            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>SR.No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Mother's Name</th>
                        <th>Father's Name</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>DOB</th>
                        <th>Pincode</th>
                        <th>Password</th>
                        <th>Course</th>
                        <th>Fees</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        searchNameHandler.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{value.fname}</td>
                                    <td>{value.lname}</td>
                                    <td>{value.mother_name}</td>
                                    <td>{value.father_name}</td>
                                    <td>{value.address}</td>
                                    <td>{value.gender}</td>
                                    <td>{value.dob}</td>
                                    <td>{value.pincode}</td>
                                    <td>{value.password}</td>
                                    <td>{value.course}</td>
                                    <td>{value.fees}</td>
                                    <td>{value.email}</td>
                                    <td>
                                        <NavLink to={`/update/${value.id}`} ><button className='btn btn-warning mt-3' >Edit</button></NavLink>
                                        <NavLink to={`/delete/${value.id}`}><button className='btn btn-danger mt-3'>Delete</button></NavLink>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div>
                <button className='btn btn-warning mt-5 mb-5 w-25' onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default StudentData 