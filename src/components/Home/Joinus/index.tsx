"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Specify the type for handleChange (ChangeEvent for input/textarea)
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Specify the type for handleSubmit (FormEvent for the form)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here (e.g., sending data to an API)
  };

  return (
    <section id="contact" className="overflow-hidden dark:bg-darkmode py-12 sm:py-16">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-primary">Contact Us</h2>
          <p className="text-white/60 text-sm sm:text-base lg:text-lg">
            Have questions or want to work with us? Fill out the form below, and we'll get back to you shortly.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-4 sm:mb-6"
            required
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-darkmode transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
