import React from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const UserForm = () => {
  const navigate = useNavigate();
  const logout = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      navigate('/');
      return;
    }

    fetch('http://localhost:8080/logout', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        if (data.success) {
          message.success("You have been logged out.")
          localStorage.removeItem('token');
          navigate('/');
        }
      })
      .catch(error => console.error('Error:', error));
  };


  return (
    <section id='user' className='section' >
      <div>
        <h1>hello</h1>
        <button onClick={logout}>Click</button>
      </div>
    </section>
  );
};

export default UserForm;
