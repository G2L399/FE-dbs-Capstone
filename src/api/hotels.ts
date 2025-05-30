'use server';
import axiosInstance from '@/lib/axios';
import { AxiosResponse } from 'axios';

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

export const pay = async (id: number, data) => {
  console.log(data);
  try {
    const result: AxiosResponse<{
      data: {
        id: number;
        paymentType: string;
        bank: any;
        vaNumber: string | null;
        amount: number;
        paymentStatus: string;
        createdAt: Date;
        updatedAt: Date;
        userId: number | null;
      };
      success: boolean;
      message: string;
    }> = await axiosInstance.post(`/hotel/${id}/payment`, data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
