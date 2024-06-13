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
          <h1 className='text-4xl text-shadow-lg mb-4 text-slate-100'>
            Body Treatments Berlin
          </h1>
          <div className='flex justify-center space-x-4'>
            <button 
              onClick={() => window.location.href = '/booking'}
              className='text-white hover:text-light-green hover:text-shadow-md font-bold py-2 px-4 transform transition-transform duration-300 hover:scale-105'
            >
              Book Now
            </button>
            <button
              onClick={() => window.location.href = '#treatments'}
              className=' text-white hover:text-light-green hover:text-shadow-md font-bold py-2 px-4 transform transition-transform duration-300 hover:scale-105'
            >
              Treatments
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
