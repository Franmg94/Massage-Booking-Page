import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setStatus("");

    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send the message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-12">
      <hr className="mb-10 w-full" />
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-raleway">I'd love to hear from you!</p>
        <h2 className="text-3xl mb-10 font-abril">Contact Me</h2>

        <div className="flex flex-col md:justify-center items-center">
          <div className="w-2/5">
            <p className="text-lg font-heebo leading-relaxed">
              If you are a Web Developer, I would be very happy to receive any
              feedback about this web app or if you have any questions or would
              like to book a session, please reach out to me:
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 mx-auto w-2/5">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {status && <p className="mt-4">{status}</p>}
      </div>
    </section>
  );
};

export default ContactSection;
