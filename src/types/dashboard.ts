export type dashboardData = {
  popularDestinations: {
    id: number;
    name: string;
    description: string | null;
    travelPictureUrl: string | null;
    price: number | null;
    address: string | null;
    city: string | null;
    country: string | null;
    avgRating: number;
    reviewCount: number;
    popularity: number;
  }[];
  topRatedHotels: {
    id: number;
    name: string;
    description: string | null;
    lodgingPictureUrl: string | null;
    pricePerNight: number;
    address: string;
    city: string | null;
    country: string | null;
    propertyType: string | null;
    avgRating: number;
    reviewCount: number;
  }[];
};
