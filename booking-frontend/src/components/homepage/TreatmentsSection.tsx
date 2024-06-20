import React, { useEffect, useState } from "react";
import treatment1 from "../../assets/images/treatment-1.jpg";
import treatment2 from "../../assets/images/treatment-2.jpg";
import treatment3 from "../../assets/images/treatment-3.jpg";
import treatment4 from "../../assets/images/treatment-4.jpg";
import treatment5 from "../../assets/images/treatment-5.jpg";
import treatment6 from "../../assets/images/treatment-6.jpg";

const TreatmentsSection: React.FC = () => {
  const treatments = [
    {
      value: "Wellness Massage",
      subTitle: "Ease tension with light, rhymic strokes",
      description:
        "A relaxing wellness massage designed to rejuvenate your mind and body. This treatment combines gentle techniques to help you unwind, relieve stress, and improve your overall well-being.",
      modelImg: treatment1,
    },
    {
      value: "Holistic Massage",
      subTitle: "FOCUS ON CUSTOM MEDICAL OUTCOMES",
      description:
        "A holistic approach to massage that addresses the whole person – mind, body, and spirit. This treatment aims to balance your energies and promote natural healing through various techniques tailored to your needs.",
      modelImg: treatment2,
    },
    {
      value: "Energy Work",
      subTitle: "Nourish your aura with touch-free energy",
      description:
        "Energy work to balance your body and restore harmony. This treatment focuses on clearing blockages, enhancing the flow of energy, and bringing your body into a state of equilibrium.",
      modelImg: treatment3,
    },
    {
      value: "Deep Tissue Massage",
      subTitle: "Release tension with strong pressure",
      description:
        "Deep tissue massage for muscle relief and tension release. This intensive treatment targets the deeper layers of muscle tissue to alleviate chronic pain, improve mobility, and promote muscle recovery.",
      modelImg: treatment4,
    },
    {
      value: "Urban Sports Club Massage",
      subTitle: "Ease tension with light, rhymic strokes",
      description:
        "Specialized massage treatments for Urban Sports Club members. Whether you're recovering from a workout or looking to maintain peak performance, this treatment is designed to meet the needs of active individuals.",
      modelImg: treatment5,
    },
    {
      value: "Class Pass Massage",
      subTitle: "Ease tension with light, rhymic strokes",
      description:
        "Exclusive massage services for ClassPass members. Enjoy tailored treatments that help you relax and recover, ensuring you get the most out of your fitness routine.",
      modelImg: treatment6,
    },
  ];

  return (
    <section id="treatments" className="py-10">
    <div className="container mx-auto p-5 max-w-screen-xl">
      {/* TREATMENTS */}
      <div className="">
        {treatments.map((treatment, index) => (
          <div key={treatment.value}>
            <div
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16 gap-20`}
            >
              <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                <h3 className="text-lg mb-2 uppercase font-raleway">
                  {treatment.subTitle}
                </h3>
                <h2 className="text-5xl font-abril uppercase mb-10">
                  {treatment.value}
                </h2>
                <p className="font-heebo mb-5">{treatment.description}</p>
              </div>
              <div className="md:w-1/2">
                <img
                  src={treatment.modelImg}
                  alt=""
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
            <hr className=" mb-5 w-full" />
          </div>
        ))}
      </div>
    </div>
  </section>
  

  );
};

export default TreatmentsSection;
