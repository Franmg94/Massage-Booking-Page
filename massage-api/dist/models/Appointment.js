"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define Enums
var Service;
(function (Service) {
    Service["Wellness"] = "Wellness";
    Service["DeepTissue"] = "Deep Tissue";
    Service["EnergyWork"] = "Energy Work";
    Service["Holistic"] = "Holistic";
})(Service || (Service = {}));
var Assistance;
(function (Assistance) {
    Assistance["Confirmed"] = "Confirmed";
    Assistance["Missed"] = "Missed";
    Assistance["Waiting"] = "Waiting";
    Assistance["default"] = "Waiting";
})(Assistance || (Assistance = {}));
var Location;
(function (Location) {
    Location["CentroDelfino"] = "Centro Delfino";
    Location["MasseursAddress"] = "Masseur's Address";
    Location["YourAddress"] = "Your Address";
})(Location || (Location = {}));
// Define Appointment Schema
const appointmentSchema = new mongoose_1.Schema({
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
const AppointmentModel = (0, mongoose_1.model)('Appointment', appointmentSchema);
exports.default = AppointmentModel;
