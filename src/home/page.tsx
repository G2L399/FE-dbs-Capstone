'use client';
import { useState, useEffect } from 'react';
import HomePage from './HomePage';
import { dashboard } from '@/api/dashboard';

export default function page() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await dashboard();
      setData(result);
    };
    fetchData();
  }, []);

  return data ? <HomePage data={data}></HomePage> : 'loading';
}
