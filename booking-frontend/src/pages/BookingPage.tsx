import React from "react";
import massageImage from "../assets/images/room-5.webp";
import BookingForm from "../components/bookingPage/BookingForm";
import CustomCalendar from "../components/bookingPage/CustomCalendar";

 

const BookingPage: React.FC = () => {
  return (
    <section
      className="cover bg-center h-screen w-screen bg-no-repeat bg-cover pt-16"
      style={{ backgroundImage: `url(${massageImage})` }}
    >
    {/* <CustomCalendar/> */}
      <div className="  h-full w-full flex items-center justify-center">
        <BookingForm />
      </div>
    </section>
  );
};

export default BookingPage;
