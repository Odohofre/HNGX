import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { Link } from 'react-router-dom';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { Login, error } = useLogin();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('please enter both email and password.');
      return;
    }
    await Login(email, password);
  };

  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-2xl lg:text-4xl mb-4">Welcome to Image Gallery</h1>

      <div className="bg-background px-5 py-10 lg:px-16 rounded-[20px]">
        <form onSubmit={handleSubmit} className="flex flex-col min-w-full">
          <label htmlFor="email" className="text-label text-lg font-medium">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="johndoe@gmail.com"
            className="bg-input/40 text-black/50 w-full py-2.5 pl-4 rounded-lg mt-1 text-sm focus:ring-black focus:border-black focus:outline-none focus:ring-2" required
          />
          <label htmlFor="password" className="text-label text-lg font-medium mt-2">
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="*****"
            className="bg-input/40 text-black/50 w-full py-2.5 pl-4 rounded-lg mt-1 text-sm focus:ring-black focus:border-black focus:outline-none focus:ring-2" required
          />
          <button
            type="submit"
            className="text-black text-xl text-center font-medium mt-5 py-2.5 w-full bg-[#F9ED32] hover:text-label rounded-[10px]"
          >
            Login
          </button>
          {error && <p className="text-red-600 text-semibold mt-3">{error}</p>}
        </form>
        <p className="text-label mt-3">
          Dont' have an account?{' '}
          <Link to="/signup" className="text-yellow-500 hover:text-black">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
