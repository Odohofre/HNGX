import React, { useState } from 'react';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const Login = async (email, password) => {
    if (!password && !email) return;

    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate('/gallery');
      setError(null);
    } catch (error) {
      console.log(error.message);
      switch (error.code) {
        case 'auth/invalid-login-credentials':
          setError('Invalid login details')
          return
        case 'auth/invalid-email':
          setError('Invalid email address');
          return;

        case 'auth/user-not-found':
          setError('Not a registered account.');
          return;

        case 'auth/wrong-password':
          setError('Email or password is wrong');
          return;

        default:
          error.code;
      }
    }
  };
  return { Login, error };
};
