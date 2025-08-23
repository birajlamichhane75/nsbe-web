"use client";
import CommonSection1 from "../ui/CommonSection1";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full p-6 bg-black">
      <CommonSection1>
        <div className="">
          <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">
            Contact Us
          </h2>
          <form
            className="flex flex-col gap-4 max-w-4xl mx-auto"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black border-2 border-yellow-400 text-yellow-400 font-medium rounded focus:outline-none focus:border-yellow-300 transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black border-2 border-yellow-400 text-yellow-400 font-medium rounded focus:outline-none focus:border-yellow-300 transition"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 bg-black border-2 border-yellow-400 text-yellow-400 font-medium rounded focus:outline-none focus:border-yellow-300 resize-none transition"
              required
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-bold py-3 rounded hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </CommonSection1>
    </div>
  );
};

export default ContactForm;
