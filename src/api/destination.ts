import axiosInstance from '@/lib/axios';
import type { Destination } from '@/destination/destination-card';

interface DestinationsResponse {
  destinations: Destination[];
  meta: meta;
}
interface meta {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}
export const getdestinations = async (
  page = 1,
  limit = 9,
  search?: string,
  city?: string
): Promise<DestinationsResponse> => {
  const params = new URLSearchParams();
  params.append('page', page.toString());
  params.append('limit', limit.toString());

  if (search) {
    params.append('search', search);
  }

  if (city) {
    params.append('city', city);
  }

  const result = await axiosInstance.get(`/destination?${params.toString()}`);
  return result.data;
};

export const getdestinationbyid = async (
  id: string | number
): Promise<{ destination: Destination }> => {
  const result = await axiosInstance.get(`/destination/${id}`);
  return result.data;
};

export const getIndonesianCities = async (): Promise<string[]> => {
  const result = await axiosInstance.get('/destination/cities');
  return result.data.cities;
};

export const destinationPay = async (data) => {
  try {
    console.log(data);

    const result = await axiosInstance.post(`/destination/pay`, data);
    return result.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
