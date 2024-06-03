import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Appointment } from '../../types/Appointment';
import { ApiResponse } from '../../types/ApiResponse';


const BookingList: React.FC = () => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get<ApiResponse>('http://localhost:5005/appointments');
                console.log('Fetched data:', response.data);
                if (Array.isArray(response.data.appointments)) {
                    setAppointments(response.data.appointments);
                } else {
                    throw new Error('Data format is not as expected');
                }
            } catch (error) {
                setError('Error fetching appointments');
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    if(!Array.isArray(appointments)) {
        console.error('Expected appointments to be an array:', appointments);
        return <div>Unexpected data format</div>;
    }

    return (
        <div>
            <h1>Appointments</h1>
            <ul>
                {appointments.map(appointment => (
                    <li key={appointment._id.$oid}>
                        {appointment.client.name} - {appointment.service}- {appointment.date.$date} - {appointment.time} - {appointment.location} - {appointment.assistance}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingList;