import React, { useState, useEffect } from 'react';
import './Loading.css';

interface LoadingProps {
  percentage?: number; // Opcional: porcentaje inicial (por defecto 0)
}

const Loading: React.FC<LoadingProps> = ({ percentage = 0 }) => {
  const [progress, setProgress] = useState(percentage);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50); // Incrementa cada 50 ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-circle"></div>
      <div className="loading-text">
        <span>{progress}%</span>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
