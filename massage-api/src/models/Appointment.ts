import { Schema, model, Document } from "mongoose";

// Define Enums
enum Service {
  Wellness = "Wellness",
  DeepTissue = "Deep Tissue",
  EnergyWork = "Energy Work",
  Holistic = "Holistic",
  USC = "Urban Sports Club",
  ClassPass = "Class Pass"
}

enum Assistance {
  Confirmed = "Confirmed",
  Missed = "Missed",
  Waiting = "Waiting"
}

enum Location {
  CentroDelfino = "Centro Delfino",
  MasseursAddress = "Masseur's Address",
  ClientAddress = "Client Address"
}

enum Duration {
  Thirty = "30",
  FortyFive = "45",
  Sixty = "60",
  Ninety = "90"
}

// Define Client Interface
interface Client {
  name: string;
  email: string;
  phone: string;
  address?: string;
  uscNumber?: number;
}

// Define Appointment Interface extending Mongoose Document
interface Appointment extends Document {
  service: Service;
  date: Date;
  time: string;
  location: Location;
  assistance: Assistance;
  client: Client;
  duration: Duration;
}

// Define Appointment Schema
const appointmentSchema = new Schema<Appointment>(
  {
    service: {
      type: String,
      enum: Object.values(Service),
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      enum: Object.values(Location),
      required: true,
    },
    assistance: {
      type: String,
      enum: Object.values(Assistance),
      default: Assistance.Waiting,
      required: true,
    },
    duration: {
      type: String,
      enum: Object.values(Duration),
      required: true
    },
    client: {
      name: {
        type: String,
        required: [true, "Name is required."],
      },
      email: {
        type: String,
        required: [true, "Email is required."],
        lowercase: true,
        trim: true,
        validate: {
          validator: function (v: string) {
            return /\S+@\S+\.\S+/.test(v);
          },
          message: (props) => `${props.value} is not a valid email!`,
        },
      },
      phone: {
        type: String,
        required: [true, "Phone is required."],
      },
      address: {
        type: String,
      },
      uscNumber: {
        type: Number,
        validate: {
          validator: function (v: number) {
            return /^\d{9}$/.test(v.toString());
          },
          message: (props) =>
            `${props.value} is not a valid 9-digit USC Number!`,
        },
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

appointmentSchema.index({ "client.email": 1 });

const AppointmentModel = model<Appointment>("Appointment", appointmentSchema);

export default AppointmentModel;
