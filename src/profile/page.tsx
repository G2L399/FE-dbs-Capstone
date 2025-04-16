import { useEffect, useState } from 'react';
import ProfilePage from './profile';
import { getHistory } from '@/api/profile';
import { getCookie } from '@/lib/cookie';

function page() {
  const [history, setHistory] = useState();
  if (!Boolean(getCookie('token'))) {
    alert('Anda harus login terlebih dahulu');
    window.location.href = '/sign-in';
  }
  useEffect(() => {
    const fetchData = async () => {
      const result = await getHistory();
      setHistory(result.data.history);
      console.log(result);
    };
    fetchData();
  }, []);
  return history ? <ProfilePage history={history} /> : 'loading...';
}

export default page;
