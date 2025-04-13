'use server';
import axiosInstance from '@/lib/axios';

export const dashboard = async () => {
  const result = await axiosInstance.get('/dashboard');
  return result.data;
};
