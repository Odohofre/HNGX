import React from 'react';
import { useState } from 'react';
import { useSignUp } from '../hooks/useSignUp';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { SignUp, error } = useSignUp();

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
    await SignUp(email, password);
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="bg-background px-5 py-10 lg:px-16 rounded-[20px]">
        <h2 className="text-black text-center text-2xl font-semibold mb-8">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col min-w-full">
          <label htmlFor="email" className="text-label text-lg font-medium">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email address"
            className="bg-input/40 text-black/50 w-full py-2.5 pl-4 rounded-lg mt-1 text-sm focus:ring-black focus:border-black focus:outline-none focus:ring-2"
            required
          />
          <label
            htmlFor="password"
            className="text-label text-lg font-medium mt-4"
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="******"
            onChange={handlePasswordChange}
            className="bg-input/40 text-black/50 w-full py-2.5 pl-4 rounded-lg text-sm mt-1 focus:ring-black focus:border-black focus:outline-none focus:ring-2"
            required
          />
          <button
            type="submit"
            className="text-black text-xl text-center font-medium mt-5 py-2.5 w-full bg-[#F9ED32] hover:text-label rounded-[10px]"
          >
            Sign Up
          </button>
          {error && <p className="text-red-600 text-semibold mt-3">{error}</p>}
        </form>
        <p className="text-label mt-3">
          Already have an account!{' '}
          <Link to="/login" className="text-yellow-500 hover:text-black">
            Log in
          </Link>{' '}
        </p>
      </div>
    </main>
  );
}
