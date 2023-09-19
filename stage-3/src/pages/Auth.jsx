import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

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
    await Login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="email">
        Email
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="johndoe@gmail.com"
          className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="*****"
          className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
        />
      </label>
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
}
