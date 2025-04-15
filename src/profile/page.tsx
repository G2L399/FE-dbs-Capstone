import { useEffect, useState } from 'react';
import ProfilePage from './profile';
import { getHistory } from '@/api/profile';

function page() {
  const [history, setHistory] = useState();
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
