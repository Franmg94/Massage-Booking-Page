import React, { useState } from 'react';
import axios from 'axios';

enum Service {
    Wellness = "Wellness",
    DeepTissue = "Deep Tissue",
    EnergyWork = "Energy Work",
    Holistic = "Holistic"
}

enum Assistance {
    Confirmed = "Confirmed",
    Missed = "Missed",
    Waiting = "Waiting"
}

enum Location {
    CentroDelfino = "Centro Delfino",
    MasseursAddress = "Masseur's Address",
    YourAddress = "Your Address"
}

interface Client {
    name: string;
    email: string;
    phone: string;
    uscNumber: number;
}

interface Appointment {
    service: Service;
    date: string; 
    time: string;
    location: Location;
    assistance: Assistance;
    client: Client;
}

const CreateAppointment: React.FC = () => {
    const [appointment, setAppointment] = useState<Appointment>({
        service: Service.Wellness,
        date: new Date().toISOString().split('T')[0],
        time: '',
        location: Location.CentroDelfino,
        assistance: Assistance.Waiting,
        client: {
            name: '',
            email: '',
            phone: '',
            uscNumber: 0
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setAppointment(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleClientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAppointment(prevState => ({
            ...prevState,
            client: {
                ...prevState.client,
                [name]: value
            }
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formattedAppointment = {
            ...appointment,
            date: new Date(appointment.date) 
        };
        try {
            await axios.post('http://localhost:5005/appointments', formattedAppointment);
            alert('Appointment created successfully');
        } catch (error) {
            console.error('There was an error creating the appointment!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create New Appointment</h2>
            <div>
                <label>
                    Service:
                    <select name="service" value={appointment.service} onChange={handleChange}>
                        {Object.values(Service).map(service => (
                            <option key={service} value={service}>{service}</option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Date:
                    <input type="date" name="date" value={appointment.date} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Time:
                    <input type="time" name="time" value={appointment.time} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Location:
                    <select name="location" value={appointment.location} onChange={handleChange}>
                        {Object.values(Location).map(location => (
                            <option key={location} value={location}>{location}</option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Assistance:
                    <select name="assistance" value={appointment.assistance} onChange={handleChange}>
                        {Object.values(Assistance).map(assistance => (
                            <option key={assistance} value={assistance}>{assistance}</option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <h3>Client Information</h3>
                <label>
                    Name:
                    <input type="text" name="name" value={appointment.client.name} onChange={handleClientChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={appointment.client.email} onChange={handleClientChange} />
                </label>
                <label>
                    Phone:
                    <input type="text" name="phone" value={appointment.client.phone} onChange={handleClientChange} />
                </label>
                <label>
                    USC Number:
                    <input type="number" name="uscNumber" value={appointment.client.uscNumber} onChange={handleClientChange} />
                </label>
            </div>
            <button type="submit">Create Appointment</button>
        </form>
    );
};

export default CreateAppointment;
