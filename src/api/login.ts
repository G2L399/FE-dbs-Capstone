'use server';

import axiosInstance from '@/lib/axios';
import { setCookie } from '@/lib/cookie';
import { AxiosResponse } from 'axios';

export const login = async ({
  email,
  password
}: {
  email: string;
  password: string;
}) => {
  const result = await axiosInstance.post('/login', {
    email,
    password
  });
  setCookie({ name: 'token', value: result.data.token });

  return { data: result.data, success: true };
};
