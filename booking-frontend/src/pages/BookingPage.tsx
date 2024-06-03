import React from 'react';
import BookingList from '../components/bookingPage/AppointmentsList';
import AddAppointment from '../components/bookingPage/AddAppointment';

const BookingPage: React.FC = () => {
    return(
        <div>
            <h2>Book an Appointment</h2>
            <h2>Existing Appointments</h2>
            <BookingList />
            <AddAppointment/>
        </div>
    );
};

export default BookingPage;