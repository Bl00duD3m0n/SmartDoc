// src/app/components/AuthTabs.js
"use client";
import { useState } from 'react';
import axios from 'axios';
import MainScreen from './MainScreen';

export default function AuthTabs() {
  const [tab, setTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      setMessage('Login successful!');
      localStorage.setItem('token', response.data.token);
      setIsAuthenticated(true); 
    } catch (error) {
      setMessage('Login failed: ' + (error.response?.data?.message || error.message));
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    try {
      await axios.post('/api/auth/register', { name, email, password });
      setMessage('Registration successful!');
    } catch (error) {
      setMessage('Registration failed: ' + (error.response?.data?.message || error.message));
    }
  };

  if (isAuthenticated) {
    return <MainScreen />;
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-100 px-4">
      <div className="mb-8 flex items-center">
        <MountainIcon className="h-8 w-8 text-gray-900" />
        <span className="ml-2 text-2xl font-bold text-gray-900">SmartDoc</span>
      </div>
      <div className="w-full max-w-md">
        <div className="grid w-full grid-cols-2 mb-4">
          <button className={`p-2 ${tab === 'login' ? 'border-b-2 border-black' : ''}`} onClick={() => setTab('login')}>Login</button>
          <button className={`p-2 ${tab === 'register' ? 'border-b-2 border-black' : ''}`} onClick={() => setTab('register')}>Register</button>
        </div>
        {tab === 'login' && (
          <LoginCard
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            message={message}
          />
        )}
        {tab === 'register' && (
          <RegisterCard
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            handleRegister={handleRegister}
            message={message}
          />
        )}
      </div>
    </div>
  );
}

function LoginCard({ email, setEmail, password, setPassword, handleLogin, message }) {
  return (
    <form onSubmit={handleLogin} className="bg-white shadow-md rounded-lg p-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="m@example.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="mt-4">
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Login</button>
        <a href="#" className="mt-2 block text-center text-sm text-blue-600 underline">Forgot Password?</a>
      </div>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </form>
  );
}

function RegisterCard({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  handleRegister,
  message
}) {
  return (
    <form onSubmit={handleRegister} className="bg-white shadow-md rounded-lg p-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="m@example.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="mt-4">
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Register</button>
        <a href="#" className="mt-2 block text-center text-sm text-blue-600 underline">Already have an account? Login</a>
      </div>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </form>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
