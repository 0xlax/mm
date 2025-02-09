"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Specify the type for handleChange (ChangeEvent for input/textarea)
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Specify the type for handleSubmit (FormEvent for the form)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! We'll get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="overflow-hidden dark:bg-darkmode py-16 sm:py-20">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            Have questions or want to work with us? Fill out the form below, and we'll get back to you shortly.
          </p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit} 
          className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                placeholder="Your Name"
                className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border ${
                  focusedField === "name" ? "border-primary" : "border-gray-200 dark:border-gray-700"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300`}
                required
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                placeholder="Your Email"
                className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border ${
                  focusedField === "email" ? "border-primary" : "border-gray-200 dark:border-gray-700"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300`}
                required
              />
            </div>
          </div>
          <div className="relative mb-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              placeholder="Your Message"
              rows={4}
              className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border ${
                focusedField === "message" ? "border-primary" : "border-gray-200 dark:border-gray-700"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none`}
              required
            ></textarea>
          </div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              type="submit"
              className="w-full sm:w-auto min-w-[200px] px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
