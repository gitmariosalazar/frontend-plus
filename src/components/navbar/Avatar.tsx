import { AccountCircle } from '@mui/icons-material';
import React from 'react';

interface AvatarProps {
  src?: string;
  height?: number | string;
  width?: number | string;
}

const Avatar: React.FC<AvatarProps> = ({ src, height, width }) => {
  if (src) {
    return <img src={src} alt="Avatar" height={height} width={width} className="rounded-full" />;
  } else {
    return <AccountCircle className="rounded-full" />;
  }
};

export default Avatar;
