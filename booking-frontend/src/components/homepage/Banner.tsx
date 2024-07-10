import { useEffect, useState } from 'react';
import backgroundImage from '../../assets/images/almendro-3.jpg';

const Banner: React.FC = () => {
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
      className="relative h-screen w-screen my-20 bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: `center ${-offsetY * 0.1}px` 
    }}
    >
      <div className='flex items-center justify-center h-full bg-black bg-opacity-10'>
        <div className='text-center '>
            <h3 className='uppercase text-slate-100 text-xl font-raleway'>Massages makes bodies better</h3>
          <h1 className='font-abril uppercase text-5xl g mb-4 text-slate-100'>
            Body Treatments Berlin
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Banner;
