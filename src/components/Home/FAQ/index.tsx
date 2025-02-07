"use client"
import React from "react";
import { Icon } from "@iconify/react";
import { Disclosure } from "@headlessui/react";

const faqs = [
  {
    question: "What are your rates and packages?",
    answer: "Our rates and packages are designed to cater uniquely to your needs, ensuring that you receive exactly what you envision for your special moments. We start with a variety of base packages which serve as starting points, and each can be customized to match your specific requirements. Our starting rates are competitively set to provide you with the best value, allowing for additions and adjustments based on the type of event, location, and special services you might need. For detailed information and a personalized quote, we invite you to contact us directly. Let’s design the perfect package together!"
  },
  {
    question: "Do you offer customizable photography sessions?",
    answer: "Definitely! We specialize in customizable photography sessions tailored to meet your specific desires and requirements. Whether you’re looking for a particular theme, style, or have specific moments you want captured, we collaborate with you to create a session that reflects your unique vision. From the choice of location to the styling and the type of photography, everything can be adjusted to ensure the final results are exactly as you envisioned. Let’s create something truly special together!"
  },
  {
    question: "How long does it take to receive the final images?",
    answer: "After your photo session, we dedicate ourselves to meticulously editing and perfecting each image to ensure they meet our high standards and your expectations. Typically, you can expect to receive your final images within 4 to 6 weeks. However, we always strive to deliver them as quickly as possible without compromising quality. For those who need faster delivery, we offer expedited services as an option. Please let us know your requirements, and we’ll do our best to accommodate your timeline!"
  },
  {
    question: "Can we request specific locations for our shoot?",
    answer: "Absolutely! We are more than happy to accommodate specific location requests for your photo shoot. Whether you envision your photos in a lush garden, a modern urban setting, or somewhere deeply personal and unique to you, we’ll work closely with you to select the perfect backdrop that reflects your style and the essence of the occasion. Just let us know your preferred locations when you book with us, and we’ll take care of the logistics to ensure a seamless shooting experience."
  },
  {
    question: "Are you available for destination weddings?",
    answer: "Yes, we love capturing beautiful moments at destination weddings! Whether your special day takes place on a sun-kissed beach, in a charming European village, or at any exotic locale, we’re equipped to travel and capture every precious moment. Please contact us for more details on our destination wedding packages and travel arrangements."
  },
  {
    question: "What measures do you take to ensure the safety of our photos?",
    answer: "We take the safety and security of your photos very seriously. To ensure your precious memories are well-protected, we use multiple measures including high-quality backup systems, encrypted storage solutions, and secure cloud services. Each photo session is immediately backed up in multiple locations to prevent any loss due to hardware failure, theft, or damage. Furthermore, we maintain strict confidentiality and access controls, ensuring that only authorized personnel can handle your photos. Your memories are safe with us!"
  }
];

const FAQ = () => {
  return (
    <section className="relative py-8 sm:py-12 lg:py-16 bg-cover bg-center overflow-hidden dark:bg-darkmode">
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-xl p-6 sm:p-8 lg:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">Frequently Asked Questions</h2>
          <p className="text-sm sm:text-base mb-6">Find answers to the most common questions about our services.</p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <div className="bg-white text-black rounded-lg p-4 sm:p-5 lg:p-6 shadow-sm">
                    <Disclosure.Button className="flex justify-between items-center w-full text-left text-sm sm:text-base lg:text-lg font-medium">
                      <span>{faq.question}</span>
                      <Icon icon="lucide:chevron-down" className={`h-5 w-5 transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-3 text-xs sm:text-sm lg:text-base text-gray-700 border-t border-gray-200 pt-3">
                      {faq.answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
