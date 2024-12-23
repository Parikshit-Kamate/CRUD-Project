import React from 'react'


const StudentDetails = ({ onLogout, student }) => {






  return (
    <div>
      <h1>Student Details</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mother Name</th>
            <th>Father Name</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Fees</th>
            <th>DOB</th>
            <th>Pincode</th>
            <th>Password</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            student.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.fname}</td>
                  <td>{value.lname}</td>
                  <td>{value.mother_name}</td>
                  <td>{value.father_name}</td>
                  <td>{value.address}</td>
                  <td>{value.gender}</td>
                  <td>{value.course}</td>
                  <td>{value.fees}</td>
                  <td>{value.dob}</td>
                  <td>{value.pincode}</td>
                  <td>{value.password}</td>
                  <td>{value.email}</td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
      <button className='btn btn-warning mt-5 mb-5 w-25' onClick={onLogout}>LogOut</button>
    </div>
  )
}

export default StudentDetails
