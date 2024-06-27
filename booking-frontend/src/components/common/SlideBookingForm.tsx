import React from 'react';
import { useFormContext } from './FormContext';

const SlideBookingForm: React.FC = () => {
  const { isOpen, toggleForm } = useFormContext();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleForm}></div>
      )}
      <div className="relative">
        <div
          className={`fixed top-0 left-0 w-1/3 h-full bg-white shadow-lg z-50 transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <button 
            onClick={toggleForm} 
            className="absolute top-4 right-4 text-white"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Booking Form</h2>
            {/* Form content will go here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideBookingForm;
