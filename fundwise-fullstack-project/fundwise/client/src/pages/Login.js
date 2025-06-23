import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input className="w-full mb-3 p-2 border rounded" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full mb-3 p-2 border rounded" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full bg-blue-600 text-white py-2 rounded" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;