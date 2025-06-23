import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
      navigate('/');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <input className="w-full mb-3 p-2 border rounded" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input className="w-full mb-3 p-2 border rounded" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full mb-3 p-2 border rounded" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full bg-green-600 text-white py-2 rounded" onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default Register;