export type travelTicket<T> = {
  id: number;
  userId: number;
  travelDestinationId: number;
  guestAmount: number;
  totalPrice: number;
  paymentId: number;
  visitDate: any;
  status: string;
  planId: any;
  createdAt: string;
  updatedAt: string;
} & T;
export type travelDestination<T> = {
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
} & T;
