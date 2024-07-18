import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const { username, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setMessage('');
    setIsError(false);
    try {
      const res = await axios.post('http://localhost:8080/api/auth/register', formData);
      console.log(res.data);
      setMessage('Registration successful!');
      setTimeout(() => {
        navigate('/login');
      }, 2000); // Redirect to login after 2 seconds
    } catch (err) {
      console.error(err.response.data);
      setMessage(err.response.data.msg || 'An error occurred during registration.');
      setIsError(true);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="username" value={username} onChange={onChange} placeholder="Username" required />
        <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
        <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      {message && (
        <div style={{ color: isError ? 'red' : 'green', marginTop: '10px' }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Register;