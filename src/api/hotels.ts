'use server';
import axiosInstance from '@/lib/axios';

export const topHotels = async () => {
  const result = await axiosInstance.get('/hotels/top-rated');
  return result.data;
};
export const bestDeal = async () => {
  const result = await axiosInstance.get('/hotels/best-deals');
  return result.data;
};
export const byID = async (id: number) => {
  const result = await axiosInstance.get(`/hotels/${id}`);
  return result.data;
};
export const booking = async (id: number) => {
  const result = await axiosInstance.get(`/hotels/${id}/booking`);
  return result.data;
};
