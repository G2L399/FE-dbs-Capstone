export type Room = {
  id: number;
  lodgingId: number;
  name: string;
  description?: string;
  price: number;
  capacity: number;
  status: string;
  roomPictureUrl?: string;
  createdAt: string;
  updatedAt: string;
};
