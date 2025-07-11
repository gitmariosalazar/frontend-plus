import React, { ReactNode } from 'react';
import './MenuItem.css';

interface MenuItemProps {
  children: ReactNode;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="menu-item">
      {children}
    </div>
  );
};

export default MenuItem;
