import React from 'react';

const TreatmentsSection: React.FC = () => {
    const treatments = [
        { value: "Wellness", description: "A relaxing wellness massage designed to rejuvenate your mind and body. This treatment combines gentle techniques to help you unwind, relieve stress, and improve your overall well-being." },
        { value: "Holistic", description: "A holistic approach to massage that addresses the whole person – mind, body, and spirit. This treatment aims to balance your energies and promote natural healing through various techniques tailored to your needs." },
        { value: "Energy Work", description: "Energy work to balance your body and restore harmony. This treatment focuses on clearing blockages, enhancing the flow of energy, and bringing your body into a state of equilibrium." },
        { value: "Deep Tissue", description: "Deep tissue massage for muscle relief and tension release. This intensive treatment targets the deeper layers of muscle tissue to alleviate chronic pain, improve mobility, and promote muscle recovery." },
        { value: "Urban Sports Club", description: "Specialized massage treatments for Urban Sports Club members. Whether you're recovering from a workout or looking to maintain peak performance, this treatment is designed to meet the needs of active individuals." },
        { value: "Class Pass", description: "Exclusive massage services for ClassPass members. Enjoy tailored treatments that help you relax and recover, ensuring you get the most out of your fitness routine." },
      ];
      
  return (
    <section id='treatments' className="bg-mix py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white text-shadow-md text-center mb-8">EVERY MASSAGE IS DIFFERENT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <div key={treatment.value} className="p-6 bg-light-green bg-opacity-20 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{treatment.value}</h3>
              <p className="text-lg">{treatment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
