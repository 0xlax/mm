"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Aboutus = () => {
  return (
    <section className="bg-cover bg-center dark:bg-darkmode overflow-hidden py-16">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between relative z-1 px-4">
        {/* Content Section */}
        <div className="w-full lg:w-1/2 bg-grey dark:bg-darkmode rounded-3xl p-8 shadow-xl relative z-10">
          <p className="text-center text-primary text-18 tracking-widest uppercase mb-4">
            About Us
          </p>
          <h4 className="text-center text-3xl lg:text-4xl font-bold mb-6">
            Know Our Story
          </h4>
          <p className="text-center text-lg text-black dark:text-white mb-8">
            With a passion for artistry and a love for storytelling, we embarked on a photography journey. Our mission is to freeze the essence of life's most beautiful moments in timeless frames.
          </p>
          <div className="text-center">
            <Link
              href="#"
              className="text-18 font-semibold text-primary hover-underline flex items-center justify-center mx-auto mb-8"
            >
              Learn More
              <Icon icon="tabler:chevron-right" width="20" height="20" />
            </Link>
            <button
              className="bg-primary text-white hover:bg-blue-700 border border-primary px-6 py-3 rounded-lg mt-4 transition duration-300"
              onClick={() => {
                // Add your "Book a Call" functionality here
                alert("Book a Call clicked!");
              }}
            >
              Book a Call
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 ml-4 relative">
          <div className="overflow-hidden rounded-full shadow-xl w-96 h-96 mx-auto lg:mx-0">
            <Image
              src="/images/aboutus/event-management.jpg" // Use the event management image
              alt="Event Management"
              width={500}
              height={500}
              className="object-cover w-full h-full transform scale-110 hover:scale-125 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
