// src/not-found.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home');
  }, []);
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-100'>
      <h1 className='mb-4 text-6xl font-bold text-red-500'>404</h1>
      <p className='mb-8 text-xl text-gray-700'>Page Not Found</p>
      <Link to='/Home' className='text-blue-500 hover:underline'>
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
