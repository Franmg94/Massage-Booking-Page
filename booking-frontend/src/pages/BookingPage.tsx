import React from 'react';
import BookingList from '../components/bookingPage/AppointmentsList';
import AddAppointment from '../components/bookingPage/AddAppointment';
import Calendar from 'react-calendar';


const BookingPage: React.FC = () => {
    return(
        <div>
            
            {/* <BookingList /> */}
            <Calendar />
            <AddAppointment/>
        </div>
    );
};

export default BookingPage;