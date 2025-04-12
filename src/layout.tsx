import { Foot } from './Footer';
import { ReactNode } from 'react';
import { Header } from './Header';

const Layout = ({ children }: { children: ReactNode }) => {
  console.log(children);
  console.log('children');

  return (
    <>
      <Header className='top-0 z-[999] mb-8 p-4' />
      {children}
      <Foot />
    </>
  );
};

export default Layout;
