import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import StudentDetails from '../Pages/StudentDetails.jsx'


const StudentLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState([])

    


    const handleLogin = async () => {
        const response = await axios.get('http://localhost:8000/students')
        const result = response.data

        const stuLogin = result.filter((value) => value.email === email && value.password === password)


        if (stuLogin.length > 0) {
            setLoggedIn(stuLogin)
            console.log(stuLogin)
            alert("Student Login Succesful")
        } else {
            alert('You Have Entered Wrong Details')
            setEmail('')
            setPassword('')
            

        }

    }

    const handleLogout = () =>{
        setLoggedIn([])
        setEmail('')
        setPassword('')
    }


    if (loggedIn.length > 0) {
        return <StudentDetails student={loggedIn} onLogout = {handleLogout}/>
    }


   

    return (
        <div>
            <div className='bg-warning w-50 mx-auto rounded-4 mt-5 mb-5 p-5'>
                <h2 className='mb-5'>Welcome to Student</h2>
                <div className='mb-3'>
                    <input
                        type='text'
                        className='form-control p-3'
                        placeholder='Enter Email'
                        onChange={(event) => setEmail(event.target.value)}

                    />
                </div>
                <div className='mb-3'>
                    <input
                        type='password'
                        className='form-control p-3'
                        placeholder='Enter Password'
                        onChange={(event) => setPassword(event.target.value)}


                    />
                </div>
                <button className='btn btn-primary w-50 mt-3' onClick={handleLogin}>LOGIN</button>

            </div>
        </div>
    )
}

export default StudentLogin
