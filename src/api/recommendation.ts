import axios from 'axios';

//@ts-expect-error
const BASE_URL = import.meta.env.VITE_ML_BASE_URL;

export const getPlaceRecommendation = async (placeId: string) => {
  try {
    const result = await axios.get(`${BASE_URL}predict/${placeId}`);
    return { data: result.data, success: true };
  } catch (error) {
    console.log(error);
    return { data: null, success: false };
  }
};
