'use server';

import axiosInstance from '@/lib/axios';
import { setCookie } from '@/lib/cookie';

export const login = async ({
  email,
  password
}: {
  email: string;
  password: string;
}) => {
  try {
    const result = await axiosInstance.post('/login', {
      email,
      password
    });

    console.log(result.data);

    setCookie({
      name: 'token',
      value: result.data.token,
      endDateFromNowInM: 60 * 24 * 7
    });

    return { success: true, data: result.data };
  } catch (error: any) {
    if (error.response.status === 401) {
      return { success: false, error: 'Invalid email or password' };
    }
    return { success: false, error: 'Login failed, try again later' };
  }
};
