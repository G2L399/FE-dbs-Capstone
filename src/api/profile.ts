'use server';

import axiosInstance from '@/lib/axios';

export const getHistory = async (limit: number = 1) => {
  const result = await axiosInstance.get('/destination/history', {
    params: { limit }
  });

  return { data: result.data };
};
