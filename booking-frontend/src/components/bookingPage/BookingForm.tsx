import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import CustomCalendar from "./CustomCalendar";


const BookingForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    treatment: "",
    date: new Date(),
    time: "",
    location: "",
    duration: "",
    name: "",
    email: "",
    phone: "",
    uscNumber: "",
    clientAddress: "",
  });

  const [errors, setErrors] = useState({ uscNumber: "" });
  const availableDates = [
    new Date(),
    new Date(new Date().setDate(new Date().getDate() + 1)),
  ];
  const availableTimes = ["11:00 AM", "12:00 AM", "4:00 PM", "5:00 PM", "6:00 PM"];

  const [selectedDuration, setSelectedDuration] = useState("");

  const handleAddressChange = (location: string) => {
    if (location === "Centro Delfino") {
      window.open(
        "https://schoeneberg.centro-delfino.com/online-buchung/",
        "_blank"
      );
    } else {
      setFormData((prevState) => ({ ...prevState, location }));
      setStep(2);
    }
  };

  const handleTreatmentChange = (treatment: string) => {
    setFormData({ ...formData, treatment });
    setStep(3);
  };

  const handleDateChange = (date: Date) => {
    setFormData({ ...formData, date });
  };

  const handleTimeChange = (time: string) => {
    setFormData({ ...formData, time });
  };

  const handleDurationChange = (duration: string) => {
    setFormData({ ...formData, duration });
    setSelectedDuration(duration);
    // setStep(4);
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
    console.log(formData);
  };
  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "uscNumber") {
      if (!/^\d{9}$/.test(value)) {
        setErrors({
          ...errors,
          uscNumber: "USC Number must be exactly 9 digits.",
        });
      } else {
        setErrors({ ...errors, uscNumber: "" });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const appointmentData = {
      service: formData.treatment,
      date: formData.date.toISOString(),
      time: formData.time,
      location: formData.location,
      duration: formData.duration,
      assistance: "Waiting",
      client: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        uscNumber: formData.uscNumber
          ? parseInt(formData.uscNumber)
          : "123456789",
        address: formData.clientAddress
          ? formData.clientAddress
          : "Masseur's Address",
      },
    };

    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/appointments`,
        appointmentData
      );
      alert("Booking successful!");
      setStep(6);
    } catch (error) {
      console.error(error);
      console.log(appointmentData);
      alert("Booking failed.");
    }
  };

  return (
    <>
      <div className="min-w-screen flex items-center justify-center">
        <div className="  p-3 bg-earth-brown bg-opacity-20 shadow-lg rounded-lg w-full ">
          {/* LOCATION */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl text-white text-shadow mb-6 text-center">
                Choose Address
              </h2>
              <div className="mb-4">
                <button
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleAddressChange("Centro Delfino")}
                >
                  Centro Delfino
                </button>
              </div>
              <div className="mb-4">
                <button
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleAddressChange("Weigandufer 26")}
                >
                  Masseur's Address (Weigandufer Neuköln)
                </button>
              </div>
              <div className="mb-4">
                <button
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleAddressChange("Client Address")}
                >
                  Client Address (Uber is not included in the price)
                </button>
              </div>
            </div>
          )}

          {/* TREATMENT */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl text-white text-shadow mb-6 text-center">
                Choose Your Treatment
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {treatments.map((treatment) => (
                  <div className="mb-4" key={treatment.value}>
                    <button
                      className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleTreatmentChange(treatment.value)}
                    >
                      {treatment.value}
                    </button>
                    <p className="text-white text-shadow text-sm mt-1">
                      {treatment.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* PREV NEXT BTN */}
              <div>
                {/* <button
              className="bg-earth-brown py-2 px-4 border hover:bg-blue-500 rounded "
              onClick={() => handleNextStep()}
            >
              Next Step
            </button> */}
                <button
                  className="bg-earth-brown py-2 px-4 border hover:bg-blue-500 rounded "
                  onClick={() => handlePrevStep()}
                >
                  Prev Step
                </button>
              </div>
            </div>
          )}

          {/* DATE */}
          {step === 3 && (
            <div className="flex flex-col md:flex-row justify-between pt-16 md:pt-0 space-y-4 md:space-y-0">
              {/* Choose Date */}
              <div className="flex-1">
                <h2 className="text-2xl text-white text-shadow mb-6 text-center">
                  Choose Date
                </h2>
                <CustomCalendar onDateChange={handleDateChange} />
                {/* <DatePicker
                  selected={formData.date}
                  onChange={handleDateChange}
                  highlightDates={availableDates}
                  inline
                /> */}
              </div>

              {/* Choose Time Slot and Duration */}
              <div className="flex flex-col md:flex-row flex-1 space-y-4 md:space-x-4">
                <div className="flex-1">
                  <h2 className="text-2xl text-white text-shadow mb-6 text-center">
                    Choose Time Slot
                  </h2>
                  {availableTimes.map((time) => (
                    <div className="mb-4" key={time}>
                      <button
                        className={`w-full text-white font-bold py-2 px-4 rounded ${
                          formData.time === time
                            ? "bg-green-700"
                            : "bg-green-500 hover:bg-green-700"
                        }`}
                        onClick={() => handleTimeChange(time)}
                      >
                        {time}
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl text-white text-shadow mb-6 text-center">
                    Choose Duration
                  </h2>
                  <div className="mb-4">
                    <button
                      className={`w-full text-white font-bold py-2 px-4 rounded ${
                        formData.duration === "30"
                          ? "bg-green-700"
                          : "bg-green-500 hover:bg-green-700"
                      }`}
                      onClick={() => handleDurationChange("30")}
                    >
                      30 minutes
                    </button>
                  </div>
                  <div className="mb-4">
                    <button
                      className={`w-full text-white font-bold py-2 px-4 rounded ${
                        formData.duration === "45"
                          ? "bg-green-700"
                          : "bg-green-500 hover:bg-green-700"
                      }`}
                      onClick={() => handleDurationChange("45")}
                    >
                      45 minutes
                    </button>
                  </div>
                  <div className="mb-4">
                    <button
                      className={`w-full text-white font-bold py-2 px-4 rounded ${
                        formData.duration === "60"
                          ? "bg-green-700"
                          : "bg-green-500 hover:bg-green-700"
                      }`}
                      onClick={() => handleDurationChange("60")}
                    >
                      60 minutes
                    </button>
                  </div>
                  <div className="mb-4">
                    <button
                      className={`w-full text-white font-bold py-2 px-4 rounded ${
                        formData.duration === "90"
                          ? "bg-green-700"
                          : "bg-green-500 hover:bg-green-700"
                      }`}
                      onClick={() => handleDurationChange("90")}
                    >
                      90 minutes
                    </button>
                  </div>
                </div>
              </div>
              {/* PREV NEXT BTN */}
              <div>
                <button
                  className="bg-earth-brown py-2 px-4 border hover:bg-blue-500 rounded "
                  onClick={() => handleNextStep()}
                >
                  Next Step
                </button>
                <button
                  className="bg-earth-brown py-2 px-4 border hover:bg-blue-500 rounded "
                  onClick={() => handlePrevStep()}
                >
                  Prev Step
                </button>
              </div> 
            </div>
          )}

          {/* DETAILS */}
          {step === 4 && (
            <div>
              <h2 className="text-2xl text-white text-shadow mb-6 text-center">
                Enter Your Details
              </h2>
              <div className="mb-4">
                <label className="block text-white text-shadow">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white text-shadow">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white text-shadow">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              {formData.treatment === "Urban Sports Club" && (
                <div className="mb-4">
                  <label className="block text-white text-shadow">
                    USC Number
                  </label>
                  <input
                    type="text"
                    name="uscNumber"
                    className={`w-full p-2 border ${
                      errors.uscNumber ? "border-red-500" : "border-gray-300"
                    } rounded mt-1`}
                    placeholder="Your USC Number"
                    value={formData.uscNumber}
                    onChange={handleChange}
                  />
                  {errors.uscNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.uscNumber}
                    </p>
                  )}
                </div>
              )}
              {formData.location === "Client Address" && (
                <div className="mb-4">
                  <label className="block text-white text-shadow">
                    Address
                  </label>
                  <input
                    type="text"
                    name="clientAddress"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    placeholder="Your Address"
                    value={formData.clientAddress}
                    onChange={handleChange}
                  />
                </div>
              )}
              <div className="mb-4">
                <button
                  className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => setStep(5)}
                >
                  Next
                </button>
              </div>

              {/* PREV NEXT BTN */}
              <div>
                <button
                  className="bg-earth-brown py-2 px-4 border hover:bg-blue-500 rounded "
                  onClick={() => handleNextStep()}
                >
                  Next Step
                </button>
                <button
                  className="bg-earth-brown py-2 px-4 border hover:bg-blue-500 rounded "
                  onClick={() => handlePrevStep()}
                >
                  Prev Step
                </button>
              </div>
            </div>
          )}

          {/* REVIEW */}
          {step === 5 && (
            <div>
              <h2 className="text-2xl text-white text-shadow mb-6 text-center">
                Review Your Information
              </h2>
              <ul className="mb-4">
                <li className="text-white text-shadow">
                  <strong>Location:</strong> {formData.location}
                </li>
                <li className="text-white text-shadow">
                  <strong>Treatment:</strong> {formData.treatment}
                </li>
                <li className="text-white text-shadow">
                  <strong>Date:</strong> {formData.date.toLocaleDateString()}
                </li>
                <li className="text-white text-shadow">
                  <strong>Time:</strong> {formData.time}
                </li>
                <li className="text-white text-shadow">
                  <strong>Duration:</strong> {formData.duration} minutes
                </li>
                <li className="text-white text-shadow">
                  <strong>Name:</strong> {formData.name}
                </li>
                <li className="text-white text-shadow">
                  <strong>Email:</strong> {formData.email}
                </li>
                <li className="text-white text-shadow">
                  <strong>Phone:</strong> {formData.phone}
                </li>
                {formData.treatment === "USC" && (
                  <li className="text-white text-shadow">
                    <strong>USC Number:</strong> {formData.uscNumber}
                  </li>
                )}
                {formData.location === "ClientAddress" && (
                  <li className="text-white text-shadow">
                    <strong>Client Address:</strong> {formData.clientAddress}
                  </li>
                )}
              </ul>
              <div className="mb-4">
                <button
                  className="bg-earth-brown py-2 px-4 border hover:bg-blue-500 rounded "
                  onClick={() => handlePrevStep()}
                >
                  Prev Step
                </button>
                <button
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleSubmit}
                >
                  Confirm
                </button>
              </div>
            </div>
          )}

          {/* CONFIRMATION  */}
          {step === 6 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center text-white text-shadow">
                Booking Confirmed
              </h2>
              <p className="mb-4 text-white text-shadow">
                Thank you for your booking! A confirmation email has been sent
                to you.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const treatments = [
  { value: "Wellness", description: "A relaxing wellness massage." },
  { value: "Holistic", description: "A holistic approach to massage." },
  { value: "Energy Work", description: "Energy work to balance your body." },
  {
    value: "Deep Tissue",
    description: "Deep tissue massage for muscle relief.",
  },
  { value: "Urban Sports Club", description: "Urban Sports Club." },
  { value: "Class Pass", description: "ClassPass members." },
];
export default BookingForm;
