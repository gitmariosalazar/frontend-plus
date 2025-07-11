import React from 'react';
import './BackDrop.css';

interface BackDropProps {
  onClick?: () => void;
}

const BackDrop: React.FC<BackDropProps> = ({ onClick }) => {
  return <div onClick={onClick} className="backdrop"></div>;
};

export default BackDrop;
