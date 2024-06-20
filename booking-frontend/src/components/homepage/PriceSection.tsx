import React from 'react';

const PriceSection: React.FC = () => {
  return (
    <section className="">
      <div className="mx-20">        
        <div className="flex flex-col md:flex-row md:space-x-8 justify-around">
         
          <div className="p-6 text-center">
            <h3 className='text-lg mb-2 uppercase font-raleway'>Most modalities</h3>
            <h2 className="text-3xl font-abril uppercase mb-10 ">Massages</h2>
            <ul className="font-heebo leading-loose font-light">
            <li className='mb-2'>30 min  - €39</li>
              <li className='mb-2'>45 min  - €49</li>
              <li className='mb-2'>60 min  - €69</li>
              <li className='mb-2'>90 min  - €89</li>
            </ul>
          </div>
          
          <div className="p-6 text-center">
            <h3 className='text-lg mb-2 uppercase font-raleway'>Sport & Deep Tissue</h3>
            <h2 className="text-3xl font-abril uppercase mb-10">Massages</h2>
            <ul className=" font-heebo leading-loose font-light mb-2">
            <li className='mb-2'>45 min - €55</li>
              <li className='mb-2'>60 min - €75</li>
              <li className='mb-2'>90 min - €95</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-10'>

      <button
            onClick={() => (window.location.href = "/booking")}
            className="mx-auto mt-10 border-2 border-black tracking-wider font-bold uppercase py-5 px-8 hover:text-white hover:bg-black   transform transition-transform duration-300"
          >
            Reserve Now
          </button>
      </div>
    </section>
  );
};

export default PriceSection;
