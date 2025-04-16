'use server';

import axiosInstance from '@/lib/axios';

export const getHistory = async (limit?: number) => {
  const result = await axiosInstance.get('/destination/history', {
    params: { limit }
  });

  return { data: result.data };
};
export const getTickets = async (): Promise<tickets> => {
  const result = await axiosInstance.get(`/tickets`);
  return result.data;
};

export type tickets = {
  id: number;
  username: string;
  profilePicture: string;
  email: string;
  password: string;
  balance: number;
  createdAt: string;
  updatedAt: string;
  travelTickets: Array<{
    id: number;
    userId: number;
    travelDestinationId: number;
    guestAmount: number;
    totalPrice: number;
    paymentId: number;
    visitDate: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    travelDestination: {
      id: number;
      name: string;
      description: string;
      travelPictureUrl: string;
      price: number;
      address: string;
      city: string;
      country: string;
      latitude: number;
      longitude: number;
      openingHours: string;
      avg_rating: number;
      createdAt: string;
      updatedAt: string;
    };
  }>;
  lodgingTickets: Array<{
    id: number;
    userId: number;
    lodgingId: number;
    guestAmount: number;
    totalPrice: number;
    checkInDate: string;
    checkOutDate: string;
    paymentId: number;
    status: string;
    createdAt: string;
    updatedAt: string;
    lodging: {
      id: number;
      name: string;
      description: string;
      lodgingPictureUrl: string;
      pricePerNight: number;
      address: string;
      city: string;
      country: string;
      latitude: number;
      longitude: number;
      propertyType: string;
      createdAt: string;
      updatedAt: string;
    };
  }>;
  transportationTickets: Array<{
    id: number;
    userId: number;
    transportationId: number;
    passengerAmount: number;
    paymentId: number;
    totalPrice: number;
    departureDateTime: string;
    arrivalDateTime: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    transportation: {
      id: number;
      name: string;
      description: string;
      company: string;
      pickupLocation: string;
      destination: string;
      pickupTime: string;
      arrivalTime: string;
      basePrice: number;
      type: string;
      transportPictureUrl: string;
      createdAt: string;
      updatedAt: string;
    };
  }>;
};
