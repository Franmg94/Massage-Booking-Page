import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormContext } from "./FormContext";

enum Service {
  Wellness = "Wellness",
  DeepTissue = "Deep Tissue",
  EnergyWork = "Energy Work",
  Holistic = "Holistic",
  USC = "Urban Sports Club",
  ClassPass = "Class Pass",
}

enum Location {
  CentroDelfino = "Centro Delfino",
  MasseursAddress = "Weigandufer 26",
  ClientAddress = "Client Address",
}

interface Client {
  name: string;
  email: string;
  phone: string;
  address?: string;
  uscNumber?: number;
}

interface FormData {
  service: Service;
  date: Date | null;
  time: string;
  location: Location;
  duration: number;
  client: Client;
}

const initialFormData: FormData = {
  service: Service.Wellness,
  date: null,
  time: "",
  location: Location.CentroDelfino,
  duration: 60,
  client: {
    name: "",
    email: "",
    phone: "",
    address: "",
    uscNumber: undefined,
  },
};

const mondayTimes = [
  { value: "16:00", label: "16:00" },
  { value: "16:30", label: "16:30" },
  { value: "17:00", label: "17:00" },
  { value: "17:30", label: "17:30" },
  { value: "18:00", label: "18:00" },
  { value: "18:30", label: "18:30" },
];

const thursdayTimes = [
  { value: "10:00", label: "10:00" },
  { value: "10:30", label: "10:30" },
  { value: "11:00", label: "11:00" },
  { value: "11:30", label: "11:30" },
  { value: "12:00", label: "12:00" },
  { value: "12:30", label: "12:30" },
  { value: "16:00", label: "16:00" },
  { value: "16:30", label: "16:30" },
  { value: "17:00", label: "17:00" },
  { value: "17:30", label: "17:30" },
  { value: "18:00", label: "18:00" },
  { value: "18:30", label: "18:30" },
];

const SlideBookingForm: React.FC = () => {
  const { isOpen, toggleForm } = useFormContext();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [step, setStep] = useState(1);
  const [availableTimes, setAvailableTimes] = useState(thursdayTimes);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      client: {
        ...formData.client,
        [name]: value,
      },
    });
  };
  const handleDateChange = (date: Date) => {
    setFormData({
      ...formData,
      date,
    });

    // Set available times based on the selected day
    if (date.getDay() === 1) {
      setAvailableTimes(mondayTimes);
    } else if (date.getDay() === 4) {
      setAvailableTimes(thursdayTimes);
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/appointments`,
        formData
      );
      alert("Appointment booked successfully!");
      toggleForm();
    } catch (error) {
      console.error("There was an error booking the appointment:", error);
    }
  };

  const isStep4Valid = () => {
    // Check common required fields
    if (
      !formData.client.name ||
      !formData.client.email ||
      !formData.client.phone
    ) {
      return false;
    }
    // Check address if Client Address is selected
    if (
      formData.location === Location.ClientAddress &&
      !formData.client.address
    ) {
      return false;
    }
    // Check USC number if USC service is selected
    if (
      formData.service === Service.USC &&
      (!formData.client.uscNumber ||
        !/^\d{9}$/.test(formData.client.uscNumber.toString()))
    ) {
      return false;
    }
    return true;
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Select Location</h2>
            <div>
              {Object.values(Location).map((location) => (
                <div key={location}>
                  <button
                    className={`p-4 w-full text-left border rounded ${
                      formData.location === location
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, location }))
                    }
                  >
                    {location}
                  </button>
                  <p>
                    {location === Location.CentroDelfino &&
                      "Only on Tuesdays. You will be redirected to Centro Delfino Website."}
                    {location === Location.MasseursAddress &&
                      "Visit me at my home in NK for a relaxing session, only Queers."}
                    {location === Location.ClientAddress &&
                      "Transportation by Uber is not included."}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                if (formData.location === Location.CentroDelfino) {
                  window.open(
                    "https://schoeneberg.centro-delfino.com/online-buchung/",
                    "_blank"
                  );
                } else {
                  setStep(2);
                }
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        );

      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Select Service</h2>
            <div className="mb-4">
              {Object.values(Service).map((service) => (
                <div key={service} className="mb-2">
                  <button
                    className={`p-2 w-full text-left border rounded ${
                      formData.service === service
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, service }))
                    }
                  >
                    {service}
                  </button>
                  <p className="text-xs text-gray-600 mt-1">
                    {service === Service.Wellness &&
                      "A relaxing wellness massage."}
                    {service === Service.DeepTissue &&
                      "Deep tissue massage to relieve tension."}
                    {service === Service.EnergyWork &&
                      "Energy work to balance your body’s energy."}
                    {service === Service.Holistic &&
                      "A holistic approach to your well-being."}
                    {service === Service.USC &&
                      "Urban Sports Club membership service."}
                    {service === Service.ClassPass &&
                      "ClassPass membership service."}
                  </p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="bg-gray-500 text-white px-3 py-1 rounded mr-2"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Next
            </button>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Select Date and Time</h2>
            <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              filterDate={(date: Date) =>
                date.getDay() === 1 || date.getDay() === 4
              }
              className="mb-4 p-2 border w-full"
              placeholderText="Select a Monday or Thursday"
            />
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="mb-4 p-2 border w-full"
            >
              <option value="" disabled>
                Select Time
              </option>
              {availableTimes.map((time) => (
                <option key={time.value} value={time.value}>
                  {time.label}
                </option>
              ))}
            </select>
            <button
              onClick={() => setStep(2)}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Back
            </button>
            <button
              onClick={() => setStep(4)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        );
      case 4:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.client.name}
              onChange={handleClientChange}
              className="mb-4 p-2 border w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.client.email}
              onChange={handleClientChange}
              className="mb-4 p-2 border w-full"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.client.phone}
              onChange={handleClientChange}
              className="mb-4 p-2 border w-full"
              required
            />
            {formData.location === Location.ClientAddress && (
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.client.address}
                onChange={handleClientChange}
                className="mb-4 p-2 border w-full"
                required
              />
            )}
            {formData.service === Service.USC && (
              <input
                type="number"
                name="uscNumber"
                placeholder="USC Number"
                value={formData.client.uscNumber ?? ""}
                onChange={handleClientChange}
                className="mb-4 p-2 border w-full"
                required
                minLength={9}
                maxLength={9}
                pattern="\d{9}"
              />
            )}
            <button
              onClick={() => setStep(3)}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Back
            </button>
            <button
              onClick={() => {
                if (isStep4Valid()) {
                  setStep(5);
                } else {
                  alert("Please fill out all required fields correctly.");
                }
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        );
      case 5:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Confirm Your Booking</h2>
            <p>Service: {formData.service}</p>
            <p>Location: {formData.location}</p>
            <p>Date: {formData.date?.toLocaleDateString()}</p>
            <p>Time: {formData.time}</p>
            <p>Name: {formData.client.name}</p>
            <p>Email: {formData.client.email}</p>
            <p>Phone: {formData.client.phone}</p>
            <p>Address: {formData.client.address}</p>
            <p>USC Number: {formData.client.uscNumber}</p>
            <button
              onClick={() => setStep(4)}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Confirm
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleForm}
        ></div>
      )}
      <div className="relative">
        <div
          className={`fixed top-0 left-0 w-1/3 h-full bg-white shadow-lg z-50 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <button
            onClick={toggleForm}
            className="absolute top-4 right-4 text-white"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="p-8">{renderStep()}</div>
        </div>
      </div>
    </>
  );
};

export default SlideBookingForm;
