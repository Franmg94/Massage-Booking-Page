import React from 'react';

const PriceSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-light-green bg-opacity-20 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Wellness, Holistic, and Energy Work</h3>
            <ul className="text-lg">
              <li>30 min - 39€</li>
              <li>45 min - 49€</li>
              <li>60 min - 69€</li>
              <li>90 min - 89€</li>
            </ul>
          </div>
          
          <div className="p-6 bg-light-green bg-opacity-20 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Deep Tissue</h3>
            <ul className="text-lg">
              <li>45 min - 55€</li>
              <li>60 min - 75€</li>
              <li>90 min - 95€</li>
            </ul>
          </div>
          
          <div className="p-6 bg-light-green bg-opacity-20 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Urban Sports Club Members</h3>
            <ul className="text-lg">
              <li>25 min - *5€</li>
            </ul>
          </div>

          <div className="p-6 bg-light-green bg-opacity-20 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Class Pass Members</h3>
            <p className="text-lg">
              *Book through Class Pass App and send me an email to confirm appointment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
