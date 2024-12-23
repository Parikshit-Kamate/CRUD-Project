import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, NavLink } from 'react-router-dom'
import axios from 'axios'

const Delete = () => {
    const [student, setStudent] = useState('')
    const { studentID } = useParams()
    const navigate = useNavigate()


    const getData = async () => {
        const response = await axios.get(`http://localhost:8000/students/${studentID}`)
        const result = response.data
        setStudent(result)
    }

    useEffect(() => {
        getData()
    }, [])

    const deleteData = () => {
        axios.delete(`http://localhost:8000/students/${studentID}`)
        navigate('/studentdata')
        alert('Data Deleted Successfully')
        // setStudent('')
    }

    return (
        <div>
            <h2>Delete Component</h2>
            <div className='bg-primary w-50 mx-auto p-4 rounded-3 mt-5 mb-5'>
                <div className='mt-3'>
                    <h2>Student id -{student.id}</h2>
                </div>
                <div className='mt-3'>
                    <h2>Student Name - {student.fname} {student.lname}</h2>
                </div>
                <div className='mt-3'>
                    <h2>Student Email - {student.email}</h2>
                </div>
                <div className='mt-3'>
                    <button className='btn btn-danger me-3' onClick={deleteData}>YES</button>
                    <NavLink to='/studentdata'><button className='btn btn-success'>NO</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Delete
