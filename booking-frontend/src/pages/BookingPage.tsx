import React from 'react';
import BookingList from '../components/bookingPage/BookingsList';

const BookingPage: React.FC = () => {
    return(
        <div>
            <h2>Book an Appointment</h2>
            <h2>Existing Appointments</h2>
            <BookingList />
            
        </div>
    );
};

export default BookingPage;