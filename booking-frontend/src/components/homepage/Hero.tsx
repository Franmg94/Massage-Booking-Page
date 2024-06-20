import React, { useEffect, useState } from 'react';
import massageImage from '../../assets/images/almendro-1.jpg';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section
      className="h-screen w-screen bg-center bg-cover "
      style={{ 
        backgroundImage: `url(${massageImage})`,
        backgroundPositionY: `${offsetY * 0.5}px` 
    }}
    >
      <div className='flex items-center justify-center h-full bg-black bg-opacity-10'>
        <div className='text-center '>
          <h1 className='font-abril uppercase text-5xl text-shadow-lg mb-4 text-slate-100'>
            Body Treatments Berlin
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
