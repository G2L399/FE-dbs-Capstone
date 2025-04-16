'use server';

import axiosInstance from '@/lib/axios';
import { setCookie } from '@/lib/cookie';

export const signup = async ({
  email,
  password,
  username
}: {
  email: string;
  password: string;
  username: string;
}) => {
  try {
    const result = await axiosInstance.post('/signup', {
      email,
      password,
      username
    });

    // If signup is successful, we'll get a token in the response
    if (result.data && result.data.token) {
      // Set the token in a cookie
      setCookie({
        name: 'token',
        value: result.data.token,
        endDateFromNowInM: 60 * 24 * 7 // 7 days
      });
      return { success: true, data: result.data, autoLogin: true };
    }

    // If no token in response, return success but indicate auto-login not possible
    return { success: true, data: result.data, autoLogin: false };
  } catch (error: any) {
    if (error.response?.status === 400) {
      return {
        success: false,
        error:
          error.response.data.error ||
          'Email already exists or missing required fields'
      };
    }
    return {
      success: false,
      error: 'Registration failed, please try again later'
    };
  }
};
