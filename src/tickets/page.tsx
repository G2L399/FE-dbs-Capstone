import { useEffect, useState } from 'react';
import ProfilePage from './profile';
import { getTickets, type tickets } from '@/api/profile';
import { getCookie } from '@/lib/cookie';

function page() {
  const [tickets, setTickets] = useState<tickets>();
  if (!Boolean(getCookie('token'))) {
    alert('Anda harus login terlebih dahulu');
    window.location.href = '/sign-in';
  }
  useEffect(() => {
    const fetchData = async () => {
      const result = await getTickets();
      setTickets(result);
    };
    fetchData();
  }, []);
  return tickets ? <ProfilePage {...tickets} /> : 'loading...';
}

export default page;
