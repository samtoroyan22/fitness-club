import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const UserForm = () => {
  const [user, setUser] = useState({ firstName: '', lastName: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    } else {
      message.error("No user data found. Please log in again.");
      navigate('/login');
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    message.success("You have been logged out.");
    navigate('/');
  };

  return (
    <section id='user' className='section'>
      <div>
        <h1>Hello, {user.firstName} {user.lastName}</h1>
        <button onClick={logout}>Log Out</button>
      </div>
    </section>
  );
};

export default UserForm;
