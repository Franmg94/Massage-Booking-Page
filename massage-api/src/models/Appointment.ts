import { Schema, model, Document } from 'mongoose';

// Define Enums
enum Service {
    Wellness = "Wellness",
    DeepTissue = "Deep Tissue",
    EnergyWork = "Energy Work",
    Holistic = "Holistic"
}

enum Assistance {
    Confirmed = "Confirmed",
    Missed = "Missed",
    Waiting = "Waiting",
    default = Assistance.Waiting
}

enum Location {
    CentroDelfino = "Centro Delfino",
    MasseursAddress = "Masseur's Address",
    YourAddress = "Your Address"
}

// Define Client Interface
interface Client {
    name: string;
    email: string;
    phone: string;
    uscNumber: number;
}

// Define Appointment Interface extending Mongoose Document
interface Appointment extends Document {
    service: Service;
    date: Date;
    time: string;
    location: Location;
    assistance: Assistance;
    client: Client;
}

// Define Appointment Schema
const appointmentSchema = new Schema<Appointment>({
    service: {
        type: String,
        enum: Object.values(Service),
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    location: {
        type: String,
        enum: Object.values(Location),
        required: true
    },
    assistance: {
        type: String,
        enum: Object.values(Assistance),
        required: true
    },
    client: {
        name: {
            type: String,
            required: [true, 'Name is required.']
        },
        email: {
            type: String,
            required: [true, 'Email is required.'],
            lowercase: true,
            trim: true
        },
        phone: {
            type: String,
            required: [true, 'Phone is required.']
        },
        uscNumber: {
            type: Number
        }
    }
});

const AppointmentModel = model<Appointment>('Appointment', appointmentSchema);

export default AppointmentModel;