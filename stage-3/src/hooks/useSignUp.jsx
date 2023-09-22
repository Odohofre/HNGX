import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const SignUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');
      setError(null);
    } catch (error) {
      switch (error.code) {
        case 'auth/weak-password':
          setError('Password should be atleast 6 letters');
          return;
        case 'auth/email-already-in-use':
          setError('Email already exist, log in  normally');
          return;

        default:
          error.code;
      }
    }
  };

  return { SignUp, error };
};
