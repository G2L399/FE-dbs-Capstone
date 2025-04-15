'use server';

import axiosInstance from '@/lib/axios';

export const getHistory = async () => {
  const result = await axiosInstance.get('/destination/history');

  return { data: result.data };
};
