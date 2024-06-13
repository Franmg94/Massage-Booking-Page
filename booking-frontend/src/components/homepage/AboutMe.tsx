import React from 'react';
import profileImage from '../../assets/images/profile.jpg';  // Replace with the actual path to your image

const AboutMeSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img src={profileImage} alt="Profile" className="rounded-full shadow-lg w-64 h-64 object-cover" />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            Hi, I'm Fran aka Paka, your professional massage therapist in Berlin. My experience as a dancer has greatly influenced my approach to massage therapy, allowing me to understand the body’s movements, tensions, and the need for relaxation deeply.
          </p>
          <p className="text-lg">
            Through my years of dancing, I have developed a keen awareness of how to work with the body to relieve stress and pain. I use my knowledge of movement and anatomy to provide personalized massage treatments that promote healing and well-being. Whether you're an athlete, a dancer, or someone seeking relaxation, my goal is to help you achieve balance and comfort through tailored massage techniques.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
