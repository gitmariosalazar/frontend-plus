import React, { ReactNode } from 'react';
import { Navbar } from '../navbar/NavBar';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar /> 
      <div className="page-container">
        {children}
      </div>
    </>
  );
};

export default AppLayout;
