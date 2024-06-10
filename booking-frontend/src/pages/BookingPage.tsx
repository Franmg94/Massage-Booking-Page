import React from "react";
import massageImage from '../assets/images/room-5.webp'
import BookingForm from "../components/bookingPage/BookingForm";


const BookingPage: React.FC = () => {
  return (
    <section
    //   className="cover bg-center h-screen w-screen bg-relative "
    //   style={{ backgroundImage: `url(${massageImage})` }}
    >
      <BookingForm/>
      {/* <div className="flex items-center justify-center h-full bg-black bg-opacity-20"></div> */}
    </section>
  );
};

export default BookingPage;
