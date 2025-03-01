import { Footer } from "./Footer";
import { ReactNode } from "react";
import { Header } from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header className="sticky top-0 bg-purple-900 p-4 mb-8 z-10" />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
