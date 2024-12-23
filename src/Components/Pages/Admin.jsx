import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Admin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();


  const handleLogin = () => {
    if (username === 'ADMIN' && password === 'admin@123') {
      alert('LOGIN SUCCESSFULL !!!!!')
      navigate('/studentdata');
    } else {
      alert('Check Username or Password')
    }


  }

  return (
    <div>
      <div className='bg-warning w-50 mx-auto rounded-4 mt-5 mb-5 p-5'>
        <h1 className='mb-3'>Welcome to Admin</h1>
        <div className='mb-3'>
          <input
            type='text'
            className='form-control p-3'
            placeholder='Enter Username'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className='mb-3'>
          <input
            type='password'
            className='form-control p-3'
            placeholder='Enter Password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className='btn btn-primary w-50' onClick={handleLogin}>LOGIN</button>

      </div>
    </div>
  );
};

export default Admin;
