import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-4">I'd love to hear from you! If you have any questions or would like to book a session, please reach out to me at:</p>
        <a href="mailto:your-email@example.com" className="text-blue-500 hover:underline text-lg">your-email@example.com</a>
      </div>
    </section>
  );
};

export default ContactSection;
