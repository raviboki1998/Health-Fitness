import React,{ useState,useEffect } from 'react';

export const useWidth = () => {
  const [imgMeasurement, setImgMeasurement] = useState(40);

  useEffect(() => {
    const handleResize = () => {
      setImgMeasurement(window.innerWidth > 768 ? 64 : 40);
    };

    handleResize(); // Initial measurement

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    imgMeasurement,
    setImgMeasurement,
  };
};
