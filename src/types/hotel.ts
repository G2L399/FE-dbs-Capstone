export type Hotel<T> = T & {
  address: string;
  city: string;
  country: string;
  createdAt: string;
  description: string;
  id: number;
  latitude: number;
  lodgingPictureUrl: string;
  longitude: number;
  name: string;
  pricePerNight: number;
  propertyType: string;
};
